"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { title: "CI/CD Pipeline", desc: "Built a Jenkins pipeline to automate GitHub integration, Docker image builds, and container deployment on Linux.", icon: "🔄", highlight: true },
  { title: "Docker & Containers", desc: "Created Dockerfiles, managed container lifecycle — resolving port conflicts, handling image cleanup, ensuring stable deployments.", icon: "🐳", highlight: true },
  { title: "Jenkins Administration", desc: "Managing permissions, troubleshooting pipeline issues, and monitoring logs and services on Linux.", icon: "🔧" },
  { title: "Kubernetes Foundations", desc: "Understanding of Kubernetes architecture, components, and orchestration concepts.", icon: "☸️" },
  { title: "Cloud-Native Concepts", desc: "Orchestration, configuration management, and observability in cloud-native ecosystems.", icon: "☁️" },
  { title: "Containerized Backends", desc: "Configuring containerized applications with MySQL / MariaDB backends.", icon: "🗃️" },
];

export default function DevOpsExposure() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-24 bg-base relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(13,148,136,0.04),transparent_50%)]" />

      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-teal font-semibold text-sm mb-2 tracking-wide uppercase">Hands-On</p>
          <h2 className="dark-text text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">DevOps & Cloud</h2>
          <div className="w-16 h-1 bg-coral rounded-full mb-4" />
          <p className="body-text text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-lg">Hands-on experience with CI/CD, containerization, and cloud-native tooling.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={v ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
              className={`rounded-xl p-4 sm:p-6 bg-white transition-all duration-300 cursor-default shadow-sm hover:shadow-xl ${
                item.highlight
                  ? "border-l-4 border-l-teal border border-teal/10"
                  : "border border-border hover:border-teal/20"
              }`}>
              <span className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 block">{item.icon}</span>
              <h3 className="dark-text font-bold text-sm sm:text-base lg:text-xl mb-2">{item.title}</h3>
              <p className="body-text text-xs sm:text-sm lg:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
