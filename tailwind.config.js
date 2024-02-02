/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        initial: '#e8c900',
        end: '#e0a417',
        primary: '#e3a617',
        secondary: '#d82633',
        icon: '#b81319',
        accent: '#d82933',
        text: '#ffffff',
        translucid: '#e3a61714',
        light: '#fde4a9'

      },
      spacing: {
        '885': '885px',
        '474': '474px',
        '318' : '318px',
        '111' : '111px',
      }
    },
  },
  plugins: [],
};
