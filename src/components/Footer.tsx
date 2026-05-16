// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#093C5D] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        {/* Left */}
        <div>
          <h2 className="text-xl font-semibold">
            Rishi<span className="text-[#5DF8D8]">.</span>
          </h2>
          <p className="mt-1 text-sm text-white/70">
            Building clean and modern web experiences.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-5 text-sm">
          <Link
            href="/"
            className="text-white/70 transition hover:text-[#6FD1D7]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-white/70 transition hover:text-[#6FD1D7]"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-white/70 transition hover:text-[#6FD1D7]"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-white/70 transition hover:text-[#6FD1D7]"
          >
            Contact
          </Link>
        </div>

        {/* Right */}
        <div className="text-sm text-white/50">
          © {new Date().getFullYear()} Rishi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}