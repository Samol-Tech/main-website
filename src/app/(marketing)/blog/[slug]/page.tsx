import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { prisma } from "@/lib/prisma";

async function getPost(slug: string) {
	return prisma.post.findFirst({ where: { slug, status: "PUBLISHED" } });
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const post = await getPost(slug);
	if (!post) return {};

	return {
		title: post.title,
		description: post.excerpt,
		openGraph: {
			title: `${post.title} | SamolTech Consult`,
			description: post.excerpt,
			url: `https://samoltechconsult.name.ng/blog/${post.slug}`,
			siteName: "SamolTech",
			images: [{ url: post.coverImage || "/image/logo.jpeg", width: 1200, height: 630, alt: post.title }],
			locale: "en_US",
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
			title: `${post.title} | SamolTech Consult`,
			description: post.excerpt,
			images: [post.coverImage || "/image/logo.jpeg"],
			creator: "@abiodun_sam_",
		},
	};
}

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = await getPost(slug);
	if (!post) {
		notFound();
	}

	return (
		<main className="flex-1 max-w-[760px] mx-auto px-4 py-16">
			<Link
				href="/blog"
				className="text-sm font-medium text-primary hover:text-primary/80"
			>
				&larr; Back to Blog
			</Link>

			<div className="mt-6">
				<p className="text-primary text-sm font-bold leading-normal">{post.category}</p>
				<h1 className="mt-2 text-[#111318] dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.015em]">
					{post.title}
				</h1>
				<p className="mt-3 text-[#616f89] dark:text-gray-500 text-sm">
					{(post.publishedAt ?? post.createdAt).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</p>
			</div>

			{post.coverImage && (
				<div
					className="mt-8 w-full aspect-video rounded-xl bg-center bg-cover bg-no-repeat"
					style={{ backgroundImage: `url('${post.coverImage}')` }}
				/>
			)}

			<div className="prose dark:prose-invert prose-headings:font-bold max-w-none mt-8">
				<ReactMarkdown>{post.content}</ReactMarkdown>
			</div>
		</main>
	);
}
