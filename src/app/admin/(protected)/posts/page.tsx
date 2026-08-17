import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deletePost, togglePublish } from "./actions";

export default async function AdminPostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#111318] dark:text-white">Posts</h1>
        <Link
          href="/admin/posts/new"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
        >
          New Post
        </Link>
      </div>

      <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Title</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Category</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Updated</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900">
            {posts.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                  No posts yet. Create your first one.
                </td>
              </tr>
            )}
            {posts.map((post) => {
              const toggleAction = togglePublish.bind(null, post.id);
              const deleteAction = deletePost.bind(null, post.id);
              return (
                <tr key={post.id}>
                  <td className="px-4 py-3 text-sm font-medium text-[#111318] dark:text-white">{post.title}</td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{post.category}</td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        post.status === "PUBLISHED"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {post.status === "PUBLISHED" ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                    {post.updatedAt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </td>
                  <td className="px-4 py-3 text-right text-sm">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="font-medium text-primary hover:text-primary/80"
                      >
                        Edit
                      </Link>
                      <form action={toggleAction}>
                        <button type="submit" className="font-medium text-[#111318] dark:text-gray-200 hover:text-primary">
                          {post.status === "PUBLISHED" ? "Unpublish" : "Publish"}
                        </button>
                      </form>
                      <form action={deleteAction}>
                        <button type="submit" className="font-medium text-red-600 hover:text-red-500">
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
