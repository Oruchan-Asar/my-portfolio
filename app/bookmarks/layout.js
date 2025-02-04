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
              className={`flex items-center gap-2 px-1 py-2 transition-all duration-300 border-b-2 cursor-pointer  ${
                pathname === tab.link
                  ? "stroke-blue-500 text-blue-500 border-blue-500"
                  : "stroke-[#9BA2AE] text-[#9BA2AE] hover:stroke-blue-500 border-b-transparent hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
              }`}
            >
              {tab.icon}
              <p className="text-sm font-medium">{tab.name}</p>
            </Link>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
