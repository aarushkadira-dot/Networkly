/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'from-blue-500',
    'to-cyan-400',
    'from-emerald-500',
    'to-teal-400',
    'from-purple-500',
    'to-pink-400',
    'from-teal-500',
    'to-blue-400',
    'from-orange-500',
    'to-yellow-400',
    'from-gray-500',
    'to-gray-400',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic Color System
        // Primary → Buttons, key actions, links
        primary: {
          DEFAULT: '#2563EB', // royal-blue
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#2563EB', // main primary
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#1E3A8A',
          950: '#172554',
        },
        // Secondary → Highlights, subtle backgrounds
        secondary: {
          DEFAULT: '#06B6D4', // bright-teal
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4', // main secondary
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
          950: '#083344',
        },
        // Accent → Rare. Only use for emphasis (stats, badges, small icons)
        accent: {
          DEFAULT: '#10B981', // emerald green
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // main accent
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
        // Neutral/Gray Scale → Backgrounds, text areas, cards
        neutral: {
          DEFAULT: '#6B7280',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
        // Legacy colors for backward compatibility (will be phased out)
        'dark-navy': '#111827',
        'deep-blue': '#1E3A8A',
        'royal-blue': '#2563EB',
        'bright-teal': '#06B6D4',
        'background': '#F9FAFB',
        'text-primary': '#111827',
        'text-secondary': '#4B5563',
        'glass-white': 'rgba(255, 255, 255, 0.8)',
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
        // Legacy CTA and accent colors (mapped to new system)
        'cta': '#2563EB', // maps to primary
        'accent-blue': '#1D4ED8', // maps to primary-600
        'accent-lime': '#10B981', // maps to accent
        'accent-teal': '#06B6D4', // maps to secondary
        'accent-coral': '#F97316', // maps to accent variant
        // Brand colors for glow effect
        brand: "hsl(var(--brand))",
        "brand-foreground": "hsl(var(--brand-foreground))",
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'lifted': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'warm': '0 3px 10px rgba(255, 127, 107, 0.15)',
      },
      fontFamily: {
        sans: ['Open Sans', 'Inter', 'Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
        heading: ['Inter', 'Open Sans', 'sans-serif'],
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
        appear: "appear 0.5s ease-out forwards",
        "appear-zoom": "appear-zoom 0.5s ease-out forwards",
        aurora: "aurora 60s linear infinite",
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
        appear: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "appear-zoom": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      let allColors = {};
      const colors = theme("colors");
      const flattenColorPalette = (colors) => {
        const result = {};
        for (const key in colors) {
          if (typeof colors[key] === "object" && colors[key] !== null) {
            for (const subKey in colors[key]) {
              result[`${key}-${subKey}`] = colors[key][subKey];
            }
          } else {
            result[key] = colors[key];
          }
        }
        return result;
      };
      const flattened = flattenColorPalette(colors);
      for (const key in flattened) {
        allColors[`--${key}`] = flattened[key];
      }
      addBase({
        ":root": allColors,
      });
    },
  ],
};
