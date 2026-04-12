/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#09090b',
        'dark-card': '#18181b',
        'dark-card-hover': '#27272a',
        'dark-border': '#3f3f46',
        'primary': '#06b6d4',
        'secondary': '#8b5cf6',
        'text-main': '#f9fafb',
        'text-dim': '#a1a1aa',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(6, 182, 212, 0.5)',
        'glow-secondary': '0 0 20px rgba(139, 92, 246, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.15), transparent 40%), radial-gradient(circle at bottom left, rgba(6, 182, 212, 0.15), transparent 40%)',
      },
    },
  },
  plugins: [],
}

