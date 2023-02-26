/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "visspot-darkest-gray": "#1a1a1a",
        "visspot-primary": "#e69839",
        "visspot-light-primary":"#ffe6c7",
        "visspot-dark-primary":"#d97800",
        "visspot-darkest-primary": "#854900",
      }
    }
  },
  plugins: []
};