"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Layers3,
  Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Modern SaaS Dashboard",
    category: "Full Stack Application",
    description:
      "A scalable analytics dashboard with authentication, charts, team collaboration, and real-time updates.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
  },
  {
    title: "AI Content Platform",
    category: "AI Product",
    description:
      "An AI-powered platform for generating, editing, and managing long-form content with modern UX patterns.",
    tech: ["React", "Node.js", "OpenAI", "MongoDB"],
  },
  {
    title: "Creative Portfolio",
    category: "Frontend Experience",
    description:
      "A visually immersive portfolio focused on smooth animations, storytelling, and interaction design.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
  },
  {
    title: "Developer Collaboration Tool",
    category: "Productivity Platform",
    description:
      "A collaborative workspace for developers featuring project tracking, live updates, and integrated tooling.",
    tech: ["TypeScript", "Express", "Socket.io", "Docker"],
  },
  {
    title: "E-Commerce Experience",
    category: "Commerce Platform",
    description:
      "A premium online shopping experience optimized for conversion, accessibility, and mobile responsiveness.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "TailwindCSS"],
  },
  {
    title: "Realtime Chat Application",
    category: "Communication App",
    description:
      "A realtime messaging platform with presence indicators, media sharing, and smooth interaction flows.",
    tech: ["React", "Node.js", "Socket.io", "Redis"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="overflow-hidden bg-white text-[#093C5D]">
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden px-6 py-24">
        {/* Background Glow */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#5DF8D8]/30 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-[#3B7597]/30 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#3B7597]"
          >
            Featured Work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-black leading-tight md:text-7xl"
          >
            Projects built with
            <span className="bg-gradient-to-r from-[#3B7597] via-[#6FD1D7] to-[#5DF8D8] bg-clip-text text-transparent">
              {" "}
              precision
            </span>
            <br />
            and creativity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#093C5D]/70"
          >
            A collection of products, platforms, and experiences focused on
            performance, scalability, and exceptional user experience.
          </motion.p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-[32px] border border-[#093C5D]/10 bg-white shadow-xl shadow-[#093C5D]/5"
              >
                {/* Top Gradient */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#093C5D] via-[#3B7597] to-[#6FD1D7]">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-xl"
                  />

                  <div className="absolute right-5 top-5 flex gap-3">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:scale-110">
                      <FaGithub className="h-4 w-4" />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:scale-110">
                      <Globe className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7597]">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold leading-tight">
                    {project.title}
                  </h2>

                  <p className="mt-5 leading-7 text-[#093C5D]/70">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#6FD1D7]/15 px-4 py-2 text-sm font-medium text-[#093C5D]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="group mt-8 flex items-center gap-2 font-semibold text-[#093C5D] transition hover:text-[#3B7597]">
                    View Project
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-[#093C5D] px-6 py-28 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 text-center md:grid-cols-4">
          {[
            {
              number: "20+",
              label: "Projects Built",
              icon: <Layers3 className="h-7 w-7" />,
            },
            {
              number: "5+",
              label: "Technologies Mastered",
              icon: <Sparkles className="h-7 w-7" />,
            },
            {
              number: "99%",
              label: "Performance Focused",
              icon: <Globe className="h-7 w-7" />,
            },
            {
              number: "∞",
              label: "Creative Ideas",
              icon: <ArrowUpRight className="h-7 w-7" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-10 backdrop-blur-md"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#5DF8D8]">
                {item.icon}
              </div>

              <h3 className="text-5xl font-black">{item.number}</h3>

              <p className="mt-4 text-white/70">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl rounded-[40px] bg-gradient-to-r from-[#093C5D] via-[#3B7597] to-[#6FD1D7] p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-4xl font-black md:text-6xl">
            Want to build something together?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            I enjoy collaborating on ambitious products that combine strong
            engineering with thoughtful design.
          </p>

          <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-semibold text-[#093C5D] transition hover:scale-105">
            Let’s Talk
          </button>
        </motion.div>
      </section>
    </div>
  );
}