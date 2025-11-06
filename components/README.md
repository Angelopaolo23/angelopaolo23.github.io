# 🌟 Raios Background Component

Un componente de fondo animado y elegante para el Marketplace **Raios**, con puntos palpitantes que simulan energía eléctrica usando gradientes dorado metálico a negro.

![Raios Background](https://img.shields.io/badge/Version-1.0.0-gold)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Características

- 🎨 **Diseño elegante y experimental** con temática eléctrica
- ⚡ **Alto rendimiento** optimizado para MVPs
- 🎛️ **Completamente configurable** (cantidad, tamaño, distribución de puntos)
- 🔄 **Animaciones suaves** usando CSS puro
- 📱 **Responsivo** y adaptable a cualquier tamaño de pantalla
- 🚀 **Dos versiones**: React y Vanilla JS

---

## 📦 Instalación

### Versión React

```jsx
// Importa el componente
import RaiosBackground from './components/RaiosBackground';

// Úsalo en tu aplicación
function App() {
  return (
    <RaiosBackground>
      <h1>Bienvenido a Raios</h1>
      {/* Tu contenido aquí */}
    </RaiosBackground>
  );
}
```

### Versión Vanilla JS

```html
<!DOCTYPE html>
<html>
<head>
  <title>Raios Marketplace</title>
</head>
<body>
  <!-- Agrega el atributo data-raios-background -->
  <div data-raios-background
       data-dot-count="12"
       data-distribution="random">
    <h1>Bienvenido a Raios</h1>
    <!-- Tu contenido aquí -->
  </div>

  <!-- Incluye el script -->
  <script src="components/raios-background.js"></script>
</body>
</html>
```

---

## 🎛️ Configuración

### Props/Atributos disponibles

| Prop/Atributo | Tipo | Default | Descripción |
|---------------|------|---------|-------------|
| `dotCount` / `data-dot-count` | number | 12 | Cantidad de puntos a renderizar |
| `minDotSize` / `data-min-size` | number | 150 | Tamaño mínimo de puntos (px) |
| `maxDotSize` / `data-max-size` | number | 400 | Tamaño máximo de puntos (px) |
| `distribution` / `data-distribution` | string | 'random' | Tipo de distribución: 'random', 'grid', 'scattered' |
| `spacing` / `data-spacing` | number | 100 | Espaciado entre puntos en modo grid |
| `animationDuration` / `data-animation-duration` | number | 3 | Duración de animación (segundos) |
| `goldColor` / `data-gold-color` | string | '#D4AF37' | Color dorado metálico |
| `blur` / `data-blur` | number | 80 | Intensidad del blur (px) |
| `randomDelay` / `data-random-delay` | boolean | true | Delay aleatorio para cada punto |

---

## 📚 Ejemplos de Uso

### Ejemplo 1: Configuración Básica (React)

```jsx
import RaiosBackground from './components/RaiosBackground';

function HomePage() {
  return (
    <RaiosBackground>
      <div className="container">
        <h1>Marketplace Raios</h1>
        <p>Compra y vende arte único</p>
      </div>
    </RaiosBackground>
  );
}
```

### Ejemplo 2: Configuración Personalizada (React)

```jsx
<RaiosBackground
  dotCount={20}
  minDotSize={100}
  maxDotSize={500}
  distribution="scattered"
  animationDuration={4}
  goldColor="#FFD700"
  blur={100}
>
  <YourContent />
</RaiosBackground>
```

### Ejemplo 3: Distribución en Grid (React)

```jsx
<RaiosBackground
  dotCount={16}
  distribution="grid"
  spacing={150}
  animationDuration={2.5}
>
  <YourContent />
</RaiosBackground>
```

### Ejemplo 4: Vanilla JS - Auto-inicialización

```html
<!DOCTYPE html>
<html>
<body>
  <!-- El componente se inicializa automáticamente -->
  <div data-raios-background
       data-dot-count="15"
       data-distribution="scattered"
       data-min-size="120"
       data-max-size="350"
       data-gold-color="#DAA520">

    <div class="content">
      <h1>Raios Marketplace</h1>
    </div>
  </div>

  <script src="components/raios-background.js"></script>
</body>
</html>
```

### Ejemplo 5: Vanilla JS - Inicialización Manual

```html
<div id="my-background">
  <h1>Mi Contenido</h1>
</div>

<script src="components/raios-background.js"></script>
<script>
  // Inicialización manual con JavaScript
  const element = document.getElementById('my-background');
  const raios = new RaiosBackground(element, {
    dotCount: 18,
    distribution: 'random',
    minDotSize: 200,
    maxDotSize: 450,
    animationDuration: 3.5,
    goldColor: '#FFD700',
    blur: 90
  });

  // Actualizar configuración dinámicamente
  setTimeout(() => {
    raios.updateConfig({
      dotCount: 25,
      distribution: 'grid'
    });
  }, 5000);
</script>
```

---

## 🎨 Tipos de Distribución

### `random` - Distribución Aleatoria
Puntos distribuidos completamente al azar por toda la pantalla. Ideal para un efecto caótico y orgánico.

```jsx
<RaiosBackground distribution="random" dotCount={15} />
```

### `grid` - Distribución en Cuadrícula
Puntos organizados en una cuadrícula ordenada. Perfecto para un diseño más estructurado.

```jsx
<RaiosBackground distribution="grid" spacing={120} dotCount={16} />
```

### `scattered` - Distribución Dispersa
Puntos distribuidos en un patrón circular controlado. Balance entre orden y caos.

```jsx
<RaiosBackground distribution="scattered" dotCount={12} />
```

---

## 🎨 Paleta de Colores Recomendada

```css
/* Dorado clásico */
goldColor: '#D4AF37'

/* Dorado brillante */
goldColor: '#FFD700'

/* Dorado oscuro */
goldColor: '#B8860B'

/* Dorado champagne */
goldColor: '#F7E7CE'

/* Bronce eléctrico */
goldColor: '#CD7F32'
```

---

## 🚀 Optimización de Rendimiento

El componente está optimizado para MVPs:

- ✅ Usa **animaciones CSS** en lugar de JavaScript
- ✅ Implementa `will-change` para optimización de GPU
- ✅ `backface-visibility: hidden` para mejor rendering
- ✅ Los puntos son elementos estáticos generados una sola vez
- ✅ Sin re-renders innecesarios

### Recomendaciones:

- Para dispositivos móviles, usa **8-12 puntos**
- Para desktop, usa **12-20 puntos**
- Reduce el `blur` para mejor rendimiento
- Usa `distribution="grid"` para cálculos más rápidos

---

## 🎯 Casos de Uso

### Marketplace Homepage
```jsx
<RaiosBackground dotCount={15} distribution="scattered">
  <Hero />
  <ProductGallery />
  <Footer />
</RaiosBackground>
```

### Landing Page
```jsx
<RaiosBackground
  dotCount={8}
  minDotSize={200}
  maxDotSize={500}
  animationDuration={4}
>
  <CTASection />
</RaiosBackground>
```

### Sección Hero
```jsx
<RaiosBackground
  dotCount={10}
  distribution="grid"
  spacing={100}
>
  <h1>Descubre Arte Único</h1>
  <button>Explorar</button>
</RaiosBackground>
```

---

## 🔧 API (Vanilla JS)

### Métodos disponibles:

```javascript
// Crear instancia
const raios = new RaiosBackground(element, options);

// Actualizar configuración
raios.updateConfig({
  dotCount: 20,
  goldColor: '#FFD700'
});

// Destruir instancia
raios.destroy();
```

---

## 🎨 Personalización Avanzada

### Cambiar colores del gradiente

Edita el CSS en el componente:

```css
background: radial-gradient(
  circle at center,
  #FF6B6B 0%,      /* Color principal */
  #FF6B6BCC 20%,   /* 80% opacidad */
  #FF6B6B66 40%,   /* 40% opacidad */
  transparent 70%
);
```

### Agregar múltiples colores

```jsx
// Crea múltiples instancias con diferentes colores
<RaiosBackground goldColor="#D4AF37" />
<RaiosBackground goldColor="#FF6B6B" />
```

---

## 📱 Responsive Design

El componente es completamente responsive. Para ajustes específicos:

```jsx
const dotCount = window.innerWidth < 768 ? 8 : 15;

<RaiosBackground dotCount={dotCount} />
```

O con CSS:

```css
@media (max-width: 768px) {
  .raios-dot {
    filter: blur(40px) !important;
  }
}
```

---

## 🐛 Troubleshooting

### Los puntos no aparecen
- Verifica que el contenedor tenga altura (`min-height: 100vh`)
- Asegúrate de que el script esté cargado correctamente

### Bajo rendimiento
- Reduce `dotCount` a 8-10
- Aumenta `animationDuration` a 4-5 segundos
- Reduce el `blur` a 40-60px

### Puntos muy pequeños o grandes
- Ajusta `minDotSize` y `maxDotSize`
- Verifica que los valores estén en píxeles

---

## 📄 Licencia

MIT License - Úsalo libremente en tus proyectos

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el componente:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

---

## 📞 Soporte

¿Tienes preguntas? Abre un issue en el repositorio.

---

**Creado con ⚡ para Raios Marketplace**
