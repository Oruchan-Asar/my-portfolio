import Card from "@/components/Card";
import { fetchBookmarks } from "@/utils/bookmarks";

async function getBookmarks() {
  try {
    // Directly call the utility function instead of making HTTP request
    // This is more efficient for server components and avoids URL construction issues
    return await fetchBookmarks();
  } catch (error) {
    console.error("Error fetching bookmarks:", error);
    return []; // Return empty array as fallback
  }
}

export default async function Bookmarks() {
  const bookmarks = await getBookmarks();

  if (!bookmarks || bookmarks.length === 0) {
    return (
      <div className="flex flex-col gap-8">
        <p className="text-stone-500 dark:text-stone-400">
          Currently unable to load bookmarks. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <p className="text-stone-500 dark:text-stone-400">
        Here are some tools that I currently use or have enjoyed using in the
        past:
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 laptop:grid-cols-3">
        {bookmarks.map((bookmark) => (
          <Card
            key={bookmark._id}
            image={
              bookmark.cover || bookmark.favicon || "/placeholder-image.jpg"
            }
            title={bookmark.title}
            desc={bookmark.excerpt || bookmark.description}
            link={bookmark.link}
          />
        ))}
      </div>
    </div>
  );
}
