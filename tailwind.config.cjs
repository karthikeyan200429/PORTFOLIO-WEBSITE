module.exports = {
  content: [
    './index.html',
    './**/*.{js,ts,jsx,tsx,html}',
    '!./node_modules/**'
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': {
          '50': '#f0f9fa',
          '100': '#e0f2f6',
          '200': '#c2e6ee',
          '300': '#93d5e3',
          '400': '#61c1d7',
          '500': '#3eabbd',
          '600': '#2c8a9f',
          '700': '#246e81',
          '800': '#215a6a',
          '900': '#1e4b58',
          '950': '#122e38',
        },
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        moveGradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out forwards',
        slideOut: 'slideOut 0.5s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        moveGradient: 'moveGradient 30s ease-in-out infinite',
      }
    }
  },
  plugins: []
};
