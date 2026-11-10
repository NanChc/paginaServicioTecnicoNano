# Nanofix — Sitio Web Institucional

Plataforma web institucional moderna para **Nanofix**, servicio técnico especializado en reparación y mantenimiento de teléfonos celulares y computadoras.

---

## Tecnologías Utilizadas

- **React 19** — Biblioteca para construcción de interfaces basada en componentes funcionales modernos (ES6+).
- **Vite 6** — Herramienta de compilación y servidor de desarrollo ultrarrápido con Hot Module Replacement (HMR).
- **Tailwind CSS v4** — Framework CSS utilitario integrado mediante el plugin oficial `@tailwindcss/vite` con soporte nativo para `@theme`.
- **Lucide React** — Colección de íconos vectoriales modernos y ligeros.
- **HTML5 Semántico** — Marcado estructurado y accesible para navegación fluida y optimización SEO.

---

## Requisitos Previos

- **Node.js**: v18.0.0 o superior (recomendado: Node.js v20 LTS o v22+).
- **npm**: v9.0.0 o superior.

---

## Comandos Disponibles

En el directorio del proyecto, podés ejecutar:

| Comando | Descripción |
|---|---|
| `npm install` | Instala todas las dependencias del proyecto. |
| `npm run dev` | Inicia el servidor de desarrollo local con Vite (por defecto en `http://localhost:5173`). |
| `npm run build` | Compila y optimiza el proyecto para producción en la carpeta `dist/`. |
| `npm run preview` | Previsualiza localmente el build de producción generado. |

---

## Estructura de Carpetas

```text
nanofix/
├── public/                 # Archivos estáticos públicos servidos directamente (favicon, etc.)
├── src/
│   ├── assets/
│   │   └── images/         # Recursos gráficos, logotipos, fotos e ilustraciones del proyecto
│   ├── components/         # Componentes UI reutilizables (Header, Navbar, Footer, Button, etc.)
│   ├── sections/           # Secciones principales de la landing con anclas (#inicio, #servicios, etc.)
│   ├── data/               # Estructuras de datos estáticas (servicios, proceso, valores, FAQs)
│   ├── config/             # Configuración centralizada del negocio (contacto, links, metadatos)
│   ├── utils/              # Funciones utilitarias auxiliares (ej. generador de enlaces de WhatsApp)
│   ├── styles/             # Hojas de estilo globales y directivas de Tailwind CSS
│   ├── App.jsx             # Componente raíz con el ordenamiento semántico de secciones
│   └── main.jsx            # Punto de entrada de React que monta la aplicación en el DOM
├── index.html              # Plantilla HTML5 base con meta tags SEO
├── package.json            # Manifiesto de dependencias y scripts de Node.js
├── vite.config.js          # Configuración de Vite con plugins de React y Tailwind CSS
├── .gitignore              # Patrones de exclusión para control de versiones Git
└── README.md               # Documentación y guía del proyecto
```

### Contenido de cada carpeta en `src/`:
- **`components/`**: Elementos de interfaz modulares e independientes del contenido específico de una sección (ej. botones genéricos, tarjetas reutilizables, barra superior de navegación y pie de página).
- **`sections/`**: Bloques principales de la página vinculados a la navegación por anclas (`#inicio`, `#servicios`, `#nosotros`, `#como-trabajamos`, `#faq`, `#contacto`).
- **`data/`**: Modelos y colecciones de datos listos para alimentar los componentes sin hardcodeo dentro de las vistas (`services.js`, `process.js`, `values.js`, `faq.js`).
- **`config/`**: Archivo `business.js` con las variables globales del negocio (teléfono de WhatsApp, dirección física, email de soporte y redes sociales).
- **`utils/`**: Funciones puras de ayuda, como `buildWhatsAppLink()`, para evitar duplicación de lógica.
- **`styles/`**: Archivo `index.css` que importa Tailwind CSS v4 y define los tokens de diseño y reglas globales de tipografía y scroll.

---

## ¿Qué se debe personalizar para el lanzamiento?

1. **Datos comerciales (`src/config/business.js`)**:
   - `whatsappNumber`: Número telefónico con código internacional (ej. `54911xxxxxxxx`).
   - `email`: Correo electrónico oficial de atención.
   - `address`: Dirección del local o punto de recepción comercial.
   - `defaultMessage`: Mensaje predeterminado de consulta vía WhatsApp.
   - `socialLinks`: Enlaces a perfiles de Instagram, Facebook o LinkedIn.

2. **Colecciones de datos (`src/data/`)**:
   - `services.js`: Listado completo de reparaciones con categoría (`celulares` o `computadoras`).
   - `process.js`: Pasos del flujo de atención (diagnóstico, cotización, reparación, entrega).
   - `values.js`: Diferenciales del servicio (garantía escrita, repuestos originales, rapidez).
   - `faq.js`: Preguntas y respuestas frecuentes de clientes.

3. **Imágenes y recursos visuales (`src/assets/images/` y `public/`)**:
   - Logotipo e isotipo en formato SVG o PNG transparente.
   - Favicon en `public/`.
   - Fotografías del taller, técnicos y equipos para las secciones Hero y Nosotros.

4. **Metadatos y SEO (`index.html`)**:
   - Revisar título, descripción y metaetiquetas Open Graph según la estrategia de comunicación.

# paginaServicioTecnicoNano
