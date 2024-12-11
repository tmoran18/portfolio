/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Theme colors
        background: {
          dark: "#070c1a",
          light: "#ffffff",
        },
        // Toggle button backgrounds
        toggle: {
          dark: "#070c1a", // Same as dark background
          light: "#f1f5f9", // slate-100 for light mode
        },
        text: {
          dark: "#94a3b8", // slate-400
          light: "#171717", // Updated light mode text color
        },
        // Badge colors
        badge: {
          dark: {
            text: "#5eead4",
            bg: "#2dd4bf1a",
          },
          light: {
            text: "#0072f5",
            bg: "#f0f7ff",
            border: "#cce6ff",
          },
        },
      },
    },
  },
  plugins: [],
};
