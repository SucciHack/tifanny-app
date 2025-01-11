/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-border': 'linear-gradient(45deg, #ef4444, #1d4ed8)',
      },
      animation: {
        scale: 'scale 0.9s ease-in-out infinite',
      },
      keyframes: {
        scale: {
          '0%, 40%, 100%': { transform: 'scaleY(0.05)' },
          '20%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
};