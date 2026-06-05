"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, BookOpen, Globe, Rocket, BriefcaseBusiness } from "lucide-react";

const info = [
  { label: "Location", value: "Kallakurichi, Tamil Nadu", Icon: MapPin },
  { label: "Education", value: "B.E (EEE), UCE Panruti (2013–17)", Icon: GraduationCap },
  { label: "Course", value: "Infra Management Services", Icon: BookOpen },
  { label: "Languages", value: "English, Tamil", Icon: Globe },
  { label: "Focus Area", value: "DevOps & Cloud", Icon: Rocket },
  { label: "Status", value: "Open to Opportunities", Icon: BriefcaseBusiness },
];

export default function About() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-indigo font-semibold text-sm mb-2 tracking-wide uppercase">About Me</p>
          <h2 className="dark-text text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-16 h-1 bg-amber rounded-full mb-8 sm:mb-12" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mb-10 sm:mb-14">
          <p style={{ color: '#1f2937' }} className="leading-[1.9] text-[15px] sm:text-base lg:text-[17px] mb-4 sm:mb-5">
            Linux System Engineer with <span style={{ color: '#111827' }} className="font-semibold">4+ years</span> of overall
            IT infrastructure and technical support experience, including <span style={{ color: '#111827' }} className="font-semibold">2+ years</span> specializing
            in production Linux server administration, hosting platforms, and cloud-based services. Experienced
            in troubleshooting live web applications across Apache, Nginx, LiteSpeed, PHP-FPM, MySQL/MariaDB,
            DNS, SSL, mail services, and cPanel-based environments.
          </p>
          <p style={{ color: '#1f2937' }} className="leading-[1.9] text-[15px] sm:text-base lg:text-[17px]">
            Skilled in incident management, log analysis, root cause analysis (RCA), server migrations, and
            infrastructure monitoring. Worked with Docker, Jenkins CI/CD, Ansible automation, Prometheus, and
            Grafana through infrastructure projects and lab environments — with a growing focus on{" "}
            <span className="text-indigo font-semibold">DevOps</span>, containerization, CI/CD workflows,
            Kubernetes, and cloud-native infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {info.map((item, i) => (
            <motion.div key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={v ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-base border border-border hover:border-indigo/25 hover:shadow-lg hover:shadow-indigo/5 transition-all duration-300">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-indigo-light flex items-center justify-center shrink-0">
                <item.Icon size={18} className="text-indigo" />
              </div>
              <div className="min-w-0">
                <p style={{ color: '#374151' }} className="text-xs lg:text-sm font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                <p style={{ color: '#111827' }} className="text-sm lg:text-base font-bold">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
