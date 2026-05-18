"use client";

import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const pillars = [
  {
    icon: Rocket,
    title: "Velocidad estratégica",
    text: "Diseñamos y desarrollamos con ciclos ágiles, decisiones claras y entregables listos para crecer."
  },
  {
    icon: ShieldCheck,
    title: "Base confiable",
    text: "Priorizamos arquitectura limpia, SEO técnico, accesibilidad y rendimiento desde el primer sprint."
  },
  {
    icon: Sparkles,
    title: "Experiencia premium",
    text: "Cada interfaz se trabaja con jerarquía visual, microinteracciones y una estética alineada al negocio."
  }
];

export function About() {
  return (
    <section id="nosotros" className="border-b border-white/8 bg-[#0D0D0F] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sobre Nosotros"
          title="Innovación aplicada a productos digitales reales"
          description="Mena Tech desarrolla soluciones web, sistemas personalizados y automatizaciones inteligentes para marcas que buscan operar mejor y presentarse con una presencia digital sólida."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.52, delay: index * 0.06 }}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
            >
              <pillar.icon size={22} className="text-blue-300" />
              <h3 className="mt-7 text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/58">{pillar.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
