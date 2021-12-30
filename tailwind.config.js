module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      current: 'app',
      'app-dark': '#23272a',
      'app-white': '#ffffff',
      'app-purple': '#8651C9',
      'app-red': '#FF406F',
      'app-blueple': '#5866ef',
      'app-green': '#3da560',
      'app-yellow': '#f9a62b',
      'app-orange': '#f37b68'
    }
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'class',
  }),],
}
