import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#080f09",
          900: "#0d1a0e",
          800: "#112214",
          700: "#162b18",
          600: "#1c3a1f",
          500: "#244d27",
          400: "#2e6333",
          300: "#3d8042",
        },
        sage: {
          400: "#8bab8e",
          300: "#a8c4ab",
          200: "#c4dcc6",
          100: "#e0eee1",
        },
        gold: {
          400: "#c9a84c",
          300: "#d4b96a",
          200: "#e0cd99",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        handwritten: ["var(--font-caveat)", "cursive"],
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-medium": "floatMedium 4s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "slide-in-left": "slideInLeft 0.7s ease forwards",
        "slide-in-right": "slideInRight 0.7s ease forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(45, 100, 50, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(45, 100, 50, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
