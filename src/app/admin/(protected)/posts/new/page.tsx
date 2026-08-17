import { PostForm } from "../post-form";
import { createPost } from "../actions";

export default async function NewPostPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#111318] dark:text-white">New Post</h1>
      {error && (
        <p className="mt-4 max-w-2xl rounded-md bg-red-50 dark:bg-red-950 px-3 py-2 text-sm text-red-700 dark:text-red-300">
          {error}
        </p>
      )}
      <PostForm action={createPost} submitLabel="Create Post" />
    </div>
  );
}
