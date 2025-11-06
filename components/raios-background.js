/**
 * RaiosBackground - Componente de fondo animado vanilla JS
 * Para Marketplace Raios
 *
 * Uso:
 * <div id="raios-bg"
 *      data-dot-count="12"
 *      data-distribution="random"
 *      data-min-size="150"
 *      data-max-size="400">
 * </div>
 * <script src="raios-background.js"></script>
 */

class RaiosBackground {
  constructor(element, options = {}) {
    this.element = element;

    // Configuración por defecto
    this.config = {
      dotCount: parseInt(element.dataset.dotCount) || options.dotCount || 12,
      minDotSize: parseInt(element.dataset.minSize) || options.minDotSize || 150,
      maxDotSize: parseInt(element.dataset.maxSize) || options.maxDotSize || 400,
      distribution: element.dataset.distribution || options.distribution || 'random',
      spacing: parseInt(element.dataset.spacing) || options.spacing || 100,
      animationDuration: parseFloat(element.dataset.animationDuration) || options.animationDuration || 3,
      goldColor: element.dataset.goldColor || options.goldColor || '#D4AF37',
      blur: parseInt(element.dataset.blur) || options.blur || 80,
      randomDelay: element.dataset.randomDelay !== 'false'
    };

    this.init();
  }

  init() {
    // Agregar estilos
    this.injectStyles();

    // Crear estructura
    this.element.classList.add('raios-background');
    this.element.innerHTML = `
      <div class="raios-dots-container"></div>
      <div class="raios-content">${this.element.innerHTML}</div>
    `;

    this.dotsContainer = this.element.querySelector('.raios-dots-container');

    // Generar puntos
    this.generateDots();
  }

  generateDots() {
    const dots = [];

    for (let i = 0; i < this.config.dotCount; i++) {
      let position = this.calculatePosition(i);
      const size = this.config.minDotSize +
                   Math.random() * (this.config.maxDotSize - this.config.minDotSize);
      const delay = this.config.randomDelay
        ? Math.random() * this.config.animationDuration
        : (i * 0.2) % this.config.animationDuration;

      const dot = this.createDot(position.x, position.y, size, delay);
      this.dotsContainer.appendChild(dot);
    }
  }

  calculatePosition(index) {
    const { distribution, spacing, dotCount } = this.config;
    let position = { x: 0, y: 0 };

    switch (distribution) {
      case 'grid':
        // Distribución en cuadrícula
        const cols = Math.ceil(Math.sqrt(dotCount));
        const row = Math.floor(index / cols);
        const col = index % cols;
        position = {
          x: spacing + (col * spacing * 3),
          y: spacing + (row * spacing * 3)
        };
        break;

      case 'scattered':
        // Distribución dispersa pero controlada
        const angle = (index / dotCount) * Math.PI * 2;
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

    return position;
  }

  createDot(x, y, size, delay) {
    const dot = document.createElement('div');
    dot.className = 'raios-dot';
    dot.style.left = `${x}%`;
    dot.style.top = `${y}%`;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.animationDelay = `${delay}s`;

    return dot;
  }

  injectStyles() {
    // Evitar duplicar estilos
    if (document.getElementById('raios-background-styles')) return;

    const { animationDuration, goldColor, blur } = this.config;

    const style = document.createElement('style');
    style.id = 'raios-background-styles';
    style.textContent = `
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
        animation: pulse-raios ${animationDuration}s ease-in-out infinite;
        transform: translate(-50%, -50%);
        opacity: 0.7;
        will-change: transform, opacity;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
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

      .raios-content {
        position: relative;
        z-index: 1;
      }
    `;

    document.head.appendChild(style);
  }

  // Método para actualizar configuración dinámicamente
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    this.dotsContainer.innerHTML = '';
    this.generateDots();
  }

  // Método para destruir la instancia
  destroy() {
    this.element.classList.remove('raios-background');
    this.element.innerHTML = this.element.querySelector('.raios-content').innerHTML;
  }
}

// Auto-inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
  const raiosElements = document.querySelectorAll('[data-raios-background]');

  raiosElements.forEach(element => {
    new RaiosBackground(element);
  });
});

// Exportar para uso manual
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RaiosBackground;
}

// Global para navegador
if (typeof window !== 'undefined') {
  window.RaiosBackground = RaiosBackground;
}
