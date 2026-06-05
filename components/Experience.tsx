"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    title: "Linux System Engineer / Production Support",
    company: "Assistanz Networks",
    period: "Jan 2024 – Present",
    current: true,
    points: [
      "Manage and support production Linux servers across cloud and shared hosting environments",
      "Administer Linux hosting platforms: cPanel/WHM, Plesk, DirectAdmin, Webuzo, and CloudLinux",
      "Troubleshoot live production issues across Apache, Nginx, LiteSpeed, PHP-FPM, LSAPI, WordPress, and database-driven apps",
      "Diagnose HTTP 500 / PHP fatal errors, mail delivery failures, DNS, SSL problems, and downtime incidents",
      "Support PHP 5.6–8.x applications including performance tuning and service validation",
      "Investigate MySQL/MariaDB connectivity, permissions, performance bottlenecks, and app integration",
      "Monitor cron jobs, scheduled tasks, backups, and log-based troubleshooting across Linux systems",
      "Assist in server migrations, account transfers, and post-migration validation with minimal downtime",
      "Perform root cause analysis (RCA) using system, web server, database, and application logs",
      "Support and troubleshoot mail services — Exim, Mailman, mailbox quotas, and delivery failures",
      "Server hardening, service validation, SSL certificate updates, and infrastructure maintenance",
      "Work with Docker-based deployments and Jenkins CI/CD pipelines in lab and testing environments",
      "Communicate technical findings, incident updates, and resolutions to clients and internal teams",
    ],
  },
  {
    title: "System Administrator",
    company: "Star World Computers",
    period: "Aug 2021 – Jul 2023",
    current: false,
    points: [
      "Installed, configured, and maintained Linux/Windows desktops, printers, and local network environments",
      "Provided technical support for hardware, software, and network-related issues across business environments",
      "Performed system maintenance, troubleshooting, and basic infrastructure support for operational reliability",
      "Assisted users with system configuration, software installation, and connectivity troubleshooting",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-[380px] h-[380px] bg-indigo/6 blur-3xl animate-morph" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-amber/8 blur-3xl animate-morph-slow" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo/4 blur-xl animate-pulse-glow hidden sm:block" />
      <div className="absolute top-[8%] left-[5%] w-20 h-20 rounded-full border border-indigo/10 animate-spin-slow hidden sm:block" style={{animationDuration:"26s"}} />
      <div className="absolute bottom-[8%] right-[5%] w-14 h-14 rounded-full border border-amber/12 animate-spin-slow hidden sm:block" style={{animationDuration:"20s", animationDirection:"reverse"}} />
      <div className="absolute top-[30%] right-[8%] w-2 h-2 rounded-full bg-indigo/25 animate-particle-bob" style={{animationDelay:"2s"}} />
      <div className="absolute bottom-[30%] left-[8%] w-1.5 h-1.5 rounded-full bg-amber/30 animate-particle-bob" style={{animationDelay:"0.7s"}} />

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
