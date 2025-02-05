import Card from "@/components/Card";

async function getBookmarks() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/bookmarks`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch bookmarks:", res.status);
      return []; // Return empty array as fallback
    }

    return res.json();
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
        <p className="text-slate-500 dark:text-neutral-400">
          Currently unable to load bookmarks. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <p className="text-slate-500 dark:text-neutral-400">
        Here are some tools that I currently use or have enjoyed using in the
        past:
      </p>
      <div className="gap-6 space-y-6 columns-1 sm:columns-2 lg:columns-3 xl:columns-3">
        {bookmarks.map((bookmark) => (
          <div
            key={bookmark._id}
            className="w-full bg-white shadow-lg dark:bg-neutral-900 dark:shadow-neutral-950 break-inside-avoid desktop:max-w-sm laptop:max-w-lg h-fit"
          >
            <Card
              image={
                bookmark.cover || bookmark.favicon || "/placeholder-image.jpg"
              }
              title={bookmark.title}
              desc={bookmark.excerpt || bookmark.description}
              link={bookmark.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
