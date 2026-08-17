import { prisma } from "@/lib/prisma";
import { markAsRead, archiveSubmission, deleteSubmission } from "./actions";

const statusStyles: Record<string, string> = {
  NEW: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  READ: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  ARCHIVED: "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-500",
};

export default async function AdminSubmissionsPage() {
  const submissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#111318] dark:text-white">Contact Submissions</h1>

      {submissions.length === 0 ? (
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          No submissions yet. They&apos;ll show up here as visitors fill out the contact form.
        </p>
      ) : (
        <div className="mt-6 flex flex-col gap-4">
          {submissions.map((submission) => {
            const readAction = markAsRead.bind(null, submission.id);
            const archiveAction = archiveSubmission.bind(null, submission.id);
            const deleteAction = deleteSubmission.bind(null, submission.id);

            return (
              <div
                key={submission.id}
                className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-[#111318] dark:text-white">{submission.fullName}</p>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[submission.status]}`}>
                        {submission.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {submission.email}
                      {submission.phone ? ` · ${submission.phone}` : ""} · {submission.inquiryType}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {submission.createdAt.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {submission.message}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  {submission.status === "NEW" && (
                    <form action={readAction}>
                      <button type="submit" className="font-medium text-primary hover:text-primary/80">
                        Mark as Read
                      </button>
                    </form>
                  )}
                  {submission.status !== "ARCHIVED" && (
                    <form action={archiveAction}>
                      <button type="submit" className="font-medium text-[#111318] dark:text-gray-200 hover:text-primary">
                        Archive
                      </button>
                    </form>
                  )}
                  <form action={deleteAction}>
                    <button type="submit" className="font-medium text-red-600 hover:text-red-500">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
