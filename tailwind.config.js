/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#fafafa",
          secondary: "#E5E5E5",
          content: "#121212",
          timepass: "#33ca47",
        },
        dark: {
          primary: "#121212",
          secondary: "#373737",
          content: "#fafafa",
          timepass: "#dd358f",
        },
        "custom-gradient": {
          start: "#ff0f7b",
          end: "#f89b29",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      animation: {
        wiggle: 'wiggle 0.2s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-2px)' },
          '50%': { transform: 'translateY(2px)' },
        }
      },
      backgroundImage: {
        'hero': "url('/src/assets/background.png')",
      },
    },
  },
  plugins: [],
}