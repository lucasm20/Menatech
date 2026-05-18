"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-brand-black/58 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Mena Tech inicio">
          <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-md border border-blue-400/30 bg-white/5 shadow-blue-glow">
            <Image
              src="/menatech-logo.png"
              alt="Logo de Mena Tech"
              width={40}
              height={40}
              className="size-10 object-cover"
              priority
            />
          </span>
          <span className="text-base font-semibold text-brand-white">Mena Tech</span>
        </a>

        <div className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/[0.035] p-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-white/68 transition hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden rounded-md border border-blue-400/30 bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-blue-glow transition hover:bg-blue-500 md:inline-flex"
        >
          Empezar
        </a>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-white/12 bg-white/6 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/8 bg-brand-black/92 px-5 py-4 backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-white/72 transition hover:bg-white/8 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
