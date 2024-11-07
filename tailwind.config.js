// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
