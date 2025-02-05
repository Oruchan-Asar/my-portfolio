import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  image,
  title,
  desc,
  link,
  published,
  categories,
  className,
  imageClassName,
}) {
  // Format the date if published exists
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        "w-full bg-white desktop:max-w-sm laptop:max-w-lg h-fit",
        className
      )}
    >
      <div className="relative w-full border-b border-gray-200 aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className={cn("object-cover", imageClassName)}
        />
      </div>
      <div className="flex flex-col justify-between gap-2 p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm font-light">{desc}</p>
        </div>
        <div className="flex items-center gap-2">
          {published && (
            <p className="text-xs font-light">{formatDate(published)}</p>
          )}
          {categories && (
            <div className="flex flex-wrap gap-1">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-light bg-gray-100 rounded"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
