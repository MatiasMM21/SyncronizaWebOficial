module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0052A5',
        'secondary-blue': '#007ACC',
        'light-blue': '#4DABF5',
        'dark-blue': '#003366',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 15px 35px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}