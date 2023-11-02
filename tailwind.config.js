/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue-theme" : "#0048AD",
        "select-button-color" : "#E0EDFF",
        "body-bg" : "#F9FAFB",
        "body-border" : "#E4E7EC"
      },
      fontFamily: {
        gotham: ['Gotham Pro', 'sans-serif']
      },
      fontSize : {
        heading:['24px','24x']
      }
    },
  },
  plugins: [],
}
