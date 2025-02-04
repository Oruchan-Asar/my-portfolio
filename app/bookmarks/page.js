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
        <p className="text-slate-500">
          Currently unable to load bookmarks. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <p className="text-slate-500">
        Here are some tools that I currently use or have enjoyed using in the
        past:
      </p>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {bookmarks.map((bookmark) => (
          <div
            key={bookmark._id}
            className="break-inside-avoid w-full bg-white shadow-lg desktop:max-w-sm laptop:max-w-lg h-fit hover:scale-105 transition-all duration-300 ease-out"
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
