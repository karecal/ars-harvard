# ⚠️ NO MODIFICAR ESTE ARCHIVO

---

# spec.md

## Resumen del proyecto

**Ars Harvard** es una aplicación web desarrollada en React que permite explorar la colección pública del Harvard Art Museums a través de su API oficial. Los usuarios pueden buscar, filtrar y visualizar obras de arte, acceder a sus detalles y navegar por una interfaz moderna, responsive y accesible.

La aplicación está orientada a ofrecer una experiencia inmersiva de exploración artística, combinando funcionalidad, rendimiento y diseño elegante.

---

## Finalidad del proyecto

El objetivo principal del proyecto es construir una Single Page Application (SPA) utilizando React, aplicando buenas prácticas de desarrollo frontend y consumo de APIs externas.

Este proyecto demuestra competencias en:

- Desarrollo con React y Vite.
- Gestión de estado mediante Context API.
- Enrutado con React Router.
- Consumo de APIs REST.
- Testing con Vitest y React Testing Library.
- Diseño responsive y experiencia de usuario.

---

## Requisitos técnicos

- React 19
- Vite
- React Router DOM
- Context API
- CSS Modules
- Fetch API
- Vitest
- React Testing Library
- Harvard Art Museums API
- Deploy en Vercel

---

## Funcionalidades implementadas

### Navegación

- Página principal con listado paginado.
- Página de detalle individual de cada obra.
- Página de favoritos.
- Página de login y registro.
- Páginas informativas adicionales.

### Búsqueda y filtrado

- Búsqueda por título o autor.
- Ejecución de búsqueda mediante tecla Enter.
- Filtrado por:
  - Clasificación
  - Cultura
  - Departamento
  - Fecha
  - Disponibilidad de imagen
- Ordenación cronológica ascendente y descendente.

### Experiencia de usuario

- Diseño responsive.
- Skeleton loaders.
- Gestión de errores.
- Estados de carga.
- Navegación fluida sin recargas.

---

## Arquitectura del proyecto

## Arquitectura del proyecto

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
```

---

## UI/UX planteados

La interfaz sigue una línea visual inspirada en museos y catálogos artísticos:

- Estética minimalista y elegante.
- Tipografía serif para reforzar el carácter cultural.
- Uso predominante de blanco, negro y grises.
- Navegación intuitiva.
- Diseño adaptativo para escritorio, tablet y móvil.
- Interacciones suaves y accesibles.

---

## Gestión del estado

La aplicación utiliza Context API para centralizar:

- Obras obtenidas desde la API.
- Filtros activos.
- Paginación.
- Estado de carga y errores.
- Favoritos del usuario.

---

## Integración con API

Se utiliza la API oficial de Harvard Art Museums:

- Endpoint principal: /object
- Autenticación mediante API Key.
- Variables de entorno gestionadas con Vite.

---

## Testing

Se han implementado pruebas unitarias con:

- Vitest
- React Testing Library

Cobertura actual:

- Componente ArtworkCard.
- Componente SearchBar.

---

## Rendimiento

- Optimización de búsquedas mediante debounce y Enter.
- Minimización de peticiones innecesarias.
- Memoización con useMemo.

---

## Deploy

La aplicación está desplegada en Vercel y conectada al repositorio de GitHub.

---

## Autoría

Proyecto desarrollado como práctica del módulo de React del bootcamp Full Stack Developer.
