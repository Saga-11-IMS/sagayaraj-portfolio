"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Servers Managed" },
  { value: "10+", label: "Tools & Platforms" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-light via-base to-warm-bg">
      {/* morphing blobs */}
      <div className="absolute -top-10 -left-24 w-[500px] h-[500px] bg-indigo/8 blur-3xl animate-morph" />
      <div className="absolute -bottom-10 -right-24 w-96 h-96 bg-amber/10 blur-3xl animate-morph-slow" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo/5 blur-2xl animate-float-slow" />
      {/* spinning concentric rings */}
      <div className="absolute top-[6%] right-[5%] w-32 h-32 rounded-full border border-indigo/12 animate-spin-slow hidden lg:block" />
      <div className="absolute top-[6%] right-[5%] w-52 h-52 rounded-full border border-indigo/6 hidden lg:block" style={{animation:"spin-slow 32s linear infinite reverse", marginTop:"-2.5rem", marginRight:"-2.5rem"}} />
      <div className="absolute bottom-[10%] left-[3%] w-24 h-24 rounded-full border border-amber/15 animate-spin-slow hidden lg:block" style={{animationDuration:"22s"}} />
      {/* orbiting dots */}
      <div className="absolute top-[6%] right-[5%] hidden lg:block" style={{width:"52px", height:"52px"}}>
        <div className="w-2.5 h-2.5 rounded-full bg-indigo/25 animate-orbit" />
      </div>
      <div className="absolute bottom-[10%] left-[3%] hidden lg:block" style={{width:"24px", height:"24px"}}>
        <div className="w-2 h-2 rounded-full bg-amber/35 animate-orbit-reverse" />
      </div>
      {/* pulsing glows */}
      <div className="absolute top-[38%] left-[28%] w-48 h-48 rounded-full bg-indigo/6 blur-xl animate-pulse-glow" />
      <div className="absolute bottom-[28%] right-[32%] w-36 h-36 rounded-full bg-amber/8 blur-xl animate-pulse-glow" style={{animationDelay:"2.5s"}} />
      {/* floating particles */}
      <div className="absolute top-[18%] left-[22%] w-2 h-2 rounded-full bg-indigo/30 animate-particle-bob" style={{animationDelay:"0s"}} />
      <div className="absolute top-[65%] left-[12%] w-1.5 h-1.5 rounded-full bg-amber/40 animate-particle-bob" style={{animationDelay:"1.5s"}} />
      <div className="absolute top-[75%] right-[22%] w-2 h-2 rounded-full bg-indigo/25 animate-particle-bob" style={{animationDelay:"3s"}} />
      <div className="absolute top-[48%] left-[50%] w-1.5 h-1.5 rounded-full bg-amber/30 animate-particle-bob" style={{animationDelay:"0.8s"}} />

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
                  className="absolute -bottom-1 sm:-bottom-2 left-0 h-2 sm:h-3 bg-amber/30 -z-10 rounded-sm" />
              </span>{" "}
              <span className="text-indigo">J.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 sm:mt-6 body-text text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
              I build, manage, and automate Linux infrastructure. Currently exploring the DevOps
              ecosystem — Docker, Jenkins CI/CD, monitoring, and cloud-native tooling.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#contact"
                className="px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white bg-indigo rounded-lg hover:bg-indigo-dark transition-colors shadow-lg shadow-indigo/25 hover:-translate-y-0.5 transform duration-200">
                Get In Touch
              </a>
              <a href="/Saga-Devops-Resume.pdf" download
                className="px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-indigo bg-white border-2 border-indigo/20 rounded-lg hover:border-indigo/40 hover:bg-indigo-light transition-all hover:-translate-y-0.5 transform duration-200 shadow-sm">
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
                    <span className="text-3xl font-extrabold text-indigo">{s.value}</span>
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
