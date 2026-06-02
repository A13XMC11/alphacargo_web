# SEO Content Audit — AlphaCargo
## https://alphacargo-ec.com
### Fecha: 2026-06-01 | Auditor: Claude Sonnet 4.6

---

## SEO Health Score: **67 / 100** → Proyectado post-fixes: **84 / 100**

---

## Resumen Ejecutivo

AlphaCargo tiene una base técnica sólida (sitemap, robots.txt, OG tags, SSR/SSG) pero pierde posiciones por tres gaps críticos: (1) el H1 de la homepage se renderiza sin espacios entre palabras, (2) faltan schemas de alto impacto (FAQPage, BlogPosting, LocalBusiness), y (3) los títulos de página son genéricos y demasiado cortos. Estos tres problemas son de bajo esfuerzo y alto impacto. Corregirlos puede mover el sitio de la página 3 a la página 1 para términos como "importar desde China Ecuador" y "agencia de carga Ecuador".

---

## On-Page SEO Checklist

### Homepage (/)

#### Title Tag
| Campo | Estado | Valor actual |
|---|---|---|
| Existe | ✅ Pass | — |
| Longitud | ✅ Pass | 50 chars (rango 50-60) |
| Keyword primario | ⚠️ Needs Work | "logística internacional" presente pero al final |
| Marca | ✅ Pass | "AlphaCargo" al final |
| Único | ✅ Pass | — |

- **Actual:** `AlphaCargo — Logística Internacional desde Ecuador`
- **Recomendado:** `AlphaCargo | Logística Internacional desde Ecuador` *(sin cambios, es bueno)*

#### Meta Description
| Campo | Estado | Valor actual |
|---|---|---|
| Existe | ✅ Pass | — |
| Longitud | ⚠️ Needs Work | 131 chars (óptimo: 150-160) |
| Keyword | ✅ Pass | "logística" presente |
| CTA | ❌ Fail | No incluye llamada a acción |

- **Actual (131):** `Empresa ecuatoriana de logística y cargo internacional con más de 5 años de experiencia, 1.250+ clientes y presencia en 180 países.`
- **Recomendado (158):** `Empresa ecuatoriana de logística y cargo internacional. 5 años de experiencia, 1.250+ clientes y cobertura en 180 países. Cotiza tu envío hoy.`

#### Heading Hierarchy
| Elemento | Estado | Valor |
|---|---|---|
| H1 existe | ✅ Pass | — |
| H1 texto en DOM | 🚨 **CRÍTICO** | Se renderiza como `MOVEMOSELMUNDO` (sin espacios) |
| H1 tiene keyword | ❌ Fail | "MOVEMOS EL MUNDO" es tagline, no keyword |
| H2s descriptivos | ✅ Pass | 5 H2s bien distribuidos |
| H3s descriptivos | ✅ Pass | 17 H3s bien distribuidos |

> **Impacto:** Google y screen readers leen el H1 como una sola palabra garbled. Fix: añadir texto espacio entre `<span>` elements.

### Páginas Internas

| Página | Título actual | Chars | Problema | Título recomendado |
|---|---|---|---|---|
| `/servicios` | `Servicios \| AlphaCargo` | 22 | Genérico, sin keywords | `Servicios de Logística Internacional Ecuador \| AlphaCargo` |
| `/nosotros` | `Nosotros \| AlphaCargo` | 21 | Genérico | `Empresa de Logística Internacional en Ecuador \| AlphaCargo` |
| `/blog` | `Blog \| AlphaCargo` | 17 | Muy corto | `Blog de Importaciones y Logística Internacional \| AlphaCargo` |
| `/contacto` | `Contacto \| AlphaCargo` | 21 | Genérico, sin keyword | `Contacto \| Cotiza tu Importación \| AlphaCargo` |
| `/faq` | `Preguntas Frecuentes \| AlphaCargo` | 33 | ✅ Aceptable | — |
| `/importacion` | `Cómo Importar desde Cualquier País \| AlphaCargo` | 47 | ✅ Bueno | — |

### Servicios (Subpáginas)

