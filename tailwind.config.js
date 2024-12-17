/** @type {import('tailwindcss').Config} */
export default {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#038137", // Default primary color (e.g., blue-700)
          light: "", // Lighter shade
          dark: "", // Darker shade
        },
        secondary: {
          DEFAULT: "#1d1d1b", // Default secondary color (e.g., purple-600)
          light: "", // Lighter shade
          dark: "", // Darker shade
        },
      },
    },
  },
  plugins: [],
};