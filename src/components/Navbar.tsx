// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#093C5D]/90 backdrop-blur-md shadow-lg">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-white"
          >
            Rishi<span className="text-[#5DF8D8]">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-all duration-200 hover:text-[#5DF8D8]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center text-white md:hidden"
          >
            <Menu className="h-7 w-7" />
          </button>
        </nav>
      </header>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 220,
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[280px] flex-col border-l border-white/10 bg-[#093C5D] p-6 shadow-2xl"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold tracking-tight text-white"
                >
                  Rishi<span className="text-[#5DF8D8]">.</span>
                </Link>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>

              {/* Links */}
              <div className="mt-16 flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-semibold text-white/80 transition hover:text-[#5DF8D8]"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-[-80px] left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#5DF8D8]/20 blur-3xl" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}