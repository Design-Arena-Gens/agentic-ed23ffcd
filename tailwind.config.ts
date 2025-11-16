import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f7ff",
          100: "#dfeeff",
          200: "#bedbff",
          300: "#95c1ff",
          400: "#6aa1ff",
          500: "#3c78ff",
          600: "#2a5ce6",
          700: "#2249b4",
          800: "#1e3e8f",
          900: "#1c366f"
        }
      },
      boxShadow: {
        glow: "0 10px 30px rgba(60,120,255,0.4)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
