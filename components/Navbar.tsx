"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 sm:px-10 h-[68px]">
        <a href="#hero" className="font-bold text-xl dark-text tracking-tight">
          S<span className="text-indigo">.</span>J
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm dark-text hover:text-indigo transition-colors font-medium relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a href="/sagayaraj_Resume.pdf" download
            className="ml-1 px-5 py-2 text-sm font-semibold text-white bg-indigo rounded-lg hover:bg-indigo-dark transition-colors shadow-md shadow-indigo/20 hover:-translate-y-0.5 transform duration-200"
          >Resume</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden dark-text" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden shadow-lg">
            <div className="flex flex-col items-center py-6 gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-sm dark-text hover:text-indigo transition-colors font-medium">
                  {l.label}
                </a>
              ))}
              <a href="/sagayaraj_Resume.pdf" download
                className="mt-2 px-5 py-2 text-sm font-semibold text-white bg-indigo rounded-lg hover:bg-indigo-dark transition-colors"
              >Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
