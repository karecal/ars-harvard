# 🎨 Ars Harvard

**Ars Harvard** es una aplicación web desarrollada con React que permite explorar la colección del **Harvard Art Museums** a través de su API oficial.  
Los usuarios pueden buscar, filtrar y visualizar obras de arte, acceder a sus detalles y navegar por una interfaz moderna, accesible y responsive.

---

## 🚀 Demo

[Ver Demo en Vercel](https://ars-harvard.vercel.app/)

---

## 🧠 Objetivo del proyecto

Construir una **Single Page Application (SPA)** utilizando React, aplicando buenas prácticas de desarrollo frontend y consumo de APIs externas.

El proyecto demuestra competencias en:

- React + Vite
- Context API
- React Router
- Consumo de APIs REST
- Testing con Vitest + React Testing Library
- Diseño responsive y UX/UI

---

## 🧩 Funcionalidades

### 🔎 Búsqueda y filtrado

- Búsqueda por título o autor
- Filtros por:
  - Clasificación
  - Cultura
  - Departamento
  - Fecha
  - Imágenes disponibles
- Ordenación ascendente y descendente
- Debounce en búsquedas para optimizar rendimiento

### 📄 Páginas

- Home (listado de obras)
- Artwork Detail (detalle de obra)
- Login
- Contact
- FAQ
- About
- Team
- Newsletter
- Not Found (404)

### 🎨 UX/UI

- Diseño responsive
- Navbar fija con reloj en tiempo real
- Skeleton loaders / spinner de carga
- ScrollToTop automático
- Modal de interacción
- Navegación fluida

---

## 🧱 Arquitectura del proyecto

```
ars-harvard/
├── public/
│ ├── favicon.svg
│ └── icons.svg
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── ArtworkCard/
│ │ ├── Footer/
│ │ ├── LoadingSpinner/
│ │ ├── Modal/
│ │ ├── Navbar/
│ │ ├── ScrollToTop/
│ │ └── SearchBar/
│ ├── context/
│ │ └── ArtContext.jsx
│ ├── hooks/
│ │ ├── useArtworks.js
│ │ ├── useClock.js
│ │ └── useDebounce.js
│ ├── pages/
│ │ ├── AboutPage/
│ │ ├── ArtworkDetailPage/
│ │ ├── ContactPage/
│ │ ├── FaqPage/
│ │ ├── HomePage/
│ │ ├── LoginPage/
│ │ ├── NewsletterPage/
│ │ ├── NotFoundPage/
│ │ └── TeamPage/
│ ├── tests/
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## 🛠 Tecnologías utilizadas

- React 18
- Vite
- React Router DOM
- Context API
- CSS Modules
- Fetch API
- Vitest
- React Testing Library
- [Harvard Art Museums API](https://api.harvardartmuseums.org/)

---

## 🔌 API

Se utiliza la **API oficial de Harvard Art Museums**:

- Endpoint principal: `/object`
- Requiere API Key
- Variables de entorno gestionadas con `.env`

---

## 🧪 Testing y rendimiento

Se incluyen pruebas de componentes con **Vitest** y **React Testing Library**:

- `ArtworkCard`
- `SearchBar`

Optimización de rendimiento:

- Debounce en búsqueda
- Búsqueda lanzada al pulsar Enter para optimizar rendimiento
- Minimiza llamadas innecesarias a la API
- Memoización con `useMemo` para evitar renders innecesarios

---

## 📦 Instalación y ejecución

```bash
npm install
npm run dev
npm run test
npm run build
```

## ⏱️ Tiempos de desarrollo

A continuación se muestra una estimación del tiempo planificado frente al tiempo real invertido en cada parte del proyecto.

### 🧱 Estructura base del proyecto

- **Estimado:** 3h
- **Real:** 4h
- Creación del proyecto con Vite, configuración inicial, estructura de carpetas y primeras dependencias.

---

### 🧭 Navegación (React Router + páginas)

- **Estimado:** 6h
- **Real:** 8h
- Configuración de rutas y creación de páginas principales (Home, Detail, Login, FAQ, About, etc.).

---

### 🎨 Layout y componentes UI

- **Estimado:** 10h
- **Real:** 14h
- Desarrollo de componentes como Navbar, Footer, ArtworkCard, Modal, LoadingSpinner y diseño general.

---

### 🔎 Búsqueda y filtros (SearchBar + lógica)

- **Estimado:** 8h
- **Real:** 12h
- Implementación de búsqueda, filtros por categoría, cultura, departamento, ordenación y control de estado.

---

### 🌐 Consumo de API (Harvard Art Museums)

- **Estimado:** 6h
- **Real:** 7h
- Integración de la API, gestión de datos, paginación y manejo de errores.

---

### ⚡ Optimización (debounce + useMemo)

- **Estimado:** 3h
- **Real:** 4h
- Implementación de debounce para búsquedas y optimización de renders con useMemo.

---

### 🧪 Testing

- **Estimado:** 4h
- **Real:** 5h
- Configuración de Vitest y React Testing Library, creación de tests para ArtworkCard y SearchBar.

---

### 🎨 Responsive y ajustes finales

- **Estimado:** 4h
- **Real:** 6h
- Ajustes de diseño responsive, corrección de bugs visuales y mejoras de UX.

---

### 📌 Total

- **Tiempo estimado total:** ~44h
- **Tiempo real total:** ~60h (5 días de trabajo)

## 🤖 Uso de Inteligencia Artificial

Durante el desarrollo de este proyecto se utilizó **Claude (Anthropic)** y **ChatGPT** como asistentes de desarrollo. Su uso incluyó:

- Guía paso a paso en la configuración inicial del proyecto
- Resolución de errores y debugging
- Sugerencias de estructura y arquitectura
- Generación de componentes y estilos CSS
- Configuración del entorno de testing

---

## 👩‍💻 Autoría

Proyecto desarrollado como práctica del módulo de React en Full Stack Developer Bootcamp.

---
