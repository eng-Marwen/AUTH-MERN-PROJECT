/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 🔹 Add your custom colors here
        primary: '#1E40AF', // e.g. bg-primary, text-primary
      },
    },
  },
  plugins: [],
}
