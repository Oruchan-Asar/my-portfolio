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

  // Check if image is from Medium CDN - Medium blocks Next.js Image Optimization
  const isMediumImage =
    image &&
    (image.includes("cdn-images-1.medium.com") ||
      image.includes("miro.medium.com") ||
      image.includes("medium.com"));

  // Fallback image if none provided
  const imageSrc = image || "/placeholder-image.jpg";

  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        "w-full bg-white dark:bg-neutral-950 desktop:max-w-sm laptop:max-w-lg h-fit",
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        unoptimized={isMediumImage} // Disable optimization for Medium images to avoid 403 errors
        className={cn(
          "object-cover !static border-b border-gray-200 dark:border-neutral-700",
          imageClassName
        )}
      />
      <div className="flex flex-col gap-2 justify-between p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold dark:text-neutral-200">
            {title}
          </h3>
          <p className="text-sm font-light dark:text-neutral-400">{desc}</p>
        </div>
        <div className="flex gap-2 items-center">
          {published && (
            <p className="text-xs font-light dark:text-neutral-400">
              {formatDate(published)}
            </p>
          )}
          {categories && (
            <div className="flex flex-wrap gap-1">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-light bg-gray-100 rounded dark:bg-neutral-700 dark:text-neutral-300"
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
