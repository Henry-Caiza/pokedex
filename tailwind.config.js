/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13142b',
        secondary: '#1a1c48',
      },
      screens: {
        'cell': '425px',
        // => @media (min-width: 640px) { ... }

        'desktop': '1920px',
        // => @media (min-width: 1024px) { ... }

        'tv': '1920px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}

