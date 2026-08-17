import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboardPage() {
  const [publishedCount, draftCount, newSubmissionCount] = await Promise.all([
    prisma.post.count({ where: { status: "PUBLISHED" } }),
    prisma.post.count({ where: { status: "DRAFT" } }),
    prisma.contactSubmission.count({ where: { status: "NEW" } }),
  ]);

  const stats = [
    { label: "Published Posts", value: publishedCount, href: "/admin/posts" },
    { label: "Drafts", value: draftCount, href: "/admin/posts" },
    { label: "New Submissions", value: newSubmissionCount, href: "/admin/submissions" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#111318] dark:text-white">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:shadow-md transition-shadow"
          >
            <p className="text-3xl font-bold text-[#111318] dark:text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
