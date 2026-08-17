import type { Post } from "@prisma/client";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";

const fieldClass =
  "mt-1 block w-full rounded-md border-0 py-2 px-3 bg-background-light dark:bg-background-dark text-[#111318] dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm";
const labelClass = "block text-sm font-medium text-[#111318] dark:text-white";

export function PostForm({
  action,
  post,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  post?: Post;
  submitLabel: string;
}) {
  return (
    <form action={action} className="mt-6 max-w-2xl space-y-5">
      <div>
        <label htmlFor="title" className={labelClass}>
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={post?.title}
          className={fieldClass}
        />
      </div>

      {post && (
        <div>
          <label htmlFor="slug" className={labelClass}>
            Slug
          </label>
          <input id="slug" name="slug" type="text" defaultValue={post.slug} className={fieldClass} />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Changing this changes the post&apos;s URL.
          </p>
        </div>
      )}

      <div>
        <label htmlFor="excerpt" className={labelClass}>
          Excerpt
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          rows={2}
          required
          defaultValue={post?.excerpt}
          className={fieldClass}
        />
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Short summary shown on the blog listing card.
        </p>
      </div>

      <div>
        <label htmlFor="content" className={labelClass}>
          Content (Markdown)
        </label>
        <textarea
          id="content"
          name="content"
          rows={14}
          required
          defaultValue={post?.content}
          className={`${fieldClass} font-mono`}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="category" className={labelClass}>
            Category
          </label>
          <select id="category" name="category" defaultValue={post?.category} className={fieldClass}>
            {BLOG_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="status" className={labelClass}>
            Status
          </label>
          <select id="status" name="status" defaultValue={post?.status ?? "DRAFT"} className={fieldClass}>
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="coverImage" className={labelClass}>
          Cover Image URL (optional)
        </label>
        <input
          id="coverImage"
          name="coverImage"
          type="url"
          placeholder="https://..."
          defaultValue={post?.coverImage ?? ""}
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
      >
        {submitLabel}
      </button>
    </form>
  );
}
