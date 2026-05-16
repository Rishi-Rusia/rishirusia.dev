"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="overflow-hidden bg-white text-[#093C5D]">
      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden px-6 py-24">
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

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#3B7597]"
          >
            Contact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-black leading-tight md:text-7xl"
          >
            Let’s create something
            <span className="bg-gradient-to-r from-[#3B7597] via-[#6FD1D7] to-[#5DF8D8] bg-clip-text text-transparent">
              {" "}
              incredible
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#093C5D]/70"
          >
            Whether you have a project idea, collaboration opportunity, or just
            want to connect — I’d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#3B7597]">
              Get In Touch
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              I’m always open to discussing new ideas and opportunities.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#093C5D]/70">
              Feel free to reach out if you want to collaborate, hire me, or
              simply have a conversation about technology, startups, or design.
            </p>

            {/* Contact Cards */}
            <div className="mt-12 space-y-5">
              {[
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "Email",
                  value: "rishi@example.com",
                },
                {
                  icon: <Phone className="h-6 w-6" />,
                  title: "Phone",
                  value: "+91 98765 43210",
                },
                {
                  icon: <MapPin className="h-6 w-6" />,
                  title: "Location",
                  value: "India",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-5 rounded-[28px] border border-[#093C5D]/10 bg-white p-6 shadow-lg shadow-[#093C5D]/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6FD1D7]/20 text-[#093C5D]">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-[#093C5D]/60">
                      {item.title}
                    </p>

                    <h3 className="mt-1 text-lg font-bold">
                      {item.value}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SOCIALS */}
            <div className="mt-10 flex items-center gap-5">
              <button className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#093C5D]/10 bg-white shadow-lg shadow-[#093C5D]/5 transition hover:-translate-y-1 hover:bg-[#093C5D] hover:text-white">
                <FaGithub className="h-5 w-5" />
              </button>

              <button className="flex h-14 w-20 items-center justify-center rounded-2xl border border-[#093C5D]/10 bg-white shadow-lg shadow-[#093C5D]/5 transition hover:-translate-y-1 hover:bg-[#093C5D] hover:text-white">
              Linkedin
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-[#093C5D]/10 bg-white p-8 shadow-2xl shadow-[#093C5D]/10 md:p-10"
          >
            <h3 className="text-3xl font-black">
              Send a Message
            </h3>

            <p className="mt-3 text-[#093C5D]/70">
              I’ll get back to you as soon as possible.
            </p>

            <form className="mt-10 space-y-6">
              {/* NAME */}
              <div>
                <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[#093C5D]/70">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-[#093C5D]/10 bg-[#F8FCFD] px-5 py-4 outline-none transition focus:border-[#6FD1D7] focus:ring-4 focus:ring-[#6FD1D7]/20"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[#093C5D]/70">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-[#093C5D]/10 bg-[#F8FCFD] px-5 py-4 outline-none transition focus:border-[#6FD1D7] focus:ring-4 focus:ring-[#6FD1D7]/20"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[#093C5D]/70">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-[#093C5D]/10 bg-[#F8FCFD] px-5 py-4 outline-none transition focus:border-[#6FD1D7] focus:ring-4 focus:ring-[#6FD1D7]/20"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#093C5D] px-7 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#3B7597]"
              >
                Send Message

                <Send className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}