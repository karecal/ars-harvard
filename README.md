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

---

## ⏱️ Tiempos de desarrollo

A continuación se muestra una estimación del tiempo planificado frente al tiempo real invertido en cada parte del proyecto, distribuido a lo largo de cinco jornadas de trabajo.

### 📅 Día 1 — Configuración inicial y arquitectura

- **Estructura base del proyecto**
  - Estimado: 2h
  - Real: 2h

- **Configuración inicial (Vite, dependencias, ESLint, variables de entorno)**
  - Estimado: 2h
  - Real: 2h

- **Arquitectura de carpetas y componentes base**
  - Estimado: 2h
  - Real: 2h

**Total Día 1:** 6h

---

### 📅 Día 2 — Navegación y páginas

- **Configuración de React Router**
  - Estimado: 2h
  - Real: 2h

- **Creación de páginas principales**
  - Estimado: 3h
  - Real: 3h

- **Página 404 y ScrollToTop**
  - Estimado: 1h
  - Real: 1h

**Total Día 2:** 6h

---

### 📅 Día 3 — Componentes UI y diseño

- **Navbar y Footer**
  - Estimado: 2h
  - Real: 2h

- **ArtworkCard y listado de obras**
  - Estimado: 3h
  - Real: 3h

- **LoadingSpinner y Modal**
  - Estimado: 1h
  - Real: 1h

**Total Día 3:** 6h

---

### 📅 Día 4 — API, búsqueda y filtros

- **Integración con Harvard Art Museums API**
  - Estimado: 2h
  - Real: 2h

- **SearchBar y búsqueda por Enter**
  - Estimado: 2h
  - Real: 2h

- **Filtros, ordenación y paginación**
  - Estimado: 2h
  - Real: 2h

**Total Día 4:** 6h

---

### 📅 Día 5 — Testing, responsive y despliegue

- **Testing con Vitest y React Testing Library**
  - Estimado: 2h
  - Real: 2h

- **Responsive y ajustes finales**
  - Estimado: 3h
  - Real: 3h

- **Deploy en Vercel y documentación**
  - Estimado: 1h
  - Real: 1h

**Total Día 5:** 6h

---

### 📌 Resumen total

- **Tiempo estimado total:** 30h
- **Tiempo real total:** 30h
- **Duración del desarrollo:** 5 días (6 horas diarias)

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
