"use client";

import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { BarChart3, Bot, Code2, Headphones, Workflow } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Desarrollo Web",
    description:
      "Landing pages, sitios corporativos y plataformas web rápidas, escalables y listas para conversión.",
    icon: Code2
  },
  {
    title: "Sistemas Personalizados",
    description:
      "Aplicaciones internas, portales y módulos de negocio diseñados alrededor de procesos reales.",
    icon: Workflow
  },
  {
    title: "Dashboards",
    description:
      "Paneles ejecutivos con métricas claras, visualización de datos y experiencia operativa eficiente.",
    icon: BarChart3
  },
  {
    title: "IA y Automatización",
    description:
      "Integración de asistentes, flujos automáticos y modelos inteligentes para equipos modernos.",
    icon: Bot
  },
  {
    title: "Soporte Técnico",
    description:
      "Mantenimiento, mejoras continuas, monitoreo y acompañamiento técnico para productos activos.",
    icon: Headphones
  }
];

const serviceCardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      delay: index * 0.06,
      ease: "easeOut"
    }
  })
};

export function Services() {
  return (
    <section id="servicios" className="relative border-b border-white/8 bg-brand-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Servicios"
          title="Tecnología precisa para construir, automatizar y escalar"
          description="Creamos soluciones digitales con arquitectura moderna, interfaces cuidadas y foco en impacto comercial."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              custom={index}
              variants={serviceCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 520, damping: 34, mass: 0.55 }
              }}
              className="group rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-soft-glow backdrop-blur-xl transition-colors duration-150 ease-out hover:border-blue-300/35 hover:bg-white/[0.07] lg:min-h-[292px]"
            >
              <div className="mb-8 inline-flex size-11 items-center justify-center rounded-md border border-blue-300/24 bg-blue-500/12 text-blue-200 transition group-hover:border-blue-200/45 group-hover:bg-blue-500/18">
                <service.icon size={21} />
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/58">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
