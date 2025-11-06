# 🎨 Ejemplos Avanzados - Raios Background

Esta guía contiene ejemplos avanzados y variaciones creativas del componente Raios Background.

---

## 📋 Tabla de Contenidos

1. [Variaciones de Color](#variaciones-de-color)
2. [Efectos Especiales](#efectos-especiales)
3. [Integraciones](#integraciones)
4. [Casos de Uso Reales](#casos-de-uso-reales)
5. [Optimizaciones](#optimizaciones)

---

## 🎨 Variaciones de Color

### Versión Azul Eléctrico

```jsx
<RaiosBackground
  dotCount={15}
  distribution="scattered"
  goldColor="#00BFFF"
  blur={90}
  animationDuration={2.5}
>
  <YourContent />
</RaiosBackground>
```

### Versión Neón Púrpura

```jsx
<RaiosBackground
  dotCount={18}
  distribution="random"
  goldColor="#9D00FF"
  minDotSize={120}
  maxDotSize={380}
  blur={100}
>
  <YourContent />
</RaiosBackground>
```

### Versión Cyber Rosa

```jsx
<RaiosBackground
  dotCount={12}
  distribution="grid"
  goldColor="#FF006E"
  blur={75}
  animationDuration={3.5}
>
  <YourContent />
</RaiosBackground>
```

### Versión Esmeralda

```jsx
<RaiosBackground
  dotCount={14}
  distribution="scattered"
  goldColor="#50C878"
  minDotSize={180}
  maxDotSize={420}
  blur={95}
>
  <YourContent />
</RaiosBackground>
```

---

## ✨ Efectos Especiales

### Efecto Aurora Boreal

```jsx
// Combinar múltiples instancias con diferentes colores
<div style={{ position: 'relative' }}>
  <RaiosBackground
    dotCount={8}
    goldColor="#00FF87"
    blur={120}
    animationDuration={5}
  />
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
    <RaiosBackground
      dotCount={6}
      goldColor="#00D4FF"
      blur={100}
      animationDuration={4}
    >
      <YourContent />
    </RaiosBackground>
  </div>
</div>
```

### Efecto Constelación

```jsx
<RaiosBackground
  dotCount={25}
  distribution="scattered"
  minDotSize={50}
  maxDotSize={150}
  goldColor="#FFFFFF"
  blur={30}
  animationDuration={6}
>
  <YourContent />
</RaiosBackground>
```

### Efecto Lava

```jsx
<RaiosBackground
  dotCount={10}
  distribution="random"
  minDotSize={250}
  maxDotSize={500}
  goldColor="#FF4500"
  blur={150}
  animationDuration={8}
>
  <YourContent />
</RaiosBackground>
```

---

## 🔗 Integraciones

### Con React Router

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RaiosBackground from './components/RaiosBackground';

function App() {
  return (
    <BrowserRouter>
      <RaiosBackground dotCount={12}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </RaiosBackground>
    </BrowserRouter>
  );
}
```

### Con Framer Motion

```jsx
import { motion } from 'framer-motion';
import RaiosBackground from './components/RaiosBackground';

function AnimatedPage() {
  return (
    <RaiosBackground dotCount={15} distribution="scattered">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Welcome to Raios</h1>
        <p>Animated content</p>
      </motion.div>
    </RaiosBackground>
  );
}
```

### Con Next.js

```jsx
// pages/_app.js
import RaiosBackground from '../components/RaiosBackground';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <RaiosBackground
      dotCount={12}
      distribution="random"
      goldColor="#D4AF37"
    >
      <Component {...pageProps} />
    </RaiosBackground>
  );
}

export default MyApp;
```

### Con Styled Components

```jsx
import styled from 'styled-components';
import RaiosBackground from './components/RaiosBackground';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

function StyledPage() {
  return (
    <RaiosBackground dotCount={14}>
      <Container>
        <h1>Styled Components + Raios</h1>
      </Container>
    </RaiosBackground>
  );
}
```

---

## 💼 Casos de Uso Reales

### Landing Page de Producto

```jsx
function ProductLanding() {
  return (
    <RaiosBackground
      dotCount={10}
      distribution="scattered"
      minDotSize={200}
      maxDotSize={450}
      animationDuration={4}
    >
      <nav className="navbar">
        <Logo />
        <Menu />
      </nav>

      <section className="hero">
        <h1>Descubre Arte Único</h1>
        <p>El marketplace de arte digital más innovador</p>
        <button className="cta">Explorar Ahora</button>
      </section>

      <section className="features">
        <FeatureCard title="Seguro" />
        <FeatureCard title="Rápido" />
        <FeatureCard title="Confiable" />
      </section>

      <footer>
        <SocialLinks />
      </footer>
    </RaiosBackground>
  );
}
```

### Dashboard Admin

```jsx
function AdminDashboard() {
  return (
    <RaiosBackground
      dotCount={8}
      distribution="grid"
      minDotSize={150}
      maxDotSize={300}
      goldColor="#4A90E2"
      blur={60}
    >
      <Sidebar />
      <MainContent>
        <DashboardStats />
        <Charts />
        <RecentActivity />
      </MainContent>
    </RaiosBackground>
  );
}
```

### Página de Autenticación

```jsx
function AuthPage() {
  return (
    <RaiosBackground
      dotCount={6}
      distribution="scattered"
      minDotSize={250}
      maxDotSize={500}
      blur={120}
      animationDuration={5}
    >
      <div className="auth-container">
        <Logo />
        <h2>Bienvenido a Raios</h2>

        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Iniciar Sesión</button>
        </form>

        <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
      </div>
    </RaiosBackground>
  );
}
```

### Portfolio de Arte

```jsx
function ArtPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <RaiosBackground
      dotCount={15}
      distribution="random"
      goldColor="#D4AF37"
    >
      <header>
        <h1>Galería de Arte Digital</h1>
        <CategoryFilter
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </header>

      <ArtGrid category={selectedCategory}>
        {artworks.map(art => (
          <ArtCard key={art.id} artwork={art} />
        ))}
      </ArtGrid>
    </RaiosBackground>
  );
}
```

---

## ⚡ Optimizaciones

### Versión Responsive

```jsx
import { useState, useEffect } from 'react';

function ResponsiveBackground({ children }) {
  const [dotCount, setDotCount] = useState(12);

  useEffect(() => {
    const updateDotCount = () => {
      if (window.innerWidth < 768) {
        setDotCount(6); // Mobile
      } else if (window.innerWidth < 1024) {
        setDotCount(10); // Tablet
      } else {
        setDotCount(15); // Desktop
      }
    };

    updateDotCount();
    window.addEventListener('resize', updateDotCount);

    return () => window.removeEventListener('resize', updateDotCount);
  }, []);

  return (
    <RaiosBackground
      dotCount={dotCount}
      distribution="random"
      blur={window.innerWidth < 768 ? 60 : 80}
    >
      {children}
    </RaiosBackground>
  );
}
```

### Con Lazy Loading

```jsx
import { lazy, Suspense } from 'react';

const RaiosBackground = lazy(() => import('./components/RaiosBackground'));

function App() {
  return (
    <Suspense fallback={<div className="loading">Cargando...</div>}>
      <RaiosBackground dotCount={12}>
        <YourContent />
      </RaiosBackground>
    </Suspense>
  );
}
```

### Con Reduced Motion

```jsx
import { useReducedMotion } from 'framer-motion';

function AccessibleBackground({ children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <RaiosBackground
      dotCount={shouldReduceMotion ? 4 : 12}
      animationDuration={shouldReduceMotion ? 10 : 3}
      blur={shouldReduceMotion ? 40 : 80}
    >
      {children}
    </RaiosBackground>
  );
}
```

### Performance Monitoring

```jsx
import { useEffect } from 'react';

function MonitoredBackground({ children }) {
  useEffect(() => {
    // Medir FPS
    let lastTime = performance.now();
    let frames = 0;

    const measureFPS = () => {
      frames++;
      const currentTime = performance.now();

      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - lastTime));
        console.log(`FPS: ${fps}`);

        // Si FPS < 30, reducir complejidad
        if (fps < 30) {
          console.warn('Low FPS detected. Consider reducing dotCount.');
        }

        frames = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(measureFPS);
    };

    const animationId = requestAnimationFrame(measureFPS);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <RaiosBackground dotCount={12}>
      {children}
    </RaiosBackground>
  );
}
```

---

## 🎭 Temas Pre-configurados

### Tema Dorado Clásico

```jsx
const goldTheme = {
  dotCount: 12,
  distribution: 'random',
  minDotSize: 150,
  maxDotSize: 400,
  goldColor: '#D4AF37',
  blur: 80,
  animationDuration: 3
};

