"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GitHubLogoIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function ProjectCard({
  displayName,
  description,
  language,
  homepage,
  url,
  stars,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex flex-col justify-between h-full gap-4 p-6 bg-white border border-stone-200 rounded-lg shadow-sm dark:bg-stone-900 dark:border-stone-800"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-xl text-stone-800 dark:text-stone-100">
            {displayName}
          </h3>
          {stars > 0 && (
            <span className="shrink-0 text-xs font-medium text-clay-700 dark:text-clay-300">
              ★ {stars}
            </span>
          )}
        </div>
        <p className="text-sm font-light leading-relaxed text-stone-600 dark:text-stone-400">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between gap-2">
        {language ? (
          <span className="px-2 py-1 text-xs font-medium rounded bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-300">
            {language}
          </span>
        ) : (
          <span />
        )}
        <div className="flex items-center gap-4">
          {homepage && (
            <Link
              href={homepage}
              target="_blank"
              className="flex items-center gap-1 text-sm font-medium text-clay-600 hover:text-clay-700 dark:text-clay-400 dark:hover:text-clay-300"
            >
              Live demo
              <ArrowTopRightIcon />
            </Link>
          )}
          <Link
            href={url}
            target="_blank"
            aria-label="View source on GitHub"
            className="text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-100"
          >
            <GitHubLogoIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
