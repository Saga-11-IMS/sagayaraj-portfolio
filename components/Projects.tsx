"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Infrastructure Monitoring & Automation Platform",
    subtitle: "Centralized monitoring, observability & automation for Linux hosting environments.",
    featured: true,
    tech: ["Prometheus", "Grafana", "Alertmanager", "Ansible", "Linux", "systemd", "YAML"],
    points: [
      "Designed and deployed a centralized monitoring and alerting platform for Linux-based hosting environments",
      "Configured Prometheus exporters (Node, Apache, MySQL) for infrastructure and service monitoring",
      "Built Grafana dashboards to visualize server health, application performance, and availability",
      "Integrated Alertmanager with Slack and Telegram for real-time incident notifications",
      "Automated exporter deployment using Ansible playbooks, Jinja2 templates, and Ansible Vault",
      "Managed Linux services and monitoring agents via systemd and firewall configurations",
      "Reduced manual server onboarding through reusable automation workflows and templates",
    ],
  },
  {
    title: "Docker & CI/CD Lab Project",
    subtitle: "Container builds, deployments, and CI/CD practiced in a lab environment.",
    featured: false,
    tech: ["Docker", "Jenkins", "Git", "Linux", "Docker Compose"],
    points: [
      "Built Jenkins CI/CD pipelines in lab environments automating GitHub integration, Docker image builds, and container deployments",
      "Created Dockerfiles and managed Docker containers for learning application deployment workflows",
      "Practiced container lifecycle management — image cleanup, port mapping, and deployment validation",
      "Configured Docker-based application setups with MySQL/MariaDB backend connectivity in local environments",
      "Troubleshot container startup failures, networking issues, and service accessibility during testing",
    ],
  },
  {
    title: "Kubernetes Lab Environment",
    subtitle: "Hands-on container orchestration in a Kubernetes lab.",
    featured: false,
    tech: ["Kubernetes", "Docker", "YAML", "kubectl"],
    points: [
      "Deployed and managed containerized applications using Deployments and Services",
      "Practiced Pods, namespaces, scaling, rolling updates, and basic service exposure",
      "Created YAML manifests for application deployments and service configurations",
      "Gained foundational understanding of Kubernetes architecture and orchestration concepts",
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-amber/5 rounded-full blur-3xl hidden sm:block" />
      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-indigo font-semibold text-sm mb-2 tracking-wide uppercase">What I Built</p>
          <h2 className="dark-text text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-amber rounded-full mb-8 sm:mb-12" />
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, p) => (
            <motion.div key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={v ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + p * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="rounded-2xl border border-border bg-base p-5 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-indigo/5 to-transparent rounded-bl-full" />

              <div className="relative">
                {project.featured && (
                  <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={v ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 }}
                    className="inline-block px-3 py-1 text-[11px] font-bold text-white bg-indigo rounded-full uppercase tracking-wider mb-4">
                    Featured
                  </motion.span>
                )}
                <h3 className="dark-text text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{project.title}</h3>
                <p className="body-text text-sm sm:text-base lg:text-lg mb-5 sm:mb-6">{project.subtitle}</p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {project.tech.map((t, i) => (
                    <motion.span key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={v ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-sm lg:text-base font-semibold text-indigo-force bg-indigo-light rounded-lg hover:bg-indigo transition-all duration-200 cursor-default">
                      {t}
                    </motion.span>
                  ))}
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {project.points.map((pt, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={v ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                      className="flex gap-2 sm:gap-3 text-[13px] sm:text-sm lg:text-base dark-text leading-relaxed">
                      <span className="text-indigo font-bold shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <span>{pt}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
