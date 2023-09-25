import Card from "@/components/Card";
import bookmarks from "@/mocks/bookmarks";

export default function Bookmarks() {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-slate-500">
        Here are some tools that I currently use or have enjoyed using in the
        past:
      </p>
      <div className="flex flex-wrap justify-between gap-6">
        {bookmarks.map((bookmark, index) => (
          <Card
            key={index}
            image={bookmark.image}
            title={bookmark.title}
            desc={bookmark.desc}
            link={bookmark.link}
          />
        ))}
      </div>
    </div>
  );
}
