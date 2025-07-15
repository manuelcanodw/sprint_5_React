# 🎠 Carrusel de Cards - React + TypeScript

Un carrusel interactivo de cards desarrollado con React y TypeScript, que permite navegar entre diferentes pasos de un tutorial o presentación con animaciones fluidas y una interfaz moderna.

## ✨ Características

### 🎯 Funcionalidades Principales
- **Navegación fluida** entre cards con animaciones suaves
- **Indicadores visuales** que muestran el paso actual
- **Botones de navegación** con flechas intuitivas
- **Diseño responsivo** que se adapta a diferentes pantallas
- **Animaciones CSS** para transiciones elegantes
- **Componentes modulares** siguiendo las mejores prácticas de React

### 🎨 Diseño y UX
- **Cards compactas** (350px x 500px) con bordes redondeados
- **Separación visual** clara entre imagen y contenido
- **Botones circulares** con efectos hover
- **Indicadores de progreso** con puntos interactivos
- **Colores personalizables** para cada card

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca principal para la interfaz de usuario
- **TypeScript** - Tipado estático para mayor seguridad
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Estilos y animaciones personalizadas
- **Git** - Control de versiones

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/manuelcanodw/sprint_5_React.git
   cd sprint_5_React
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Button.tsx      # Botón genérico reutilizable
│   ├── Card.tsx        # Componente principal del carrusel
│   ├── CardButtons.tsx # Navegación y controles
│   ├── CardContent.tsx # Contenido textual de la card
│   ├── CardImage.tsx   # Manejo de imágenes
│   ├── Indicator.tsx   # Indicadores de progreso
│   └── index.ts        # Exportaciones centralizadas
├── types/              # Definiciones de tipos TypeScript
│   ├── buttonProps.ts
│   ├── cardProps.ts
│   ├── indicatorProps.ts
│   └── index.ts
├── styles/             # Estilos CSS
│   └── index.css
├── assets/             # Recursos gráficos
│   ├── meditation.svg
│   ├── programming.svg
│   └── time_managment.svg
└── data/               # Datos del tutorial
    └── tutorialData.ts
```

## 🎮 Uso

### Navegación
- **Flecha izquierda** (←): Ir al paso anterior
- **Flecha derecha** (→): Ir al paso siguiente
- **Indicadores de puntos**: Click directo en cualquier paso

### Personalización
```typescript
// Ejemplo de datos para una card
const cardData = {
  title: "Título del paso",
  description: "Descripción detallada del paso actual",
  image: "/ruta/a/la/imagen.svg",
  colorCard: "#f0f0f0" // Color de fondo opcional
};
```

## 🎨 Componentes

### Card (Principal)
- **Responsabilidad**: Orquesta todos los sub-componentes
- **Props**: `title`, `description`, `image`, `colorCard`, `nextStep`, `prevStep`, `currentStep`, `totalSteps`, `setStep`

### CardImage
- **Responsabilidad**: Renderizar imagen con fondo personalizado
- **Props**: `image`, `title`, `colorCard`

### CardContent
- **Responsabilidad**: Mostrar título y descripción
- **Props**: `title`, `description`

### CardButtons
- **Responsabilidad**: Manejar navegación completa
- **Props**: `nextStep`, `prevStep`, `currentStep`, `totalSteps`, `setStep`

### Button
- **Responsabilidad**: Botón genérico reutilizable
- **Props**: `onClick`, `disabled`, `children`, `variant`

### Indicator
- **Responsabilidad**: Mostrar puntos de navegación
- **Props**: `step`, `steps`, `setStep`

## 🎭 Animaciones

### Transiciones de Cards
- **Fade Out**: La card actual desaparece suavemente
- **Slide In**: La nueva card aparece deslizándose
- **Duración**: 400ms fade + 600ms slide
- **Easing**: `ease-in-out` para movimientos naturales

### Efectos Visuales
- **Escala**: Efecto de profundidad en las transiciones
- **Opacidad**: Transiciones suaves de transparencia
- **Hover**: Efectos interactivos en botones e indicadores

## 📱 Responsive Design

- **Cards compactas**: 350px de ancho x 500px de alto
- **Bordes redondeados**: 30px para diseño moderno
- **Espaciado optimizado**: Padding y márgenes adaptados
- **Navegación táctil**: Botones de tamaño adecuado para dispositivos móviles

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Construcción
npm run build        # Construye para producción
npm run preview      # Previsualiza la build

# Linting
npm run lint         # Ejecuta ESLint
```

## 🎯 Características Técnicas

### TypeScript
- **Tipado fuerte**: Interfaces definidas para todos los componentes
- **Importaciones de tipos**: Uso de `import type` para optimización
- **Props tipadas**: Validación de tipos en tiempo de compilación

### CSS
- **Animaciones CSS**: Transiciones suaves y efectos visuales
- **Flexbox**: Layout moderno y flexible
- **Variables CSS**: Colores y espaciados consistentes

### React
- **Hooks**: `useState` para manejo de estado
- **Componentes funcionales**: Sintaxis moderna de React
- **Props drilling**: Paso de props de manera eficiente

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio de GitHub
2. Vercel detectará automáticamente que es un proyecto Vite
3. Despliegue automático en cada push

### Netlify
1. Sube tu código a GitHub
2. Conecta con Netlify
3. Configura el directorio de build como `dist`

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Manuel Cano** - [GitHub](https://github.com/manuelcanodw)

---

## 🎉 ¡Gracias por usar este carrusel de cards!

Si te gustó el proyecto, no olvides darle una ⭐ en GitHub.
