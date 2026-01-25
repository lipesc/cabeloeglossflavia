/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/content/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        base: "hsl(var(--color-base))",
        surface: "hsl(var(--color-surface))",
        ink: "hsl(var(--color-ink))",
        muted: "hsl(var(--color-muted))",
        accent: "hsl(var(--color-accent))",
        accent2: "hsl(var(--color-accent-2))",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(17, 24, 39, 0.15)",
        glow: "0 12px 30px rgba(224, 88, 68, 0.25)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
  corePlugins: {
  preflight: true,
},
};
