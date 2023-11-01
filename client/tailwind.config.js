/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      animation: {
        'swiggle': 'wiggle 0.1s',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(30%)', opacity: 0.7 },
          '100%': { transform: 'scale(100%)', opacity: 1 },
        }
      },
      colors: {
        'title': '#dd9210'
      }
    }
  }
}

