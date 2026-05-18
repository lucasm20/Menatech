"use client";

import { motion } from "framer-motion";
import { technologies } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

export function TechStack() {
  return (
    <section id="tecnologias" className="border-b border-white/8 bg-brand-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tecnologías"
          title="Stack moderno para productos rápidos y mantenibles"
          description="Elegimos herramientas probadas para construir experiencias de alto rendimiento, APIs sólidas e integraciones inteligentes."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.055
              }
            }
          }}
          className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3"
        >
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ y: -4 }}
              className="rounded-md border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-medium text-white/78 shadow-soft-glow backdrop-blur transition hover:border-blue-300/35 hover:text-white"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
