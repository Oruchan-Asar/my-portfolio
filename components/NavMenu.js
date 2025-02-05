"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import userIcon from "@/public/tabMenuIcons/userIcon.svg";
import projectIcon from "@/public/tabMenuIcons/projectIcon.svg";
import blogIcon from "@/public/tabMenuIcons/blogIcon.svg";
import bookmarkIcon from "@/public/tabMenuIcons/bookmarkIcon.svg";

export default function NavMenu() {
  const pathname = usePathname();

  const tabs = [
    { icon: userIcon, name: "About", link: "/" },
    // { icon: projectIcon, name: "Projects" },
    { icon: blogIcon, name: "Blogs", link: "/blogs" },
    { icon: bookmarkIcon, name: "Bookmarks", link: "/bookmarks" },
  ];
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex h-fit"
    >
      <ul className="flex gap-2 items-center h-fit bg-white p-[3px] rounded-md shadow-md">
        {tabs?.map((tab, index) => (
          <li key={index}>
            <Link
              href={tab.link}
              className={`flex gap-2 p-2 ${
                pathname === tab.link ||
                (pathname.startsWith("/bookmarks") && tab.link === "/bookmarks")
                  ? "bg-blue-200"
                  : "hover:bg-blue-100 ease-out transition-all duration-300"
              } outline-hidden cursor-pointer font-medium leading-none rounded`}
            >
              <Image src={tab.icon} alt={`${tab.name} icon`} />
              <p className="text-sm font-medium">{tab.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
