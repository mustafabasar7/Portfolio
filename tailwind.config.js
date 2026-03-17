/** @type {import('tailwindcss').Config} */
export default {
  // Enable class-based dark mode — toggled by adding/removing 'dark' on <html>
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Dark palette
        dark: {
          bg:      '#0d1117',
          surface: '#161b22',
          card:    '#1c2230',
          border:  '#30363d',
        },
        // Light palette
        light: {
          bg:      '#ffffff',
          surface: '#f6f8fa',
          card:    '#ffffff',
          border:  '#d0d7de',
        },
        accent: {
          blue:  '#58a6ff',
          green: '#7ee787',
          red:   '#f78166',
        },
      },
      animation: {
        'fade-up':  'fadeUp 0.5s ease both',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
