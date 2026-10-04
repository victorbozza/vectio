/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FFFFFF',
        'bg-section': '#F8FAFC',
        'bg-card': '#FFFFFF',
        'bg-elevated': '#F1F5F9',
        accent: {
          royal: '#1D4ED8',
          'royal-hover': '#1E3A8A',
          'royal-vibrant': '#2563EB',
          'royal-soft': '#EFF6FF',
          blue: '#1D4ED8',
          'blue-hover': '#1E3A8A',
          'blue-light': '#2563EB',
        },
      },
      fontFamily: {
        sans: ['"Roboto"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
