"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section id="proyectos" className="border-b border-white/8 bg-[#0D0D0F] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="Productos digitales con estética premium y lógica de negocio"
          description="Una muestra de plataformas creadas para empresas que necesitan claridad visual, flujos eficientes y tecnología confiable."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.58, delay: index * 0.08 }}
              className="group block overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] shadow-soft-glow transition hover:-translate-y-1 hover:border-blue-300/35 hover:bg-white/[0.065]"
            >
              <div className={`relative min-h-[310px] overflow-hidden bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 bg-tech-grid bg-[size:36px_36px] opacity-30" />
                <div className="absolute inset-x-6 top-7 rounded-lg border border-white/14 bg-black/46 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <div className="flex gap-2">
                      <span className="size-2.5 rounded-full bg-blue-300" />
                      <span className="size-2.5 rounded-full bg-white/35" />
                      <span className="size-2.5 rounded-full bg-white/20" />
                    </div>
                    <span className="text-xs text-white/45">{project.category}</span>
                  </div>
                  <div className="grid gap-4 p-5 sm:grid-cols-[1fr_0.8fr]">
                    <div>
                      <div className="mb-8 h-3 w-28 rounded-md bg-blue-300/50" />
                      <div className="space-y-3">
                        <div className="h-8 rounded-md bg-white/14" />
                        <div className="h-3 rounded-md bg-white/10" />
                        <div className="h-3 w-4/5 rounded-md bg-white/10" />
                      </div>
                      <div className="mt-7 grid grid-cols-2 gap-3">
                        <div className="rounded-md border border-white/10 bg-white/8 p-3">
                          <div className="h-2 w-12 rounded-md bg-blue-300/70" />
                          <div className="mt-4 h-7 rounded-md bg-white/12" />
                        </div>
                        <div className="rounded-md border border-white/10 bg-white/8 p-3">
                          <div className="h-2 w-10 rounded-md bg-blue-300/50" />
                          <div className="mt-4 h-7 rounded-md bg-white/12" />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md border border-white/10 bg-black/30 p-4">
                      <div className="mb-4 flex items-center gap-2 text-xs text-white/50">
                        <CheckCircle2 size={14} className="text-blue-300" />
                        Product ready
                      </div>
                      <div className="space-y-3">
                        {[72, 56, 84, 64].map((width) => (
                          <div key={width} className="h-2 rounded-md bg-white/8">
                            <span
                              className="block h-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-300"
                              style={{ width: `${width}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 p-6 sm:flex-row sm:items-end">
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/60">
                    {project.description}
                  </p>
                </div>
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-white/12 bg-white/6 text-white transition group-hover:border-blue-300/40 group-hover:bg-blue-600">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
