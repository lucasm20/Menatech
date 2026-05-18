import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Mena Tech | Desarrollo web y soluciones digitales modernas",
  description:
    "Software house premium especializada en desarrollo web, sistemas personalizados, dashboards, automatización e inteligencia artificial.",
  keywords: [
    "Mena Tech",
    "desarrollo web",
    "software house",
    "Next.js",
    "dashboards",
    "automatización",
    "inteligencia artificial"
  ],
  authors: [{ name: "Mena Tech" }],
  creator: "Mena Tech",
  openGraph: {
    title: "Mena Tech | Soluciones digitales modernas",
    description:
      "Desarrollo web, sistemas personalizados y tecnología inteligente para negocios.",
    type: "website",
    locale: "es_PE",
    siteName: "Mena Tech"
  },
  icons: {
    icon: "/menatech-logo.png",
    apple: "/menatech-logo.png"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
