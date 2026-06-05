"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, ExternalLink, MapPin } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";

export default function Contact() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-16 sm:py-24 bg-base relative overflow-hidden">
      <ParticleCanvas count={40} opacity={0.5} />

      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center">
          <p className="text-indigo font-semibold text-sm mb-2 tracking-wide uppercase">Reach Out</p>
          <h2 className="dark-text text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-amber rounded-full mb-8 sm:mb-12 mx-auto" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center text-center">
          <h3 className="dark-text text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Let&apos;s work together.</h3>
          <p className="body-text text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg">
            I&apos;m open to new opportunities and collaborations. Whether you have a role, a project, or just want to say hi — feel free to reach out.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg">
            {[
              { icon: Phone, label: "+91 9489492281", href: "tel:+919489492281" },
              { icon: Mail, label: "sagay539@gmail.com", href: "mailto:sagay539@gmail.com" },
              { icon: ExternalLink, label: "linkedin.com/in/saga11", href: "https://www.linkedin.com/in/saga11" },
              { icon: MapPin, label: "Coimbatore, Tamil Nadu", href: null },
            ].map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={v ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border hover:border-indigo/30 hover:shadow-md transition-all duration-200">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-indigo flex items-center justify-center shrink-0 shadow-md shadow-indigo/20">
                  <item.icon size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
                </div>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[13px] sm:text-sm lg:text-base dark-text hover:text-indigo transition-colors font-medium truncate">{item.label}</a>
                ) : <span className="text-[13px] sm:text-sm lg:text-base dark-text font-medium">{item.label}</span>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