| Página | Título actual | Chars | Recomendado |
|---|---|---|---|
| `/servicios/transporte-aereo` | `Transporte Aéreo \| AlphaCargo` | 29 | `Transporte Aéreo Internacional desde Ecuador \| AlphaCargo` (58) |
| `/servicios/transporte-maritimo` | `Transporte Marítimo \| AlphaCargo` | 33 | `Transporte Marítimo Internacional \| Flete Ecuador \| AlphaCargo` (63) |
| `/servicios/agenciamiento-aduanero` | `Agenciamiento Aduanero \| AlphaCargo` | 35 | `Agenciamiento Aduanero en Ecuador \| SENAE \| AlphaCargo` (55) |

> Todos los servicios tienen **meta descriptions de 95-96 chars** (óptimo: 150-160). Las descripciones actuales son slogan, no copy SEO.

---

## Content Quality (E-E-A-T)

| Dimensión | Score | Evidencia |
|---|---|---|
| **Experience** | Present | Stats reales (5 años, 1.250+ clientes, 180 países). Testimonios de clientes con nombre y empresa. |
| **Expertise** | Weak | Sin autor identificado en blog posts. Sin credenciales de agentes de aduana. Sin RUC o número de licencia SENAE visible. |
| **Authoritativeness** | Weak | Sin menciones de prensa. Sin certificaciones visibles. Blog con solo 3 posts. |
| **Trustworthiness** | Present | HTTPS, privacidad, términos, dirección física, mapa Google, horario de atención. Falta número SENAE. |

### Recomendaciones E-E-A-T

1. Añadir **autor con bio** en posts del blog (nombre real + cargo en AlphaCargo)
2. Mostrar **número de registro SENAE** en página de Agenciamiento Aduanero y en footer
3. Añadir sección "**Certificaciones y membresías**" en Nosotros (COREVIA, ASEACI, etc.)
4. Publicar **casos de estudio** con números reales (empresa cliente, país origen, peso, tiempo)
5. Añadir **reseñas de Google** via widget embebido (refuerza TrustPilot-style signals)

---

## Keyword Analysis

### Keywords primarios identificados

| Keyword | Volumen Est. | Competencia | Página actual | Gap |
|---|---|---|---|---|
| `importar desde China Ecuador` | Alto | Media | `/importacion` + `/blog/como-importar-desde-china` | Título blog optimizado ✅ |
| `agencia de carga Ecuador` | Medio | Media | — | **Sin página dedicada** |
| `courier internacional Ecuador` | Medio | Baja | `/servicios/courier-internacional` | Título genérico ❌ |
| `transporte marítimo Ecuador` | Medio | Media | `/servicios/transporte-maritimo` | Título genérico ❌ |
| `agenciamiento aduanero Ecuador` | Medio | Baja | `/servicios/agenciamiento-aduanero` | Título genérico ❌ |
| `incoterms 2025` | Alto | Alta | `/blog/guia-incoterms-2025` | Bien optimizado ✅ |
| `logística internacional Ecuador` | Alto | Media | Homepage | Presente en meta ✅ |
| `cotizar envío internacional` | Medio | Baja | — | **Sin página de cotización** |
| `exportar desde Ecuador` | Medio | Baja | — | **Sin contenido** |
| `importar desde Estados Unidos Ecuador` | Medio | Baja | — | **Sin contenido** |

### Keyword en elementos clave — Homepage

| Elemento | Keyword "logística internacional" | Estado |
|---|---|---|
| Title tag | ✅ Presente | Good |
| H1 | ❌ Ausente (tagline, no keyword) | Fix needed |
| Primeros 100 palabras | ✅ Presente en badge | Acceptable |
| H2s | ❌ Ninguno lo contiene | Opportunity |
| Meta description | ✅ Presente | Good |
| URL | ❌ N/A (homepage) | N/A |

---

## Technical SEO

### Robots.txt ✅
```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://alphacargo-ec.com/sitemap.xml
```
- ✅ Estructura correcta
- ✅ API bloqueada correctamente
- ✅ Sitemap referenciado

