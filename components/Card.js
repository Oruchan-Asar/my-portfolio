import Image from "next/image";
import Link from "next/link";

export default function Card({ image, title, desc, link }) {
  return (
    <Link
      href={link}
      target="_blank"
      className="w-full bg-white shadow-lg desktop:max-w-sm laptop:max-w-lg h-fit"
    >
      <div className="relative w-full aspect-video border-b border-gray-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm font-light">{desc}</p>
      </div>
    </Link>
  );
}
