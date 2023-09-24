"use client";

import UserIcon from "@/public/tabMenuIcons/UserIcon";
import ProjectIcon from "@/public/tabMenuIcons/ProjectIcon";
import BlogIcon from "@/public/tabMenuIcons/BlogIcon";
import BookmarkIcon from "@/public/tabMenuIcons/BookmarkIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ChangeSvgColor() {
  const pathname = usePathname();

  const tabs = [
    { icon: <UserIcon />, name: "About" },
    { icon: <ProjectIcon />, name: "Projects" },
    { icon: <BlogIcon />, name: "Blogs" },
    { icon: <BookmarkIcon />, name: "Bookmarks" },
  ];
  return (
    <div className="flex gap-4 border-b-2 w-fit">
      {tabs?.map((tab, index) => (
        <Link
          key={index}
          href={`${tab.name.toLowerCase()}`}
          className={`flex items-center gap-2 px-1 py-2 transition-all duration-300 border-b-2 cursor-pointer  ${
            pathname === `/${tab.name.toLowerCase()}`
              ? "stroke-blue-500 text-blue-500 border-blue-500"
              : "stroke-[#9BA2AE] text-[#9BA2AE] hover:stroke-blue-500 border-b-transparent hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
          }`}
        >
          {tab.icon}
          <p className="text-sm font-medium">{tab.name}</p>
        </Link>
      ))}
    </div>
  );
}
