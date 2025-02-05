"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import userIcon from "@/public/tabMenuIcons/userIcon.svg";
import projectIcon from "@/public/tabMenuIcons/projectIcon.svg";
import blogIcon from "@/public/tabMenuIcons/blogIcon.svg";
import bookmarkIcon from "@/public/tabMenuIcons/bookmarkIcon.svg";

export default function NavMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
      className="relative flex justify-end h-fit"
    >
      {/* Desktop menu */}
      <ul className="z-50 items-center hidden gap-2 p-1 bg-white rounded-md shadow-md md:flex h-fit dark:bg-neutral-800">
        {tabs?.map((tab, index) => (
          <li key={index}>
            <Link
              href={tab.link}
              className={`flex gap-2 p-2 ${
                pathname === tab.link ||
                (pathname.startsWith("/bookmarks") && tab.link === "/bookmarks")
                  ? "bg-sky-200 dark:bg-sky-900"
                  : "hover:bg-blue-100 dark:hover:bg-sky-800 ease-out transition-all duration-300"
              } outline-hidden cursor-pointer font-medium leading-none rounded`}
            >
              <Image
                src={tab.icon}
                alt={`${tab.name} icon`}
                className="dark:invert"
              />
              <p className="text-sm font-medium dark:text-white">{tab.name}</p>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 rounded-md md:hidden"
      >
        <div className="space-y-1">
          <span
            className={`block w-5 h-px bg-neutral-800 dark:bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-px bg-neutral-800 dark:bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-px bg-neutral-800 dark:bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <ul className="absolute right-0 z-50 w-48 py-2 bg-white rounded-md shadow-lg md:hidden top-12 dark:bg-neutral-800">
          {tabs?.map((tab, index) => (
            <li key={index}>
              <Link
                href={tab.link}
                onClick={() => setIsOpen(false)}
                className={`flex gap-2 p-3 ${
                  pathname === tab.link ||
                  (pathname.startsWith("/bookmarks") &&
                    tab.link === "/bookmarks")
                    ? "bg-sky-200 dark:bg-sky-900"
                    : "hover:bg-blue-100 dark:hover:bg-sky-800 ease-out transition-all duration-300"
                } outline-hidden cursor-pointer font-medium leading-none`}
              >
                <Image
                  src={tab.icon}
                  alt={`${tab.name} icon`}
                  className="dark:invert"
                />
                <p className="text-sm font-medium dark:text-white">
                  {tab.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
}
