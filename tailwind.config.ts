/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          50: 'oklch(0.14 0.025 258 / <alpha-value>)',
          100: 'oklch(0.18 0.03 258 / <alpha-value>)',
          200: 'oklch(0.22 0.035 258 / <alpha-value>)',
          300: 'oklch(0.27 0.04 258 / <alpha-value>)',
          400: 'oklch(0.33 0.045 258 / <alpha-value>)',
          500: 'oklch(0.40 0.05 258 / <alpha-value>)',
          600: 'oklch(0.48 0.055 258 / <alpha-value>)',
          700: 'oklch(0.58 0.06 258 / <alpha-value>)',
          800: 'oklch(0.70 0.065 258 / <alpha-value>)',
          900: 'oklch(0.82 0.05 258 / <alpha-value>)',
          950: 'oklch(0.93 0.03 258 / <alpha-value>)',
        },
        primary: {
          50:  'oklch(0.97 0.02 259 / <alpha-value>)',
          100: 'oklch(0.92 0.04 259 / <alpha-value>)',
          200: 'oklch(0.84 0.07 259 / <alpha-value>)',
          300: 'oklch(0.72 0.10 259 / <alpha-value>)',
          400: 'oklch(0.62 0.12 259 / <alpha-value>)',   // リンク・ラベル（暗背景用）
          500: 'oklch(0.446 0.127 259 / <alpha-value>)', // ← #205aa1
          600: 'oklch(0.38 0.11 259 / <alpha-value>)',   // ボタンホバーなど
          700: 'oklch(0.32 0.09 259 / <alpha-value>)',
          800: 'oklch(0.26 0.07 259 / <alpha-value>)',
          900: 'oklch(0.20 0.05 259 / <alpha-value>)',
          950: 'oklch(0.14 0.03 259 / <alpha-value>)',
        },
        accent: {
          50:  'oklch(0.97 0.02 87 / <alpha-value>)',
          100: 'oklch(0.94 0.04 87 / <alpha-value>)',
          200: 'oklch(0.90 0.06 87 / <alpha-value>)',
          300: 'oklch(0.84 0.08 87 / <alpha-value>)',
          400: 'oklch(0.80 0.09 87 / <alpha-value>)',
          500: 'oklch(0.757 0.089 87 / <alpha-value>)',  // ← #ccab6a
          600: 'oklch(0.68 0.085 86 / <alpha-value>)',
          700: 'oklch(0.58 0.075 85 / <alpha-value>)',
          800: 'oklch(0.48 0.06 84 / <alpha-value>)',
          900: 'oklch(0.38 0.045 83 / <alpha-value>)',
          950: 'oklch(0.26 0.03 82 / <alpha-value>)',
        },
        secondary: {
          50: 'oklch(0.16 0.02 250 / <alpha-value>)',
          100: 'oklch(0.20 0.025 250 / <alpha-value>)',
          200: 'oklch(0.25 0.03 250 / <alpha-value>)',
          300: 'oklch(0.30 0.035 250 / <alpha-value>)',
          400: 'oklch(0.36 0.04 250 / <alpha-value>)',
          500: 'oklch(0.42 0.045 250 / <alpha-value>)',
          600: 'oklch(0.50 0.05 250 / <alpha-value>)',
          700: 'oklch(0.60 0.055 250 / <alpha-value>)',
          800: 'oklch(0.72 0.06 250 / <alpha-value>)',
          900: 'oklch(0.83 0.05 250 / <alpha-value>)',
          950: 'oklch(0.93 0.03 250 / <alpha-value>)',
        },
        foreground: {
          50: 'oklch(0.12 0.02 260 / <alpha-value>)',
          100: 'oklch(0.18 0.02 260 / <alpha-value>)',
          200: 'oklch(0.25 0.02 260 / <alpha-value>)',
          300: 'oklch(0.32 0.02 260 / <alpha-value>)',
          400: 'oklch(0.42 0.02 260 / <alpha-value>)',
          500: 'oklch(0.52 0.02 260 / <alpha-value>)',
          600: 'oklch(0.62 0.02 260 / <alpha-value>)',
          700: 'oklch(0.72 0.02 260 / <alpha-value>)',
          800: 'oklch(0.82 0.02 260 / <alpha-value>)',
          900: 'oklch(0.90 0.01 260 / <alpha-value>)',
          950: 'oklch(0.96 0 0 / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        label: ['var(--font-label)', 'sans-serif'],
        display: ['var(--font-heading)', 'serif'],
        serif: ['var(--font-heading)', 'serif'],
      },
    },
  },
  plugins: [],
}