import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#172554'
        }
      },
      boxShadow: {
        soft: '0 12px 30px rgba(15, 23, 42, 0.06)'
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        Poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        Inria: ['Inria Serif', 'ui-serif', 'Georgia', 'serif'],
        Paprika: ['Paprika', 'cursive']
      }
    }
  },
  plugins: [typography]
};
