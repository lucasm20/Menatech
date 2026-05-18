import Image from "next/image";
import { navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-brand-black py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/menatech-logo.png"
            alt="Logo de Mena Tech"
            width={34}
            height={34}
            className="size-8 rounded-md object-cover"
          />
          <span className="text-sm font-semibold text-white">Mena Tech</span>
        </a>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/50 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-white/42">© 2026 Mena Tech. Soluciones digitales modernas.</p>
      </div>
    </footer>
  );
}
