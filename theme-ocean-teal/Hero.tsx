"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "50+", label: "Servers Managed" },
  { value: "10+", label: "Tools & Platforms" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-light via-base to-warm-bg">
      <div className="absolute top-20 -left-32 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-10 w-full py-20 sm:py-32">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-white border border-border rounded-full mb-5 sm:mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="dark-text text-xs sm:text-sm font-semibold">Open to Opportunities</span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="dark-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                Sagayaraj
                <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-1 sm:-bottom-2 left-0 h-2 sm:h-3 bg-coral/30 -z-10 rounded-sm" />
              </span>{" "}
              <span className="text-teal">J.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 sm:mt-6 body-text text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
              I build, manage, and automate Linux infrastructure. Currently exploring the DevOps
              ecosystem — Docker, CI/CD, monitoring, and cloud-native tooling.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#contact"
                className="px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white bg-teal rounded-lg hover:bg-teal-dark transition-colors shadow-lg shadow-teal/25 hover:-translate-y-0.5 transform duration-200">
                Get In Touch
              </a>
              <a href="/sagayaraj_Resume.pdf" download
                className="px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-teal bg-white border-2 border-teal/20 rounded-lg hover:border-teal/40 hover:bg-teal-light transition-all hover:-translate-y-0.5 transform duration-200 shadow-sm">
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 hidden lg:block">
            <div className="space-y-4">
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-extrabold text-teal">{s.value}</span>
                    <span className="dark-text text-sm font-medium">{s.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