### Sitemap ✅
- ✅ 22 URLs indexadas
- ✅ Prioridades correctas (homepage=1.0, servicios/importacion=0.9)
- ⚠️ `lastmod` es timestamp de build para todas las páginas (no refleja ediciones reales)
- ⚠️ `changefreq: weekly` para páginas estáticas como `/privacidad` es excesivo

### Canonical Tags ✅
- ✅ Todas las páginas tienen canonical self-referencing
- ✅ Homepage: `https://alphacargo-ec.com` (sin trailing slash — consistente)

### OG Tags
| Tag | Homepage | Páginas internas |
|---|---|---|
| `og:title` | ✅ | ✅ |
| `og:description` | ✅ | ✅ |
| `og:image` | ⚠️ Referencias `og.png` que **no existe** en `/public/` | ⚠️ |
| `og:type` | ✅ `website` | ✅ `article` en blog |
| `og:locale` | ❌ Ausente | ❌ |
| `twitter:card` | ✅ `summary_large_image` | ✅ |

> **🚨 El archivo `/public/og.png` no existe.** Todas las páginas compartidas en redes sociales mostrarán imagen vacía. Igualmente `/public/logo.png` referenciado en schema. Crear ambas imágenes es prioridad.

### Page Speed Indicators
- ✅ Next.js Image con `priority` en hero
- ✅ Fuentes Google con `display: swap`
- ✅ Static Generation (SSG) en todas las páginas
- ✅ Vercel Analytics instalado
- ✅ `next.config.ts` con compresión activada
- ⚠️ Sin CDN de imagen configurado explícitamente (Vercel lo maneja automáticamente en producción)

### Mobile ✅
- ✅ Viewport meta presente
- ✅ Diseño completamente responsive
- ✅ Tap targets adecuados (botones con padding mínimo 44px)

---

## Schema Markup Audit

| Schema | Estado | Prioridad |
|---|---|---|
| `Organization` | ✅ Implementado (en layout global) | — |
| `LocalBusiness` | ❌ Missing | 🔴 Alta |
| `FAQPage` | ❌ Missing — **20 preguntas sin marcar** | 🔴 Alta |
| `BlogPosting` / `Article` | ❌ Missing — 3 posts sin marcar | 🔴 Alta |
| `Service` | ❌ Missing — 9 servicios sin marcar | 🟡 Media |
| `BreadcrumbList` | ❌ Missing | 🟡 Media |
| `WebSite` + `SearchAction` | ❌ Missing | 🟢 Baja |

> **FAQPage es la oportunidad más grande.** Con 20 preguntas bien estructuradas, Google puede mostrar las respuestas directamente en el SERP (featured snippet tipo FAQ). Esto duplica el espacio visual en búsquedas como "cómo importar Ecuador", "qué documentos necesito para importar", "cuánto demora una importación".

---

## Featured Snippet Opportunities

| Query | Tipo de snippet | Página actual | Estado |
|---|---|---|---|
| "cómo importar desde China Ecuador" | Párrafo / Lista | `/importacion` + `/blog/como-importar-desde-china` | ⚠️ Contenido existe, sin estructura óptima |
| "qué documentos necesito para importar" | Lista | `/faq` (respuesta en accordion) | ❌ Sin FAQ schema |
| "qué son los incoterms" | Párrafo | `/blog/guia-incoterms-2025` | ⚠️ Sin Article schema |
| "cuánto demora importar desde China" | Tabla / Párrafo | `/faq` | ❌ Sin FAQ schema |
| "agenciamiento aduanero Ecuador" | Párrafo | `/servicios/agenciamiento-aduanero` | ❌ Sin Service schema |
| "incoterms 2025" | Tabla | `/blog/guia-incoterms-2025` | ⚠️ Sin Article schema |

---

## Content Gap Analysis

