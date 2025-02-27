/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      edutheme: {
        "primary": "#1c375b",
        "secondary": "#6f8197",
        "accent": "#d2544a",
        "neutral": "#cd4236",
        "base-100": "#ffffff",
      }
    }],
  },
}
