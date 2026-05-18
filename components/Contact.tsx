"use client";

import { motion } from "framer-motion";
import { ChevronDown, Instagram, Mail, MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { contact } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

const socialIcons = {
  Instagram: Instagram
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  contact.email
)}&su=${encodeURIComponent("Consulta desde la web de Menatech")}&body=${encodeURIComponent(
  "Hola Menatech, quiero agendar una conversacion para conversar sobre un proyecto."
)}`;

export function Contact() {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const getValue = (field: string) => String(formData.get(field) ?? "").trim();

    const name = getValue("name");
    const email = getValue("email");
    const project = getValue("project");
    const message = getValue("message");
    const focusField = (field: string) => {
      const element = form.elements.namedItem(field);

      if (element instanceof HTMLElement) {
        element.focus();
      }
    };

    if (!name) {
      setFeedback("Ingresa tu nombre y apellido para enviar la solicitud.");
      focusField("name");
      return;
    }

    if (!email) {
      setFeedback("Ingresa tu correo electrónico para continuar.");
      focusField("email");
      return;
    }

    if (!emailPattern.test(email)) {
      setFeedback("Ingresa un correo electrónico válido, por ejemplo: nombre@email.com.");
      focusField("email");
      return;
    }

    if (!project) {
      setFeedback("Selecciona un tipo de proyecto para enviar la solicitud.");
      focusField("project");
      return;
    }

    if (!message) {
      setFeedback("Escribe qué necesitas construir para enviar la solicitud.");
      focusField("message");
      return;
    }

    setIsSubmitting(true);
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, project, message })
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        setFeedback(result?.error ?? "No se pudo enviar la solicitud. Intentalo nuevamente.");
        return;
      }

      setFeedback("Solicitud enviada correctamente. Te contactaremos pronto.");
      form.reset();
    } catch {
      setFeedback("No se pudo enviar la solicitud. Revisa tu conexion e intentalo nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative bg-brand-black py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(37,99,235,0.11))]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contacto"
          title="Conversemos sobre tu próxima solución digital"
          description="Cuéntanos qué quieres construir y te ayudamos a convertirlo en una experiencia clara, moderna y escalable."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
              Respuesta directa
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Agenda una conversación</h3>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Ideal para páginas web, sistemas internos, dashboards, automatización e integraciones con IA.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-md border border-blue-300/26 bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-blue-glow transition hover:bg-blue-500"
              >
                <MessageCircle size={18} />
                {contact.whatsappLabel}
              </a>
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-md border border-white/12 bg-white/6 px-4 py-3 text-sm font-semibold text-white transition hover:border-blue-300/35 hover:bg-white/10"
              >
                <Mail size={18} />
                {contact.email}
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              {contact.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex size-10 items-center justify-center rounded-md border border-white/12 bg-white/6 text-white/72 transition hover:border-blue-300/35 hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-soft-glow backdrop-blur-xl sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white/70">
                  Nombre y apellido
                </span>
                <input
                  name="name"
                  type="text"
                  placeholder="Tu nombre y apellido"
                  autoComplete="name"
                  className="w-full rounded-md border border-white/10 bg-black/24 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-blue-300/50"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white/70">Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  autoComplete="email"
                  className="w-full rounded-md border border-white/10 bg-black/24 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-blue-300/50"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium text-white/70">Tipo de proyecto</span>
              <div className="relative">
                <select
                  name="project"
                  className="w-full appearance-none rounded-md border border-white/10 bg-black/24 px-4 py-3 pr-11 text-sm text-white outline-none transition focus:border-blue-300/50"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Selecciona una opcion
                  </option>
                  <option className="bg-brand-black text-white">Landing page</option>
                  <option className="bg-brand-black text-white">Sistema personalizado</option>
                  <option className="bg-brand-black text-white">Dashboard</option>
                  <option className="bg-brand-black text-white">Automatizacion con IA</option>
                  <option className="bg-brand-black text-white">Soporte tecnico</option>
                </select>
                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/45"
                />
              </div>
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium text-white/70">Mensaje</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Cuéntanos brevemente qué necesitas construir."
                className="w-full resize-none rounded-md border border-white/10 bg-black/24 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-blue-300/50"
              />
            </label>

            {feedback ? (
              <p className="mt-4 text-sm font-medium text-blue-200" role="status">
                {feedback}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-blue-glow transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
            >
              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
              <Send size={17} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
