/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1D6FD8',
          dark:    '#1558B0',
          light:   '#EBF3FF',
        },
        teal: {
          DEFAULT: '#0D9A8A',
          light:   '#E6F7F5',
        },
        slate: {
          DEFAULT: '#1A2540',
          mid:     '#3D4E6B',
          soft:    '#6B7A99',
        },
        bg: {
          alt:  '#F5F8FF',
          teal: '#F0FBF9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card:   '0 2px 16px rgba(29,111,216,.10)',
        'card-md': '0 4px 28px rgba(29,111,216,.14)',
      },
    },
  },
  plugins: [],
};
