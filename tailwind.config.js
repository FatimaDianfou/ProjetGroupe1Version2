/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './node_modules/preline/preline.js',
      "./src/**/*.{html,ts}",
  ],
  plugins: [
      require('preline/plugin'),
  ],
}
