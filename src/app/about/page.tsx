"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "TailwindCSS",
  "PostgreSQL",
  "MongoDB",
  "Framer Motion",
  "Express",
  "Docker",
  "AWS",
  "Git",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white text-[#093C5D]">
      {/* HERO */}
      <section className="relative flex min-h-[80vh] items-center px-6 py-24">
        {/* Background Glow */}
        <div className="absolute left-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#5DF8D8]/30 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-[#3B7597]/30 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#3B7597]">
              About Me
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              I build products that blend
              <span className="bg-gradient-to-r from-[#3B7597] via-[#6FD1D7] to-[#5DF8D8] bg-clip-text text-transparent">
                {" "}
                engineering
              </span>
              <br />
              and design.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#093C5D]/70">
              I'm a full stack developer passionate about creating immersive,
              performant, and scalable digital experiences. I enjoy solving
              complex engineering problems while crafting interfaces that feel
              intuitive and polished.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-[#093C5D] px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-[#3B7597]">
                View Projects
              </button>

              <button className="rounded-2xl border border-[#093C5D]/20 px-7 py-4 font-semibold text-[#093C5D] transition hover:border-[#6FD1D7] hover:bg-[#6FD1D7]/10">
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center"
          >
            <div className="absolute h-full w-full rounded-[40px] bg-gradient-to-br from-[#093C5D] via-[#3B7597] to-[#6FD1D7] opacity-90 shadow-2xl" />

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-[320px] w-[260px] items-center justify-center rounded-[32px] border border-white/20 bg-white/10 backdrop-blur-xl"
            >
              <div className="text-center text-white">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-4xl font-black backdrop-blur-md">
                  R
                </div>

                <h2 className="text-3xl font-bold">Rishi</h2>

                <p className="mt-2 text-white/70">
                  Full Stack Developer
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE / VALUES */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl font-black md:text-6xl">
              What Drives Me
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#093C5D]/70">
              I care deeply about performance, clean architecture, and creating
              interfaces that users genuinely enjoy interacting with.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Performance First",
                desc: "Fast-loading applications with optimized rendering and scalable infrastructure.",
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Polished UX",
                desc: "Thoughtful interactions and subtle motion that elevate the experience.",
              },
              {
                icon: <Layers3 className="h-8 w-8" />,
                title: "Clean Systems",
                desc: "Maintainable codebases and scalable architecture built for long-term growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="rounded-[32px] border border-[#093C5D]/10 bg-white p-8 shadow-xl shadow-[#093C5D]/5"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6FD1D7]/20 text-[#093C5D]">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-[#093C5D]/70">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-[#093C5D] px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#5DF8D8]">
              Skills & Tools
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Technologies I Use
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
              >
                <p className="text-lg font-semibold">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl font-black md:text-6xl">
              My Journey
            </h2>
          </motion.div>

          <div className="space-y-10">
            {[
              {
                icon: <Code2 className="h-6 w-6" />,
                title: "Frontend Development",
                desc: "Started by building responsive interfaces and interactive user experiences.",
              },
              {
                icon: <Database className="h-6 w-6" />,
                title: "Backend & Databases",
                desc: "Expanded into APIs, authentication systems, databases, and scalable infrastructure.",
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Full Stack Products",
                desc: "Now focused on building complete products with performance, UX, and scalability in mind.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex gap-6 rounded-[28px] border border-[#093C5D]/10 bg-white p-8 shadow-lg shadow-[#093C5D]/5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#6FD1D7]/20 text-[#093C5D]">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-[#093C5D]/70">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}