/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      colors: {
        "primary": '#38bdf8',
        "secandry": '#334155',
        "hover": '#0891b2',
        "layer": 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}