<RaiosBackground {...goldTheme}>
  <YourContent />
</RaiosBackground>
```

### Tema Dark Mode Intenso

```jsx
const darkTheme = {
  dotCount: 20,
  distribution: 'random',
  minDotSize: 100,
  maxDotSize: 300,
  goldColor: '#1A1A1A',
  blur: 100,
  animationDuration: 2
};
```

### Tema Minimal

```jsx
const minimalTheme = {
  dotCount: 5,
  distribution: 'grid',
  minDotSize: 200,
  maxDotSize: 350,
  goldColor: '#E5E5E5',
  blur: 50,
  animationDuration: 5
};
```

### Tema Cyberpunk

```jsx
const cyberpunkTheme = {
  dotCount: 18,
  distribution: 'scattered',
  minDotSize: 120,
  maxDotSize: 380,
  goldColor: '#00FFFF',
  blur: 90,
  animationDuration: 2.5
};
```

---

## 🔧 Hooks Personalizados

### useRaiosConfig Hook

```jsx
import { useState, useEffect } from 'react';

function useRaiosConfig() {
  const [config, setConfig] = useState({
    dotCount: 12,
    distribution: 'random',
    goldColor: '#D4AF37'
  });

  useEffect(() => {
    // Cargar configuración guardada
    const saved = localStorage.getItem('raios-config');
    if (saved) {
      setConfig(JSON.parse(saved));
    }
  }, []);

  const updateConfig = (newConfig) => {
    const updated = { ...config, ...newConfig };
    setConfig(updated);
    localStorage.setItem('raios-config', JSON.stringify(updated));
  };

  return [config, updateConfig];
}

// Uso
function App() {
  const [config, updateConfig] = useRaiosConfig();

  return (
    <RaiosBackground {...config}>
      <YourContent />
    </RaiosBackground>
  );
}
```

---

## 🎯 Tips Finales

1. **Rendimiento**: Mantén `dotCount` entre 8-15 para mejor performance
2. **Mobile**: Reduce `blur` y `dotCount` en dispositivos móviles
3. **Accesibilidad**: Respeta `prefers-reduced-motion`
4. **Branding**: Usa `goldColor` acorde a tu marca
5. **Testing**: Prueba en diferentes navegadores y dispositivos

---

**¿Más ideas?** Contribuye con tus propios ejemplos en el repositorio.
