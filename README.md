# Mena Tech

Web oficial de Mena Tech construida con Next.js 15, TypeScript, TailwindCSS y Framer Motion. El diseño está orientado a una software house premium: fondo oscuro, acentos azul eléctrico, glassmorphism, animaciones suaves y secciones optimizadas para captar clientes de desarrollo web, sistemas personalizados, dashboards, automatización e IA.

## Stack

- Next.js 15.5.18
- React 19
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React
- Deploy optimizado para Vercel

## Estructura

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  About.tsx
  Contact.tsx
  Footer.tsx
  Hero.tsx
  Navbar.tsx
  Projects.tsx
  SectionHeader.tsx
  Services.tsx
  TechStack.tsx
lib/
  site.ts
public/
  menatech-logo.png
```

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Validación

```bash
npm run lint
npm run build
```

## Deploy en Vercel

1. Subir el proyecto a GitHub, GitLab o Bitbucket.
2. Crear un nuevo proyecto en Vercel e importar el repositorio.
3. Vercel detectará Next.js automáticamente.
4. Usar la configuración por defecto:
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output: gestionado automáticamente por Next.js
5. Configurar el dominio final cuando esté disponible.

## Datos editables

Los enlaces de navegación, proyectos, tecnologías, email, WhatsApp y redes sociales están centralizados en `lib/site.ts`.
