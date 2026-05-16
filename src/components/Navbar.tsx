// components/Navbar.tsx
"use client";

import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#093C5D]/90 backdrop-blur-md shadow-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          Rishi<span className="text-[#5DF8D8]">.</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
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
      </nav>
    </header>
  );
}