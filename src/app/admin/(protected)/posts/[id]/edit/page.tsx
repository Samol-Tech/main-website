import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PostForm } from "../../post-form";
import { updatePost } from "../../actions";

export default async function EditPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { id } = await params;
  const { error } = await searchParams;

  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) {
    notFound();
  }

  const action = updatePost.bind(null, post.id);

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#111318] dark:text-white">Edit Post</h1>
      {error && (
        <p className="mt-4 max-w-2xl rounded-md bg-red-50 dark:bg-red-950 px-3 py-2 text-sm text-red-700 dark:text-red-300">
          {error}
        </p>
      )}
      <PostForm action={action} post={post} submitLabel="Save Changes" />
    </div>
  );
}
