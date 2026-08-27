/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFC107',
          yellowDark: '#E5A800',
          yellowSoft: '#FFF3D0',
          ink: '#1B1B1D',
          slate: '#4A4A4E',
          mist: '#F7F7F5',
          line: '#EAEAE6',
        },
      },
      fontFamily: {
        display: ['"Century Gothic"', '"Poppins"', 'sans-serif'],
        nav: ['"Poppins"', 'sans-serif'],
        body: ['"Lato"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 24px rgba(27, 27, 29, 0.06)',
        cardHover: '0 12px 32px rgba(255, 193, 7, 0.25)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-22px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease forwards',
        marquee: 'marquee 22s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
