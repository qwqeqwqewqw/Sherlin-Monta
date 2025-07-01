import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Original palette
        seashellWhite: "#eeeee2",
        nauticalNavy: "#2F3E46",
        sageGreen: "#97A78C",
        driftwood: "#a7a493",
        hintOfSilver: "#C0C0C0",

        // New palette from images
        forestGreen: "#5E6C5B",
        freshCream: "#F4EFE6",
        cloudWhite: "#FEFCF6",
        skyBlue: "#D6E0E2",
        stormCloud: "#686867",
        midnight: "#162A2C",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
        script: ["Dancing Script", "cursive"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        hotel: {
          primary: "#97A78C", // sageGreen
          secondary: "#2F3E46", // nauticalNavy
          accent: "#a7a493", // driftwood
          neutral: "#C0C0C0", // hintOfSilver
          "base-100": "#FEFCF6", // cloudWhite
          "base-200": "#F4EFE6", // freshCream
          "base-300": "#686867", // stormCloud
        },
      },
    ],
    base: true,
    utils: true,
  },
};