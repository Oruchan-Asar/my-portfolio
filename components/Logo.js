"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/public/logo.svg";

export default function Logo() {
  return (
    <motion.div
      className="w-9 h-9 will-change-transform"
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      whileHover={{
        rotate: 360,
        transition: { duration: 2, repeat: Infinity, ease: "linear" },
      }}
    >
      <Image
        src={logo}
        alt="Oruchan Asar logo"
        width={40}
        height={40}
        priority
        className="w-9 h-9"
      />
    </motion.div>
  );
}
