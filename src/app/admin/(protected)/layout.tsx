import Link from "next/link";
import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";

// Wraps every protected admin route (everything under /admin except
// /admin/login). Middleware (src/proxy.ts) already gates these routes at the
// edge, but we re-check the session here too — defense in depth, and it's
// what lets us read the signed-in admin's email for the sidebar.
export default async function ProtectedAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session?.user) {
    redirect("/admin/login");
  }

  async function handleSignOut() {
    "use server";
    await signOut({ redirectTo: "/admin/login" });
  }

  const navLinks = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/posts", label: "Posts" },
    { href: "/admin/submissions", label: "Submissions" },
  ];

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <aside className="flex w-60 shrink-0 flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
        <div className="mb-8 px-2">
          <p className="text-sm font-bold text-[#111318] dark:text-white">SamolTech Consult</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Admin dashboard</p>
        </div>
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[#111318] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-2 border-t border-gray-200 dark:border-gray-800 pt-4">
          <p className="truncate px-2 text-xs text-gray-500 dark:text-gray-400">
            {session.user.email}
          </p>
          <form action={handleSignOut}>
            <button
              type="submit"
              className="w-full rounded-md px-3 py-2 text-left text-sm font-medium text-[#111318] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Sign Out
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
