"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers3, MessageCircle, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

const metrics = [
  { label: "Performance", value: "98" },
  { label: "Deploy", value: "Vercel" },
  { label: "Stack", value: "Next 15" }
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden border-b border-white/8 bg-brand-black pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-tech-grid bg-[size:42px_42px] opacity-35" />
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[linear-gradient(180deg,rgba(37,99,235,0.24),transparent)]" />

      <div className="mx-auto grid min-h-[calc(100vh-32px)] max-w-7xl items-center gap-14 px-5 pb-20 sm:px-6 lg:grid-cols-[1fr_0.88fr] lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-7 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-sm text-white/72 shadow-soft-glow backdrop-blur"
          >
            <Sparkles size={16} className="text-blue-300" />
            Software house premium para productos digitales
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            className="max-w-5xl text-5xl font-semibold leading-[1.02] text-brand-white sm:text-6xl lg:text-7xl"
          >
            Creamos soluciones digitales modernas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/66 md:text-xl"
          >
            Desarrollo web, sistemas personalizados y tecnología inteligente para negocios.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-blue-glow transition hover:bg-blue-500"
            >
              Ver proyectos
              <ArrowRight size={18} />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/14 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-300/45 hover:bg-white/10"
            >
              <MessageCircle size={18} />
              Contactar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: "easeOut" }}
            className="mt-12 grid max-w-xl grid-cols-3 gap-3"
          >
            {metrics.map((item) => (
              <div
                key={item.label}
                className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur"
              >
                <p className="text-xs text-white/45">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 32, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-lg bg-blue-600/20 blur-3xl" />
          <div className="overflow-hidden rounded-lg border border-white/12 bg-panel-shine shadow-2xl shadow-blue-950/30 backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-blue-300" />
                <span className="size-2.5 rounded-full bg-white/35" />
                <span className="size-2.5 rounded-full bg-white/20" />
              </div>
              <span className="text-xs font-medium text-white/45">mena.tech/workspace</span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/menatech-logo.png"
                    alt="Mena Tech"
                    width={48}
                    height={48}
                    className="size-12 rounded-md border border-blue-300/25 object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">Mena Intelligence Suite</p>
                    <p className="text-xs text-white/45">Product delivery system</p>
                  </div>
                </div>
                <div className="rounded-md border border-blue-300/24 bg-blue-500/12 px-3 py-1 text-xs font-medium text-blue-100">
                  Live
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    icon: Zap,
                    title: "Automatización",
                    description: "Procesos inteligentes"
                  },
                  {
                    icon: ShieldCheck,
                    title: "Uptime",
                    description: "99.9% disponibilidad"
                  },
                  {
                    icon: Layers3,
                    title: "Arquitectura",
                    description: "Modular y escalable"
                  }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-md border border-white/10 bg-black/24 p-4 transition hover:border-blue-300/24 hover:bg-black/30"
                  >
                    <item.icon size={18} className="text-blue-300" />
                    <p className="mt-4 text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/45">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-md border border-white/10 bg-black/28 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-white">Flujo de entrega</p>
                  <p className="text-xs text-blue-200">Optimizado</p>
                </div>
                <div className="space-y-3">
                  {["Discovery", "UI System", "Backend API", "Vercel Deploy"].map((step, index) => (
                    <div key={step} className="grid grid-cols-[88px_1fr] items-center gap-3">
                      <span className="text-xs text-white/45">{step}</span>
                      <span className="h-2 overflow-hidden rounded-md bg-white/8">
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: `${58 + index * 11}%` }}
                          transition={{ duration: 0.9, delay: 0.45 + index * 0.08 }}
                          className="block h-full rounded-md bg-gradient-to-r from-blue-600 to-blue-300"
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
