import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          blue: "#2563EB",
          light: "#3B82F6",
          white: "#F5F5F5"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "blue-glow": "0 0 42px rgba(37, 99, 235, 0.32)",
        "soft-glow": "0 20px 80px rgba(59, 130, 246, 0.14)"
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(rgba(245,245,245,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,245,0.055) 1px, transparent 1px)",
        "panel-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.025))"
      }
    }
  },
  plugins: []
};

export default config;
