import Card from "@/components/Card";
import bookmarks from "@/mocks/bookmarks";

export default function Bookmarks() {
  return (
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
  );
}
