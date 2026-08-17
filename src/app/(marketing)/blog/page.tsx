import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Practical strategies from SamolTech Consult to help you get more return on your technology investment — web, mobile, cloud, and security.",
	openGraph: {
		title: "Blog | SamolTech Consult",
		description:
			"Practical strategies from SamolTech Consult to help you get more return on your technology investment — web, mobile, cloud, and security.",
		url: "https://samoltechconsult.name.ng/blog",
		siteName: "SamolTech",
		images: [
			{
				url: "/image/logo.jpeg",
				width: 1200,
				height: 630,
				alt: "SamolTech Consult",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog | SamolTech Consult",
		description:
			"Practical strategies from SamolTech Consult to help you get more return on your technology investment — web, mobile, cloud, and security.",
		images: ["/image/logo.jpeg"],
		creator: "@abiodun_sam_",
	},
};

const PAGE_SIZE = 6;

export default async function Blog({
	searchParams,
}: {
	searchParams: Promise<{ category?: string; q?: string; page?: string }>;
}) {
	const { category, q, page: pageParam } = await searchParams;
	const page = Math.max(1, Number(pageParam) || 1);

	const where = {
		status: "PUBLISHED" as const,
		...(category ? { category } : {}),
		...(q
			? {
					OR: [
						{ title: { contains: q, mode: "insensitive" as const } },
						{ excerpt: { contains: q, mode: "insensitive" as const } },
					],
				}
			: {}),
	};

	const [posts, total] = await Promise.all([
		prisma.post.findMany({
			where,
			orderBy: { publishedAt: "desc" },
			skip: (page - 1) * PAGE_SIZE,
			take: PAGE_SIZE,
		}),
		prisma.post.count({ where }),
	]);

	const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

	// Builds a /blog?... link that preserves the other active filters.
	function buildHref(overrides: { category?: string; q?: string; page?: number }) {
		const params = new URLSearchParams();
		const nextCategory = "category" in overrides ? overrides.category : category;
		const nextQ = "q" in overrides ? overrides.q : q;
		const nextPage = overrides.page ?? 1;
		if (nextCategory) params.set("category", nextCategory);
		if (nextQ) params.set("q", nextQ);
		if (nextPage > 1) params.set("page", String(nextPage));
		const qs = params.toString();
		return qs ? `/blog?${qs}` : "/blog";
	}

	return (
		<main className="flex-1 max-w-[960px] mx-auto">
			{/* PageHeading */}
			<div className="flex flex-wrap justify-between gap-3 p-4 pt-12 text-center md:text-left">
				<div className="flex w-full flex-col gap-3">
					<p className="text-[#111318] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Insights &amp; Articles</p>
					<p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal">
						Practical strategies to help you get more return on your technology investment.
					</p>
				</div>
			</div>
			{/* SearchBar and Chips */}
			<div className="px-4 py-3 flex flex-col md:flex-row gap-4 items-center">
				<form action="/blog" method="GET" className="w-full md:flex-1">
					<label className="flex flex-col min-w-40 h-12 w-full">
						<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
							<div
								className="text-[#616f89] dark:text-gray-400 flex border-none bg-white dark:bg-background-dark/50 items-center justify-center pl-4 rounded-l-lg border-r-0"
							>
								<span className="material-symbols-outlined">search</span>
							</div>
							<input
								name="q"
								defaultValue={q}
								className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-background-dark/50 focus:border-none h-full placeholder:text-[#616f89] dark:placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
								placeholder="Search articles by keyword..."
							/>
						</div>
					</label>
				</form>
				<div className="flex gap-2 p-3 flex-wrap justify-center">
					<Link
						href={buildHref({ category: undefined })}
						className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 transition-colors ${
							!category
								? "bg-primary text-white hover:bg-primary/90"
								: "bg-white dark:bg-background-dark/50 text-[#111318] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
						}`}
					>
						<p className="text-sm font-medium leading-normal">All</p>
					</Link>
					{BLOG_CATEGORIES.map((cat) => (
						<Link
							key={cat}
							href={buildHref({ category: cat })}
							className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 transition-colors ${
								category === cat
									? "bg-primary text-white hover:bg-primary/90"
									: "bg-white dark:bg-background-dark/50 text-[#111318] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
							}`}
						>
							<p className="text-sm font-medium leading-normal">{cat}</p>
						</Link>
					))}
				</div>
			</div>
			{/* Blog Post Grid */}
			{posts.length === 0 ? (
				<p className="px-4 py-16 text-center text-[#616f89] dark:text-gray-400">
					No articles found{q ? ` for "${q}"` : ""}
					{category ? ` in ${category}` : ""}.
				</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
					{posts.map((post) => (
						<div
							key={post.id}
							className="bg-white dark:bg-background-dark/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
						>
							{post.coverImage && (
								<div
									className="w-full bg-center bg-no-repeat aspect-video bg-cover"
									style={{ backgroundImage: `url('${post.coverImage}')` }}
								></div>
							)}
							<div className="p-6 flex flex-col gap-4">
								<p className="text-primary text-sm font-bold leading-normal">{post.category}</p>
								<p className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
									{post.title}
								</p>
								<p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal">
									{post.excerpt}
								</p>
								<div className="flex items-center justify-between mt-2">
									<p className="text-[#616f89] dark:text-gray-500 text-sm font-normal leading-normal">
										{(post.publishedAt ?? post.createdAt).toLocaleDateString("en-US", {
											year: "numeric",
											month: "short",
											day: "numeric",
										})}
									</p>
									<Link
										className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal hover:bg-primary/90 transition-colors"
										href={`/blog/${post.slug}`}
									>
										<span className="truncate">Read More</span>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
			{/* Pagination */}
			{totalPages > 1 && (
				<div className="flex justify-center p-4 pt-8">
					<nav className="flex items-center gap-2">
						{page > 1 && (
							<Link
								className="flex h-10 w-10 items-center justify-center rounded-lg text-[#616f89] dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
								href={buildHref({ page: page - 1 })}
							>
								<span className="material-symbols-outlined text-xl">chevron_left</span>
							</Link>
						)}
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
							<Link
								key={pageNumber}
								className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
									pageNumber === page
										? "bg-primary text-white"
										: "text-[#111318] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
								}`}
								href={buildHref({ page: pageNumber })}
							>
								{pageNumber}
							</Link>
						))}
						{page < totalPages && (
							<Link
								className="flex h-10 w-10 items-center justify-center rounded-lg text-[#616f89] dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
								href={buildHref({ page: page + 1 })}
							>
								<span className="material-symbols-outlined text-xl">chevron_right</span>
							</Link>
						)}
					</nav>
				</div>
			)}
		</main>
	);
}
