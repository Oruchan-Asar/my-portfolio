import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  image,
  title,
  desc,
  link,
  className,
  imageClassName,
}) {
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
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm font-light">{desc}</p>
      </div>
    </Link>
  );
}
