"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Wezero</span>
            <img
              className="h-8 w-auto"
              src=""
              alt="Wezero Logo"
            />
          </Link>
        </div>
        <div className="flex gap-x-12">
          <a
            href="#work"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  )
}

