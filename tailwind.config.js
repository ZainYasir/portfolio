/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0a0a',
        'darker': '#050505',
        'neon-purple': '#b026ff',
        'neon-blue': '#0891b2',
        'neon-pink': '#ec4899',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(176, 38, 255, 0.7), 0 0 10px rgba(176, 38, 255, 0.5)' },
          '100%': { boxShadow: '0 0 10px rgba(176, 38, 255, 0.9), 0 0 20px rgba(176, 38, 255, 0.7), 0 0 30px rgba(176, 38, 255, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};