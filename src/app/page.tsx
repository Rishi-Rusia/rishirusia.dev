"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers3, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-white text-[#093C5D]">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        {/* Background blobs */}
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
            x: [0, -30, 20, 0],
            y: [0, 20, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-140px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#3B7597]/30 blur-3xl"
        />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-4 rounded-full border border-[#6FD1D7]/40 bg-[#6FD1D7]/10 px-4 py-2 text-sm font-medium text-[#3B7597]"
          >
            Full Stack Developer • UI Enthusiast
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl"
          >
            Building clean,
            <span className="bg-gradient-to-r from-[#3B7597] via-[#6FD1D7] to-[#5DF8D8] bg-clip-text text-transparent">
              {" "}
              modern
            </span>
            <br />
            digital experiences.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-8 text-[#093C5D]/70 md:text-xl"
          >
            I create fast, scalable, and visually polished applications with a
            strong focus on design systems, animations, and user experience.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button className="group flex items-center justify-center gap-2 rounded-2xl bg-[#093C5D] px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-[#3B7597]">
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>

            <button className="rounded-2xl border border-[#093C5D]/20 px-7 py-4 font-semibold text-[#093C5D] transition hover:border-[#6FD1D7] hover:bg-[#6FD1D7]/10">
              Contact Me
            </button>
          </motion.div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold md:text-5xl">
              What I Focus On
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[#093C5D]/70">
              Combining engineering with aesthetics to build products people
              genuinely enjoy using.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Code2 className="h-8 w-8" />,
                title: "Frontend Engineering",
                desc: "Responsive, scalable interfaces with modern React ecosystems.",
              },
              {
                icon: <Layers3 className="h-8 w-8" />,
                title: "System Design",
                desc: "Architecting maintainable and performant full stack apps.",
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Motion & UX",
                desc: "Smooth interactions and polished micro-animations that feel premium.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-[#093C5D]/10 bg-white p-8 shadow-xl shadow-[#093C5D]/5"
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

      {/* SHOWCASE SECTION */}
      <section className="bg-[#093C5D] px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#5DF8D8]">
              Featured Work
            </p>

            <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Creating products that feel alive.
            </h2>
          </motion.div>

          <div className="space-y-10">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <div className="grid md:grid-cols-2">
                  <div className="flex flex-col justify-center p-10 md:p-14">
                    <p className="text-sm uppercase tracking-[0.25em] text-[#5DF8D8]">
                      Project 0{item}
                    </p>

                    <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                      Modern Web Experience
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-white/70">
                      Built with performance, accessibility, and delightful user
                      interactions in mind.
                    </p>
                  </div>

                  <div className="relative min-h-[320px] bg-gradient-to-br from-[#3B7597] via-[#6FD1D7] to-[#5DF8D8]">
                    <motion.div
                      animate={{ rotate: [0, 4, -4, 0] }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-[40px] border border-white/30 bg-white/20 backdrop-blur-xl"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            Let’s build something amazing.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Whether it’s a startup idea, portfolio, SaaS platform, or internal
            tool — I love turning concepts into polished products.
          </p>

          <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-semibold text-[#093C5D] transition hover:scale-105">
            Start a Project
          </button>
        </motion.div>
      </section>
    </div>
  );
}