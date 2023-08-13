/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": 'url("./src/assets/images/movie.jpg")',
      },
    },
  },
  plugins: [],
};
