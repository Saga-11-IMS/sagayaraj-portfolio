"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const groups = [
  { title: "OS & Hosting", num: "01", skills: ["Linux (CentOS, AlmaLinux, Ubuntu)", "cPanel/WHM", "Plesk", "DirectAdmin", "CWP Pro", "Webuzo", "CloudLinux", "CageFS"] },
  { title: "Web Stack", num: "02", skills: ["Apache", "Nginx", "LiteSpeed", "WordPress"] },
  { title: "Databases", num: "03", skills: ["MySQL", "MariaDB", "MongoDB", "SQLite"] },
  { title: "AWS", num: "04", skills: ["EC2", "IAM", "S3", "EBS", "EFS", "VPC", "RDS", "Security Groups", "Auto Scaling", "CloudFront", "CloudWatch"] },
  { title: "DevOps & Automation", num: "05", skills: ["Git", "Jenkins CI/CD", "Docker", "Ansible", "Kubernetes", "Cron Jobs", "Log Analysis"] },
  { title: "Email & DNS", num: "06", skills: ["Exim", "Mailman", "Cloudflare DNS", "Delivery Troubleshooting", "Mailbox Quota Mgmt"] },
  { title: "Soft Skills", num: "07", skills: ["Problem-solving", "Adaptability", "Time Management", "Communication", "Teamwork"] },
];

export default function Skills() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="py-16 sm:py-24 bg-base relative overflow-hidden">
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-[200px] sm:text-[280px] font-extrabold text-teal/[0.03] leading-none select-none pointer-events-none tracking-tighter hidden sm:block">
        {groups[active].num}
      </div>

      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-teal font-semibold text-sm mb-2 tracking-wide uppercase">My Toolkit</p>
          <h2 className="dark-text text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-coral rounded-full mb-10 sm:mb-14" />
        </motion.div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-4 sm:gap-8 lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={v ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0">
            {groups.map((g, i) => (
              <button key={g.title} onClick={() => setActive(i)}
                className={`group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left transition-all duration-300 shrink-0 ${
                  active === i
                    ? "bg-teal text-white shadow-lg shadow-teal/20"
                    : "bg-white hover:bg-white/80 border border-border hover:border-teal/20"
                }`}>
                <span className={`font-mono text-[10px] sm:text-xs font-bold tracking-wider ${active === i ? "text-coral" : "text-teal/40"}`}>
                  {g.num}
                </span>
                <span className={`font-semibold text-[13px] sm:text-sm lg:text-base whitespace-nowrap ${active !== i ? "dark-text" : ""}`}>{g.title}</span>
                <span className={`ml-auto text-xs lg:text-sm font-mono hidden sm:inline ${active === i ? "text-white/60" : "muted-text"}`}>
                  {g.skills.length}
                </span>
              </button>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={v ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="min-h-[280px] sm:min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
                <div className="flex items-baseline gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <span className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-teal/10 font-mono leading-none">{groups[active].num}</span>
                  <div>
                    <h3 className="dark-text text-xl sm:text-2xl font-bold">{groups[active].title}</h3>
                    <p className="muted-text text-xs sm:text-sm lg:text-base mt-1">{groups[active].skills.length} technologies</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {groups[active].skills.map((skill, j) => (
                    <motion.div key={skill} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: j * 0.06, ease: "easeOut" }}
                      className="group flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white border border-border hover:border-teal/30 hover:bg-teal-light transition-all duration-200">
                      <span className="w-2 h-2 rounded-full bg-teal/30 group-hover:bg-teal group-hover:scale-125 transition-all duration-200" />
                      <span className="dark-text text-sm sm:text-base lg:text-lg font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
