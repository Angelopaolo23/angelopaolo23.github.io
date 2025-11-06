/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Animaciones personalizadas para Raios Background
      animation: {
        'pulse-raios': 'pulse-raios 3s ease-in-out infinite',
        'inner-glow': 'inner-glow 1.8s ease-in-out infinite',
      },
      keyframes: {
        // Animación de pulsación para los puntos
        'pulse-raios': {
          '0%': {
            opacity: '0.3',
            transform: 'translate(-50%, -50%) scale(0.8)',
          },
          '50%': {
            opacity: '0.9',
            transform: 'translate(-50%, -50%) scale(1.1)',
          },
          '100%': {
            opacity: '0.3',
            transform: 'translate(-50%, -50%) scale(0.8)',
          },
        },
        // Animación de brillo interno
        'inner-glow': {
          '0%, 100%': {
            opacity: '0.4',
            transform: 'translate(-50%, -50%) scale(0.8)',
          },
          '50%': {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1.2)',
          },
        },
      },
      // Colores personalizados para Raios
      colors: {
        'raios-gold': {
          DEFAULT: '#D4AF37',
          light: '#FFD700',
          dark: '#B8860B',
          metallic: '#DAA520',
        },
      },
      // Filtros de blur personalizados
      blur: {
        '80': '80px',
        '100': '100px',
        '120': '120px',
      },
    },
  },
  plugins: [],
}