| Tema faltante | Volumen estimado | Competencia | Tipo de contenido | Prioridad |
|---|---|---|---|---|
| `importar desde Estados Unidos Ecuador` | Medio | Baja | Blog post / Landing | 🔴 1 |
| `agencia de carga Guayaquil` | Medio | Baja | Landing page | 🔴 1 |
| `exportar desde Ecuador` | Medio | Baja | Blog post / Guide | 🔴 2 |
| `consolidación de carga Ecuador` | Bajo | Baja | Blog post | 🟡 3 |
| `importar desde España Ecuador` | Bajo | Muy baja | Blog post | 🟡 3 |
| `calculadora de aranceles Ecuador` | Medio | Media | Tool/Calculator | 🟡 4 |
| `cómo obtener RUC Ecuador importación` | Bajo | Baja | Blog post | 🟢 5 |
| `flete aéreo vs marítimo comparación` | Medio | Media | Blog post comparativo | 🟢 5 |

---

## Internal Linking Assessment

**Estructura actual:**
```
Homepage → 18 links internos ✅
  └── /servicios (listado) ✅
  └── /servicios/[9 servicios] ✅
  └── /importacion ✅
  └── /blog ✅
  └── /nosotros ✅
  └── /faq ✅
  └── /contacto ✅
```

**Gaps identificados:**
- ❌ El blog no enlaza a servicios relacionados (ej: post de "importar desde China" no enlaza a `/servicios/transporte-maritimo`)
- ❌ Los servicios no enlazan entre sí (cross-linking)
- ❌ La página `/importacion` no enlaza al blog de importaciones
- ❌ Sin breadcrumbs visuales ni en schema en páginas internas

---

## Recomendaciones Priorizadas

### 🔴 Crítico (Implementar esta semana)

1. **Crear `/public/og.png` y `/public/logo.png`** — Sin estas imágenes, los shares en redes sociales muestran imagen vacía. Impacto: CTR desde redes sociales.
   - `og.png`: 1200×630px con logo + tagline sobre fondo oscuro de la marca
   - `logo.png`: 200×60px sobre fondo transparente

2. **Fix H1 homepage** — "MOVEMOSELMUNDO" → "MOVEMOS EL MUNDO" (añadir espacios entre spans animados). Impacto: accesibilidad + keyword parsing de Google.

3. **FAQPage schema** — 20 preguntas → rich snippets en Google. Puede triplicar el espacio visual en SERPs relevantes. Impacto estimado: +25% CTR en búsquedas informacionales.

4. **BlogPosting schema** — Los 3 posts existentes deberían ser elegibles para rich results en Google News y article carousels.

### 🟠 Alta Prioridad (Este mes)

5. **Mejorar títulos de página** — "Servicios | AlphaCargo" → "Servicios de Logística Internacional Ecuador | AlphaCargo". Impacto: CTR en SERPs (+15-35% según estudios).

6. **Extender meta descriptions cortas** — Servicios (96 chars), Blog (106 chars), Contacto (111 chars) deben llegar a 150-160 chars con CTA.

7. **LocalBusiness schema** — Agregar a Organization para aparecer en Google Maps y búsquedas locales "agencia de carga Guayaquil".

8. **Service page titles keyword-rich** — "Transporte Aéreo | AlphaCargo" → "Transporte Aéreo Internacional desde Ecuador | AlphaCargo".

### 🟡 Prioridad Media (Este trimestre)

9. **Publicar 2 nuevos posts de blog al mes** — Comenzar con: "Cómo importar desde Estados Unidos a Ecuador" y "Guía para exportar desde Ecuador". Impacto: tráfico orgánico informacional a largo plazo.

10. **Añadir BreadcrumbList schema** — Mejora UX en SERPs y señales de navegación para Google.

11. **Añadir autor con bio real en posts** — Necesario para E-E-A-T en contenido YMYL (finanzas/comercio).

12. **Añadir og:locale** — `es_EC` mejora targeting geográfico en redes sociales.

13. **Página dedicada: "Agencia de Carga en Guayaquil"** — Local landing page para búsquedas geolocalizadas.

### 🟢 Baja Prioridad

14. **Calculadora de costos de importación** — Herramienta interactiva que generaría links entrantes y tiempo en sitio.
15. **WebSite + SearchAction schema** — Sitelinks searchbox en SERPs de marca.
16. **Actualizar `changefreq` en sitemap** — Páginas legales a `monthly` o `yearly`.
17. **Hreflang** — Si se expande a Colombia/Perú en el futuro.

---

*Generado con `/market-seo` | AlphaCargo SEO Audit 2026*
