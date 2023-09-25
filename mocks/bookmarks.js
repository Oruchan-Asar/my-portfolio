import radix_ui from "@/public/bookmarks/radix-ui.jpeg";
import heroicons from "@/public/bookmarks/heroicons.jpg";
import tailwindcss from "@/public/bookmarks/tailwindcss.webp";
import learngitbranching from "@/public/bookmarks/learngitbranching.gif";
import refactoring from "@/public/bookmarks/refactoring.png";
import patterns from "@/public/bookmarks/patterns.avif";
import hacksplaining from "@/public/bookmarks/hacksplaining.png";
import tremor from "@/public/bookmarks/tremor.png";
import million from "@/public/bookmarks/million.png";

const bookmarks = [
  {
    image: radix_ui,
    title: "Radix-UI",
    desc: "An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go—no configuration required.",
    link: "https://www.radix-ui.com/",
  },
  {
    image: heroicons,
    title: "Heroicons",
    desc: "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",
    link: "https://heroicons.com/",
  },
  {
    image: tailwindcss,
    title: "Tailwindcss",
    desc: "Rapidly build modern websites without ever leaving your HTML.",
    link: "https://tailwindcss.com/",
  },
  {
    image: learngitbranching,
    title: "Learn Git Branching",
    desc: "Interested in learning Git? Well you've come to the right place! 'Learn Git Branching' is the most visual and interactive way to learn Git on the web",
    link: "https://learngitbranching.js.org/",
  },
  {
    image: refactoring,
    title: "Refactoring.Guru",
    desc: "Refactoring is a systematic process of improving code without creating new functionality. Refactoring transforms a mess into clean code and simple design.",
    link: "https://refactoring.guru/",
  },
  {
    image: patterns,
    title: "Patterns.dev",
    desc: "Patterns.dev is a free book on design patterns and component patterns for building powerful web apps with vanilla JavaScript and React. Download Book.",
    link: "https://www.patterns.dev/",
  },
  {
    image: hacksplaining,
    title: "Hacksplaining",
    desc: "Security Training for Developers.",
    link: "https://www.hacksplaining.com/",
  },
  {
    image: tremor,
    title: "Tremor.so",
    desc: "The React library to build dashboards fast · Modular components to build dashboards in a breeze.",
    link: "https://www.tremor.so/",
  },
  {
    image: million,
    title: "Million.js",
    desc: "The Virtual DOM Replacement for React. Gain big performance wins for UI and data heavy React apps.",
    link: "https://million.dev/",
  },
];

export default bookmarks;
