/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0f1e',
        ink2: '#111827',
        surface: '#f7f8fc',
        blue: '#1B4FD8',
        'blue-light': '#2563EB',
        'blue-pale': '#EEF2FF',
        teal: '#0D9488',
        'teal-pale': '#F0FDF9',
        gold: '#D97706',
        'gold-pale': '#FFFBEB',
        text: '#1e293b',
        'text-mid': '#475569',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        outfit: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
        md: '0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.06)',
        lg: '0 24px 80px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.08)',
        xl: '0 32px 120px rgba(0,0,0,0.18)',
        'blue': '0 12px 48px rgba(27,79,216,0.25)',
        'blue-soft': '0 6px 24px rgba(27,79,216,0.15)',
      },
      borderRadius: {
        lg: '16px',
        xl: '18px',
        '2xl': '20px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      }
    },
  },
  plugins: [],
}
