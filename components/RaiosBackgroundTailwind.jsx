import React, { useMemo } from 'react';

/**
 * RaiosBackgroundTailwind - Versión con Tailwind CSS
 *
 * Componente de fondo animado para Marketplace Raios usando Tailwind CSS.
 * Requiere configuración adicional en tailwind.config.js
 *
 * @param {Object} props - Propiedades del componente
 * @param {number} props.dotCount - Cantidad de puntos (default: 12)
 * @param {number} props.minDotSize - Tamaño mínimo en px (default: 150)
 * @param {number} props.maxDotSize - Tamaño máximo en px (default: 400)
 * @param {string} props.distribution - 'random' | 'grid' | 'scattered' (default: 'random')
 * @param {number} props.spacing - Espaciado en modo grid (default: 100)
 * @param {string} props.className - Clases adicionales
 * @param {React.ReactNode} props.children - Contenido
 */
const RaiosBackgroundTailwind = ({
  dotCount = 12,
  minDotSize = 150,
  maxDotSize = 400,
  distribution = 'random',
  spacing = 100,
  className = '',
  children
}) => {

  // Generar posiciones y tamaños de los puntos
  const dots = useMemo(() => {
    const generatedDots = [];

    for (let i = 0; i < dotCount; i++) {
      let position = { x: 0, y: 0 };

      switch (distribution) {
        case 'grid':
          const cols = Math.ceil(Math.sqrt(dotCount));
          const row = Math.floor(i / cols);
          const col = i % cols;
          position = {
            x: spacing + (col * spacing * 3),
            y: spacing + (row * spacing * 3)
          };
          break;

        case 'scattered':
          const angle = (i / dotCount) * Math.PI * 2;
          const radius = 20 + Math.random() * 60;
          position = {
            x: 50 + Math.cos(angle) * radius,
            y: 50 + Math.sin(angle) * radius
          };
          break;

        case 'random':
        default:
          position = {
            x: Math.random() * 100,
            y: Math.random() * 100
          };
          break;
      }

      const size = minDotSize + Math.random() * (maxDotSize - minDotSize);
      const delay = Math.random() * 3;
      const duration = 2 + Math.random() * 2;

      generatedDots.push({
        id: i,
        x: position.x,
        y: position.y,
        size,
        delay,
        duration
      });
    }

    return generatedDots;
  }, [dotCount, minDotSize, maxDotSize, distribution, spacing]);

  return (
    <div className={`relative w-full min-h-screen bg-black overflow-hidden ${className}`}>
      {/* Contenedor de puntos */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full animate-pulse-raios"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              background: `radial-gradient(
                circle at center,
                rgba(212, 175, 55, 1) 0%,
                rgba(212, 175, 55, 0.8) 20%,
                rgba(212, 175, 55, 0.4) 40%,
                transparent 70%
              )`,
              filter: 'blur(80px)',
              animationDelay: `${dot.delay}s`,
              animationDuration: `${dot.duration}s`,
              transform: 'translate(-50%, -50%)',
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden'
            }}
          >
            {/* Brillo interno */}
            <div
              className="absolute top-1/2 left-1/2 w-1/2 h-1/2 rounded-full animate-inner-glow"
              style={{
                background: 'radial-gradient(circle at center, rgba(212, 175, 55, 1) 0%, transparent 70%)',
                transform: 'translate(-50%, -50%)',
                animationDelay: `${dot.delay}s`,
                animationDuration: `${dot.duration * 0.6}s`
              }}
            />
          </div>
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default RaiosBackgroundTailwind;

/**
 * Configuración requerida para tailwind.config.js:
 *
 * module.exports = {
 *   theme: {
 *     extend: {
 *       animation: {
 *         'pulse-raios': 'pulse-raios 3s ease-in-out infinite',
 *         'inner-glow': 'inner-glow 1.8s ease-in-out infinite',
 *       },
 *       keyframes: {
 *         'pulse-raios': {
 *           '0%': {
 *             opacity: '0.3',
 *             transform: 'translate(-50%, -50%) scale(0.8)',
 *           },
 *           '50%': {
 *             opacity: '0.9',
 *             transform: 'translate(-50%, -50%) scale(1.1)',
 *           },
 *           '100%': {
 *             opacity: '0.3',
 *             transform: 'translate(-50%, -50%) scale(0.8)',
 *           },
 *         },
 *         'inner-glow': {
 *           '0%, 100%': {
 *             opacity: '0.4',
 *             transform: 'translate(-50%, -50%) scale(0.8)',
 *           },
 *           '50%': {
 *             opacity: '1',
 *             transform: 'translate(-50%, -50%) scale(1.2)',
 *           },
 *         },
 *       },
 *     },
 *   },
 * }
 */
