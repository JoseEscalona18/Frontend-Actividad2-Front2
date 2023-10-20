/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./src/components/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    colors:{
      verdeo: '#1d555b',
      aclaro: '#bcd4de',
      verdearb: '#809e3e',
      verde: '#88c426',
      rojo: '#860000',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

