"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const socialMedias = [
  {
    link: "https://github.com/Oruchan-Asar",
    name: "Github",
    icon: <GitHubLogoIcon />,
  },
  {
    link: "https://linkedin.com/in/oruchan-asar/",
    name: "LinkedIn",
    icon: <LinkedInLogoIcon />,
  },
  {
    link: "https://instagram.com/oruc.asar/",
    name: "Instagram",
    icon: <InstagramLogoIcon />,
  },
  {
    link: "https://twitter.com/orucasar",
    name: "Twitter",
    icon: <TwitterLogoIcon />,
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
];

export default function Home() {
  return (
    <main className="flex justify-center w-full px-6 my-12 md:my-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col w-full gap-10 my-8 max-w-3xl"
      >
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium tracking-wide uppercase text-clay-600 dark:text-clay-400">
            Frontend Developer · Turkey
          </p>
          <h1 className="font-serif text-[max(40px,min(8vw,64px))] italic leading-tight text-stone-800 dark:text-stone-100">
            Hi, I&apos;m Oruchan.
          </h1>
          <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-stone-600 dark:text-stone-400">
            <p>
              I build fast, thoughtful web experiences with Next.js and React,
              currently as a frontend developer at Doğuş Teknoloji.
            </p>
            <p>
              Outside of client work, I like poking at machine learning side
              projects and turning them into small, visual, interactive
              tools.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-medium border rounded-full text-stone-600 border-stone-200 dark:text-stone-300 dark:border-stone-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="px-5 py-2.5 text-sm font-medium text-white transition-colors rounded-md bg-clay-600 hover:bg-clay-700"
          >
            View Projects
          </Link>
          <Link
            href="/blogs"
            className="px-5 py-2.5 text-sm font-medium transition-colors border rounded-md text-stone-700 border-stone-300 hover:border-stone-400 dark:text-stone-200 dark:border-stone-700 dark:hover:border-stone-500"
          >
            Read the Blog
          </Link>
        </div>

        <div className="flex gap-2 p-1 bg-white rounded-md shadow-sm dark:bg-stone-900 dark:shadow-none border border-stone-200 dark:border-stone-800 w-fit">
          {socialMedias.map((socialMedia, index) => (
            <Link
              href={socialMedia.link}
              target="_blank"
              key={index}
              aria-label={socialMedia.name}
              className="p-2 text-stone-600 transition-all duration-300 ease-out rounded-md hover:bg-clay-50 hover:text-clay-700 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-clay-400"
            >
              {socialMedia.icon}
            </Link>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
