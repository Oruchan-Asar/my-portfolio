import Image from "next/image";
import Link from "next/link";

export default function Card({ image, title, desc, link }) {
  return (
    <Link
      href={link}
      className="bg-white shadow-lg desktop:max-w-sm laptop:max-w-lg h-fit"
    >
      <Image src={image} alt="keycloak" />
      <div className="px-4 py-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm font-light">{desc}</p>
      </div>
    </Link>
  );
}
