import Card from "@/components/Card";

async function getBookmarks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookmarks`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch bookmarks");
  }

  return res.json();
}

export default async function Bookmarks() {
  const bookmarks = await getBookmarks();

  return (
    <div className="flex flex-col gap-8">
      <p className="text-slate-500">
        Here are some tools that I currently use or have enjoyed using in the
        past:
      </p>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-4">
        {bookmarks.map((bookmark) => (
          <div
            key={bookmark._id}
            className="break-inside-avoid w-full bg-white shadow-lg desktop:max-w-sm laptop:max-w-lg h-fit"
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
