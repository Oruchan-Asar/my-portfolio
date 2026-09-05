"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import PodcastIcon from "@/public/tabMenuIcons/PodcastIcon";
import ToolsIcon from "@/public/tabMenuIcons/ToolsIcon";

export default function BookmarksLayout({ children }) {
  const pathname = usePathname();

  const tabs = [
    { icon: <ToolsIcon />, name: "Tools", link: "/bookmarks" },
    { icon: <PodcastIcon />, name: "Podcasts", link: "/bookmarks/podcasts" },
  ];
  return (
    <div className="flex justify-center w-full px-6">
      <div className="w-full min-h-screen max-w-7xl">
        <div className="flex gap-4 my-6 mt-16 w-fit">
          {tabs?.map((tab, index) => (
            <Link
              key={index}
              href={tab.link}
              className={`flex items-center gap-2 px-1 py-2 transition-all duration-300 border-b-2 cursor-pointer ${
                pathname === tab.link
                  ? "stroke-clay-700 text-clay-700 border-clay-700 dark:text-clay-600 dark:stroke-clay-600 dark:border-clay-600"
                  : "stroke-stone-500 text-stone-500 hover:stroke-clay-800 border-b-transparent hover:border-b-2 hover:border-clay-800 hover:text-clay-800 dark:hover:text-clay-700 dark:hover:stroke-clay-700 dark:hover:border-clay-700"
              }`}
            >
              <div className="dark:invert-[.25]">{tab.icon}</div>
              <p className="text-sm font-medium">{tab.name}</p>
            </Link>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
