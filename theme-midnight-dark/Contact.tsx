"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { Mail, Phone, ExternalLink, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-base relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan/3 rounded-full blur-3xl hidden sm:block" />

      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-cyan font-semibold text-sm mb-2 tracking-wide uppercase">Reach Out</p>
          <h2 className="dark-text text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-gold rounded-full mb-8 sm:mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={v ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="dark-text text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Let&apos;s work together.</h3>
            <p className="body-text text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              I&apos;m open to new opportunities and collaborations. Whether you have a role, a project, or just want to say hi — feel free to reach out.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: Phone, label: "+91 9489492281", href: "tel:+919489492281" },
                { icon: Mail, label: "sagay539@gmail.com", href: "mailto:sagay539@gmail.com" },
                { icon: ExternalLink, label: "linkedin.com/in/saga11", href: "https://www.linkedin.com/in/saga11" },
                { icon: MapPin, label: "Kallakurichi, Tamil Nadu — 606 201", href: null },
              ].map((item, i) => (
                <motion.div key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={v ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg hover:bg-[#1e293b] transition-colors">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-cyan flex items-center justify-center shrink-0 shadow-md shadow-cyan/20">
                    <item.icon size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
                  </div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[13px] sm:text-sm lg:text-base dark-text hover:text-cyan transition-colors font-medium">{item.label}</a>
                  ) : <span className="text-[13px] sm:text-sm lg:text-base dark-text font-medium">{item.label}</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            animate={v ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1e293b] rounded-xl border border-border p-5 sm:p-7 space-y-4 sm:space-y-5 shadow-sm">
            <div>
              <label className="block text-sm lg:text-base font-semibold dark-text mb-2">Name</label>
              <input type="text" required placeholder="Your name"
                className="w-full bg-base border border-border rounded-lg dark-text px-4 py-3 text-sm lg:text-base placeholder-muted focus:outline-none focus:ring-2 focus:ring-cyan/20 focus:border-cyan transition-all" />
            </div>
            <div>
              <label className="block text-sm lg:text-base font-semibold dark-text mb-2">Email</label>
              <input type="email" required placeholder="you@example.com"
                className="w-full bg-base border border-border rounded-lg dark-text px-4 py-3 text-sm lg:text-base placeholder-muted focus:outline-none focus:ring-2 focus:ring-cyan/20 focus:border-cyan transition-all" />
            </div>
            <div>
              <label className="block text-sm lg:text-base font-semibold dark-text mb-2">Message</label>
              <textarea rows={4} required placeholder="Your message..."
                className="w-full bg-base border border-border rounded-lg dark-text px-4 py-3 text-sm lg:text-base placeholder-muted focus:outline-none focus:ring-2 focus:ring-cyan/20 focus:border-cyan transition-all resize-none" />
            </div>
            <motion.button type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-7 py-3.5 font-semibold text-sm lg:text-base text-white bg-cyan rounded-lg hover:bg-cyan-dark transition-colors shadow-lg shadow-cyan/25"
            >{sent ? "✓ Message Sent!" : "Send Message"}</motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
