/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",'./src/Otpapp.js'],
    theme: {
      extend: {},
    },
    plugins: [
      {tailwindcss: {},
      autoprefixer: {},},
    ],
  };