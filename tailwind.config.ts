import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-raised": "rgb(var(--surface-raised) / <alpha-value>)",
        paper: "rgb(var(--text) / <alpha-value>)",
        "paper-muted": "rgb(var(--text-muted) / <alpha-value>)",
        "paper-faint": "rgb(var(--text-faint) / <alpha-value>)",
        signal: "rgb(var(--signal) / <alpha-value>)",
        warm: "rgb(var(--warm) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        prose: "42rem",
        content: "52rem",
      },
      animation: {
        "eeg-draw": "eeg-draw 4s ease-in-out infinite alternate",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "gen-flow": "gen-flow 6s ease-in-out infinite",
        "gen-noise": "gen-noise 4s ease-in-out infinite",
        "gen-prior-ring": "gen-prior-ring 5s ease-in-out infinite",
        "gen-latent": "gen-latent 5s ease-in-out infinite",
        "gen-latent-dot": "gen-latent-dot 3.5s ease-in-out infinite",
        "gen-bridge": "gen-bridge 4s ease-in-out infinite",
        "gen-time-sweep": "gen-time-sweep 6s ease-in-out infinite",
      },
      keyframes: {
        "eeg-draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gen-flow": {
          "0%": { strokeDashoffset: "800", opacity: "0.15" },
          "40%": { opacity: "0.55" },
          "100%": { strokeDashoffset: "0", opacity: "0.15" },
        },
        "gen-noise": {
          "0%, 100%": { opacity: "0.12", transform: "translate(0, 0) scale(0.9)" },
          "50%": { opacity: "0.38", transform: "translate(1px, -1px) scale(1.05)" },
        },
        "gen-prior-ring": {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.98)" },
          "50%": { opacity: "0.7", transform: "scale(1.02)" },
        },
        "gen-latent": {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.97)" },
          "50%": { opacity: "0.9", transform: "scale(1.03)" },
        },
        "gen-latent-dot": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.8" },
        },
        "gen-bridge": {
          "0%, 100%": { opacity: "0.3", transform: "scaleX(0.92)" },
          "50%": { opacity: "0.7", transform: "scaleX(1.06)" },
        },
        "gen-time-sweep": {
          "0%, 100%": { opacity: "0.4", transform: "translateX(-40%)" },
          "50%": { opacity: "1", transform: "translateX(40%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
