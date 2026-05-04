"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tech = ["Prometheus", "Grafana", "Alertmanager", "Ansible", "Python", "YAML", "systemd", "firewalld", "SSH", "RHEL / AlmaLinux"];

const points = [
  "Deployed Prometheus and Grafana for real-time monitoring across WHM/cPanel Linux servers",
  "Configured custom exporters (Node, Apache, MySQL, cPanel) managed via systemd",
  "Implemented Alertmanager with Slack and Telegram notifications for proactive incident response",
  "Automated exporter deployment using Ansible playbooks — reduced manual server onboarding",
  "Created reusable Jinja2 templates and secured secrets using Ansible Vault",
];

export default function Projects() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-coral/5 rounded-full blur-3xl hidden sm:block" />
      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-teal font-semibold text-sm mb-2 tracking-wide uppercase">What I Built</p>
          <h2 className="dark-text text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Featured Project</h2>
          <div className="w-16 h-1 bg-coral rounded-full mb-8 sm:mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={v ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
          className="rounded-2xl border border-border bg-base p-5 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-teal/5 to-transparent rounded-bl-full" />

          <div className="relative">
            <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={v ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-block px-3 py-1 text-[11px] font-bold text-white bg-teal rounded-full uppercase tracking-wider mb-4">
              Featured
            </motion.span>
            <h3 className="dark-text text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Infrastructure Monitoring & Automation Platform</h3>
            <p className="body-text text-sm sm:text-base lg:text-lg mb-5 sm:mb-6">End-to-end monitoring, observability & automation for production Linux servers.</p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              {tech.map((t, i) => (
                <motion.span key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={v ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-sm lg:text-base font-semibold text-teal-force bg-teal-light rounded-lg hover:bg-teal transition-all duration-200 cursor-default">
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="space-y-2 sm:space-y-3">
              {points.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={v ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="flex gap-2 sm:gap-3 text-[13px] sm:text-sm lg:text-base dark-text leading-relaxed">
                  <span className="text-teal font-bold shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span>{p}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
