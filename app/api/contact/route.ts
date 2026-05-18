import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  project?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const normalize = (value: unknown) => (typeof value === "string" ? value.trim() : "");
const normalizeHeader = (value: string) => value.replace(/[\r\n]+/g, " ").trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  const name = normalize(payload?.name);
  const email = normalize(payload?.email);
  const project = normalize(payload?.project);
  const message = normalize(payload?.message);

  if (!name) {
    return NextResponse.json(
      { error: "Ingresa tu nombre y apellido para enviar la solicitud." },
      { status: 400 }
    );
  }

  if (!email) {
    return NextResponse.json(
      { error: "Ingresa tu correo electrónico para continuar." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Ingresa un correo electrónico válido." },
      { status: 400 }
    );
  }

  if (!project) {
    return NextResponse.json(
      { error: "Selecciona un tipo de proyecto para enviar la solicitud." },
      { status: 400 }
    );
  }

  if (!message) {
    return NextResponse.json(
      { error: "Escribe qué necesitas construir para enviar la solicitud." },
      { status: 400 }
    );
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const contactTo = process.env.CONTACT_TO ?? emailUser;

  if (!emailUser || !emailPassword || !contactTo) {
    return NextResponse.json(
      { error: "El envio de correos no esta configurado." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPassword
    }
  });

  const customerName = normalizeHeader(name);
  const projectName = normalizeHeader(project);

  try {
    await transporter.sendMail({
      from: {
        name: `${customerName} • Mena Tech`,
        address: emailUser
      },
      to: contactTo,
      replyTo: {
        name: customerName,
        address: email
      },
      subject: `Nueva solicitud de ${customerName} — ${projectName}`,
      text: [
        "Nueva consulta de cliente desde la web de Mena Tech",
        "",
        `Nombre y apellido: ${name}`,
        `Email: ${email}`,
        `Tipo de proyecto: ${project}`,
        "",
        "Mensaje:",
        message
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
          <h2>Nueva consulta de cliente desde la web de Mena Tech</h2>
          <p><strong>Nombre y apellido:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Tipo de proyecto:</strong> ${escapeHtml(project)}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `
    });
  } catch (error) {
    console.error("Contact email failed", error);

    return NextResponse.json(
      { error: "No se pudo enviar el correo. Revisa la configuracion de Gmail." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
