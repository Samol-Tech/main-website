"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slugify";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";

const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters.").max(200),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters.").max(300),
  content: z.string().min(20, "Content must be at least 20 characters."),
  category: z.enum(BLOG_CATEGORIES),
  coverImage: z.url("Cover image must be a valid URL.").optional().or(z.literal("")),
  status: z.enum(["DRAFT", "PUBLISHED"]),
});

async function requireAdmin() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Not authenticated.");
  }
}

function firstError(error: z.ZodError) {
  return error.issues[0]?.message ?? "Invalid input.";
}

// Appends -2, -3, ... to the base slug until it's unique. `excludeId` lets
// updatePost keep a post's own existing slug without colliding with itself.
async function uniqueSlug(base: string, excludeId?: string): Promise<string> {
  let slug = base || "post";
  let suffix = 2;
  while (
    await prisma.post.findFirst({
      where: { slug, ...(excludeId ? { id: { not: excludeId } } : {}) },
    })
  ) {
    slug = `${base}-${suffix}`;
    suffix += 1;
  }
  return slug;
}

export async function createPost(formData: FormData) {
  await requireAdmin();

  const parsed = postSchema.safeParse({
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    category: formData.get("category"),
    coverImage: formData.get("coverImage"),
    status: formData.get("status"),
  });

  if (!parsed.success) {
    redirect(`/admin/posts/new?error=${encodeURIComponent(firstError(parsed.error))}`);
  }

  const { title, excerpt, content, category, coverImage, status } = parsed.data;
  const slug = await uniqueSlug(slugify(title));

  await prisma.post.create({
    data: {
      title,
      slug,
      excerpt,
      content,
      category,
      coverImage: coverImage || null,
      status,
      publishedAt: status === "PUBLISHED" ? new Date() : null,
    },
  });

  revalidatePath("/admin/posts");
  revalidatePath("/blog");
  revalidatePath("/");
  redirect("/admin/posts");
}

export async function updatePost(id: string, formData: FormData) {
  await requireAdmin();

  const parsed = postSchema.safeParse({
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    category: formData.get("category"),
    coverImage: formData.get("coverImage"),
    status: formData.get("status"),
  });

  if (!parsed.success) {
    redirect(`/admin/posts/${id}/edit?error=${encodeURIComponent(firstError(parsed.error))}`);
  }

  const requestedSlug = formData.get("slug");
  const { title, excerpt, content, category, coverImage, status } = parsed.data;

  const existing = await prisma.post.findUnique({ where: { id } });
  if (!existing) {
    throw new Error("Post not found.");
  }

  const baseSlug =
    typeof requestedSlug === "string" && requestedSlug.trim() ? slugify(requestedSlug) : existing.slug;
  const slug = baseSlug === existing.slug ? existing.slug : await uniqueSlug(baseSlug, id);

  await prisma.post.update({
    where: { id },
    data: {
      title,
      slug,
      excerpt,
      content,
      category,
      coverImage: coverImage || null,
      status,
      publishedAt: status === "PUBLISHED" ? (existing.publishedAt ?? new Date()) : existing.publishedAt,
    },
  });

  revalidatePath("/admin/posts");
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/");
  redirect("/admin/posts");
}

export async function deletePost(id: string) {
  await requireAdmin();
  const post = await prisma.post.delete({ where: { id } });
  revalidatePath("/admin/posts");
  revalidatePath("/blog");
  revalidatePath(`/blog/${post.slug}`);
  revalidatePath("/");
}

export async function togglePublish(id: string) {
  await requireAdmin();
  const post = await prisma.post.findUniqueOrThrow({ where: { id } });
  const nextStatus = post.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED";

  await prisma.post.update({
    where: { id },
    data: {
      status: nextStatus,
      publishedAt: nextStatus === "PUBLISHED" ? (post.publishedAt ?? new Date()) : post.publishedAt,
    },
  });

  revalidatePath("/admin/posts");
  revalidatePath("/blog");
  revalidatePath(`/blog/${post.slug}`);
  revalidatePath("/");
}
