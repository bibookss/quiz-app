/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#dc00e1",
          "secondary": "#005dd9",
          "accent": "#4800ff",
          "neutral": "#12080c",
          "base-100": "#202f2f",
          "info": "#00e7ff",
          "success": "#6ff361",
          "warning": "#ff9300",
          "error": "#f4004f",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      }
    },
  },
  plugins: [require("daisyui")],
}

