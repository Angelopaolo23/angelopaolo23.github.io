import React, { useMemo } from 'react';

/**
 * RaiosBackground - Componente de fondo animado para Marketplace Raios
 *
 * Un fondo oscuro con puntos palpitantes que usan gradientes dorado metálico a negro,
 * simulando energía eléctrica con un diseño elegante y experimental.
 *
 * @param {Object} props - Propiedades del componente
 * @param {number} props.dotCount - Cantidad de puntos a renderizar (default: 12)
 * @param {number} props.minDotSize - Tamaño mínimo de los puntos en px (default: 150)
 * @param {number} props.maxDotSize - Tamaño máximo de los puntos en px (default: 400)
 * @param {string} props.distribution - Tipo de distribución: 'random' | 'grid' | 'scattered' (default: 'random')
 * @param {number} props.spacing - Espaciado entre puntos en modo grid (default: 100)
 * @param {number} props.animationDuration - Duración de la animación en segundos (default: 3)
 * @param {string} props.goldColor - Color dorado metálico (default: '#D4AF37')
 * @param {number} props.blur - Intensidad del blur en px (default: 80)
 * @param {boolean} props.randomDelay - Agregar delay aleatorio a cada punto (default: true)
 * @param {string} props.className - Clases CSS adicionales
 * @param {React.ReactNode} props.children - Contenido a renderizar sobre el fondo
 */
const RaiosBackground = ({
  dotCount = 12,
  minDotSize = 150,
  maxDotSize = 400,
  distribution = 'random',
  spacing = 100,
  animationDuration = 3,
  goldColor = '#D4AF37',
  blur = 80,
  randomDelay = true,
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
          // Distribución en cuadrícula
          const cols = Math.ceil(Math.sqrt(dotCount));
          const row = Math.floor(i / cols);
          const col = i % cols;
          position = {
            x: spacing + (col * spacing * 3),
            y: spacing + (row * spacing * 3)
          };
          break;

        case 'scattered':
          // Distribución dispersa pero controlada
          const angle = (i / dotCount) * Math.PI * 2;
          const radius = 20 + Math.random() * 60;
          position = {
            x: 50 + Math.cos(angle) * radius,
            y: 50 + Math.sin(angle) * radius
          };
          break;

        case 'random':
        default:
          // Distribución completamente aleatoria
          position = {
            x: Math.random() * 100,
            y: Math.random() * 100
          };
          break;
      }

      const size = minDotSize + Math.random() * (maxDotSize - minDotSize);
      const delay = randomDelay ? Math.random() * animationDuration : (i * 0.2) % animationDuration;

      generatedDots.push({
        id: i,
        x: position.x,
        y: position.y,
        size,
        delay
      });
    }

    return generatedDots;
  }, [dotCount, minDotSize, maxDotSize, distribution, spacing, animationDuration, randomDelay]);

  return (
    <div className={`raios-background ${className}`}>
      <style jsx>{`
        .raios-background {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background-color: #000000;
          overflow: hidden;
        }

        .raios-dots-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .raios-dot {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            ${goldColor} 0%,
            ${goldColor}CC 20%,
            ${goldColor}66 40%,
            transparent 70%
          );
          filter: blur(${blur}px);
          animation-name: pulse-raios;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-duration: ${animationDuration}s;
          transform: translate(-50%, -50%);
          opacity: 0.7;
        }

        @keyframes pulse-raios {
          0% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(0.8);
          }
          50% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.1);
          }
          100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(0.8);
          }
        }

        .raios-content {
          position: relative;
          z-index: 1;
        }

        /* Efecto de brillo eléctrico adicional */
        .raios-dot::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 50%;
          background: radial-gradient(
            circle at center,
            ${goldColor}FF 0%,
            transparent 70%
          );
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: inner-glow ${animationDuration * 0.6}s ease-in-out infinite;
        }

        @keyframes inner-glow {
          0%, 100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        /* Optimizaciones de rendimiento */
        .raios-dot {
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>

      <div className="raios-dots-container">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="raios-dot"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animationDelay: `${dot.delay}s`
            }}
          />
        ))}
      </div>

      <div className="raios-content">
        {children}
      </div>
    </div>
  );
};

export default RaiosBackground;
