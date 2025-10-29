/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Updated Networkly color palette
        'dark-navy': '#111827',
        'deep-blue': '#1E3A8A',
        'royal-blue': '#2563EB',
        'bright-teal': '#06B6D4',
        'background': '#F9FAFB',
        'text-primary': '#111827',
        'text-secondary': '#4B5563',
        'glass-white': 'rgba(255, 255, 255, 0.8)',
        // Keep some existing colors for compatibility
        'navy': '#111827',
        'blue': '#2563EB',
        'teal': '#06B6D4',
        'electric-blue': '#2563EB',
        'emerald-green': '#06B6D4',
        'royal-purple': '#111827',
        'soft-teal': '#06B6D4',
        'warm-beige': '#F9FAFB',
        'coral-peach': '#06B6D4',
        'charcoal': '#111827',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'lifted': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'warm': '0 3px 10px rgba(255, 127, 107, 0.15)',
      },
      fontFamily: {
        sans: ['Open Sans', 'Inter', 'Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      animation: {
        'scroll-left': 'scroll 40s linear infinite',
        'scroll-right': 'scroll-right 38s linear infinite',
        'scroll-left-slow': 'scroll-left-slow 45s linear infinite',
        'pause': 'paused',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'blob': 'blob 7s infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'dash': 'dash 20s linear infinite',
      },
      animationDelay: {
        '1000': '1s',
        '2000': '2s',
        '3000': '3s',
        '4000': '4s',
      },
      keyframes: {
        'scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'scroll-left-slow': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slideUp': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-15px) translateX(10px)' },
          '50%': { transform: 'translateY(-25px) translateX(-10px)' },
          '75%': { transform: 'translateY(-10px) translateX(15px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-30px) translateX(-15px) rotate(5deg)' },
          '66%': { transform: 'translateY(15px) translateX(10px) rotate(-5deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'dash': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};
