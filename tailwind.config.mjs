/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-padrao': '#6366f1',
        'neon-blue': '#00D4FF',
        'electric-purple': '#7B61FF',
        'deep-black': '#121212',
        'light-gray': '#c7cbd2',
        'dark': '#121212',
        'light': '#f7f7f7',
        'accent': '#823cf5',
      },
    },
  },
  plugins: [],
};

export default config;
