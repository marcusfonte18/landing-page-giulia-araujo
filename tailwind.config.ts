import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // Cores da paleta fornecida
        earthy: {
          dark: "#231C07", // Smoky black
          bistre: "#392A16", // Bistre
          liver: "#634133", // Liver
          copper: "#B86F52", // Brown sugar
          parchment: "#F2E7C9", // Parchment
        },
        // Mantendo a estrutura original
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#634133", // Liver como cor primária (antes era roxo)
          foreground: "#F2E7C9", // Texto sobre fundo primário
        },
        secondary: {
          DEFAULT: "#B86F52", // Brown sugar como cor secundária
          foreground: "#F2E7C9", // Texto sobre fundo secundário
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#392A16", // Bistre como cor de destaque
          foreground: "#F2E7C9", // Texto sobre fundo accent
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "#634133", // Liver para bordas
        input: "#F2E7C9", // Parchment para inputs
        ring: "#B86F52", // Brown sugar para anéis de foco
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
