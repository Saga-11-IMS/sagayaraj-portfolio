"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    title: "System Engineer",
    company: "Assistanz Networks, Coimbatore",
    period: "Jan 2024 – Present",
    current: true,
    points: [
      "Manage and support production Linux servers hosted in cloud environments",
      "Administer hosting environments: cPanel/WHM, Plesk, DirectAdmin, CWP Pro, Webuzo",
      "Troubleshoot WordPress issues — white screen errors, PHP fatal errors, HTTP 500",
      "Support PHP 5.6–8.x applications using FPM and LSAPI",
      "Handle MySQL/MariaDB issues: connectivity, permissions, performance tuning",
      "Monitor and troubleshoot cron jobs ensuring correct execution and logging",
      "Server migrations, hardening, and post-migration validation",
      "Investigate and resolve Exim/Mailman issues and mailbox quotas",
      "SSL/CA bundle updates and root cause analysis from system logs",
      "Client-facing incident communication and resolution",
    ],
  },
  {
    title: "System Administrator",
    company: "Star World Computers",
    period: "Aug 2021 – Jul 2023",
    current: false,
    points: [
      "Install, configure, and maintain hardware/software for desktops, laptops, printers",
      "Technical support for software/hardware issues and network troubleshooting",
      "Regular maintenance checks to identify and repair potential problems",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo/3 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/5 rounded-full blur-3xl hidden sm:block" />

      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-indigo font-semibold text-sm mb-2 tracking-wide uppercase">Career Path</p>
          <h2 className="dark-text text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-16 h-1 bg-amber rounded-full mb-8 sm:mb-12" />
        </motion.div>

        <div className="relative pl-5 sm:pl-8 border-l-2 border-border space-y-8 sm:space-y-10">
          {jobs.map((job, i) => (
            <motion.div key={job.title + job.company}
              initial={{ opacity: 0, x: -30 }}
              animate={v ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative">
              <div className={`absolute -left-[calc(1.25rem+5px)] sm:-left-[calc(2rem+5px)] top-2 w-3 h-3 rounded-full border-2 ${
                job.current ? "border-indigo bg-indigo" : "border-border-dark bg-white"
              }`} />
              {job.current && (
                <div className="absolute -left-[calc(1.25rem+5px)] sm:-left-[calc(2rem+5px)] top-2 w-3 h-3 rounded-full bg-indigo/40 animate-ping" />
              )}

              <motion.div
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className={`rounded-xl border p-4 sm:p-7 md:p-8 transition-all duration-300 ${
                  job.current
                    ? "border-indigo/20 bg-gradient-to-r from-indigo-light/60 to-white shadow-md shadow-indigo/5"
                    : "border-border bg-base hover:border-border-dark hover:shadow-sm"
                }`}>
                {job.current && (
                  <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={v ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="inline-block mb-3 px-3 py-1 text-[11px] font-bold text-white bg-indigo rounded-full uppercase tracking-wider">
                    Current Role
                  </motion.span>
                )}
                <h3 className="dark-text text-lg sm:text-xl lg:text-2xl font-bold">{job.title}</h3>
                <p className="text-indigo font-semibold text-sm lg:text-base mt-1">{job.company}</p>
                <p className="body-text text-xs sm:text-sm lg:text-base mt-1 font-medium">{job.period}</p>
                <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5">
                  {job.points.map((p, j) => (
                    <motion.li key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={v ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + j * 0.05 }}
                      className="flex gap-2 sm:gap-3 text-[13px] sm:text-sm lg:text-base dark-text leading-relaxed">
                      <span className="text-indigo mt-0.5 shrink-0 font-bold">▸</span>
                      <span>{p}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
