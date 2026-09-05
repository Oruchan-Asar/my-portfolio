"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <Link href={link} target="_blank" className={cn("block w-full h-full group", className)}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative flex flex-col h-full overflow-hidden bg-white border rounded-lg shadow-sm transition-shadow duration-300 border-stone-200 hover:shadow-lg hover:shadow-stone-900/5 dark:bg-stone-900 dark:border-stone-800 dark:hover:shadow-black/20"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 z-10 -translate-x-full -skew-x-12 pointer-events-none bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out dark:via-white/10"
        />
        <div className="relative w-full overflow-hidden aspect-video bg-stone-100 dark:bg-stone-800">
          <Image
            src={imageSrc}
            alt={title}
            fill
            unoptimized={isMediumImage} // Disable optimization for Medium images to avoid 403 errors
            className={cn("object-cover", imageClassName)}
          />
        </div>
        <div className="flex flex-col justify-between flex-1 gap-3 p-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-lg text-stone-800 dark:text-stone-100">
              {title}
            </h3>
            <p className="text-sm font-light text-stone-600 dark:text-stone-400">{desc}</p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {published && (
              <p className="text-xs font-light text-stone-500 dark:text-stone-400">
                {formatDate(published)}
              </p>
            )}
            {categories && (
              <div className="flex flex-wrap gap-1">
                {categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-light rounded bg-stone-100 text-stone-600 dark:bg-stone-700 dark:text-stone-300"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
