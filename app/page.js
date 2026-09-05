"use client";

import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import Particles from "@/components/Particles";

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

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"];

const headlineWords = ["Hi,", "I'm", "Oruchan."];

const wordContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(188,108,58,0.16), transparent 70%)`;

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative flex justify-center w-full px-6 my-12 overflow-hidden md:my-20"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          maskImage:
            "radial-gradient(circle at 30% 20%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 30% 20%, black, transparent 75%)",
        }}
      >
        <Particles count={32} />
      </div>
      <motion.div className="absolute inset-0 -z-10" style={{ background: spotlight }} />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col w-full gap-10 my-8 max-w-3xl"
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ rotate: [0, 20, -15, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <StarFilledIcon className="w-3.5 h-3.5 text-clay-500" />
            </motion.span>
            <p className="text-sm font-medium tracking-wide uppercase text-clay-600 dark:text-clay-400">
              Frontend Developer · Germany
            </p>
          </div>
          <motion.h1
            variants={wordContainer}
            initial="hidden"
            animate="show"
            className="font-serif text-[max(40px,min(8vw,64px))] italic leading-tight text-stone-800 dark:text-stone-100"
          >
            {headlineWords.map((word, index) => (
              <motion.span key={index} variants={wordItem} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h1>
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
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/projects"
              className="block px-5 py-2.5 text-sm font-medium text-white transition-shadow duration-300 rounded-md bg-clay-600 hover:bg-clay-700 hover:shadow-[0_0_24px_-4px_rgba(188,108,58,0.6)]"
            >
              View Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/blogs"
              className="block px-5 py-2.5 text-sm font-medium transition-colors border rounded-md text-stone-700 border-stone-300 hover:border-stone-400 dark:text-stone-200 dark:border-stone-700 dark:hover:border-stone-500"
            >
              Read the Blog
            </Link>
          </motion.div>
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
