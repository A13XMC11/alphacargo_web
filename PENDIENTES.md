# AlphaCargo — Pendientes de lanzamiento

## 🔴 Esta semana (bloqueantes)

- [ ] **Variables de entorno en Vercel**
  - `RESEND_API_KEY` → resend.com (gratis, 3k emails/mes)
  - `CONTACT_EMAIL` → email donde llegan los formularios
  - `NEXT_PUBLIC_WHATSAPP_NUMBER` → ej: 593999999999
  - `NEXT_PUBLIC_SITE_URL` → https://alphacargo-ec.com
  - Después de agregarlas: `vercel --prod` para redeployar

- [ ] **Crear og.png y logo.png** (sin esto los shares en redes salen sin imagen)
  - `public/og.png` → 1200×630px: fondo #080D1A + logo + "MOVEMOS EL MUNDO"
  - `public/logo.png` → 200×60px, fondo transparente
  - Herramienta: Canva o Figma

- [ ] **Conectar dominio alphacargo-ec.com**
  - Vercel Dashboard → Settings → Domains → agregar alphacargo-ec.com
  - Configurar DNS en el registrador apuntando a Vercel

## 🟠 Próximas 2 semanas

- [ ] **Reemplazar fotos placeholder con fotos reales**
  - Cuando lleguen de post-producción: subir a `public/images/` y hacer git push
  - Vercel redeploya automáticamente en ~30 segundos

- [ ] **Registrar en Google Search Console**
  - search.google.com/search-console
  - Subir sitemap: https://alphacargo-ec.com/sitemap.xml

- [ ] **Probar formulario de contacto**
  - Llenar formulario en /contacto y verificar que llega el email
  - Requiere RESEND_API_KEY configurado

- [ ] **Agregar número SENAE** en página de Agenciamiento Aduanero y en footer
  - Mejora E-E-A-T (señal de confianza para Google)

## 🟡 Mes 1 (crecimiento SEO)

- [ ] **Google Analytics**
  - Agregar `NEXT_PUBLIC_GA_ID` en variables de entorno de Vercel

- [ ] **Publicar blog post: "Cómo importar desde Estados Unidos a Ecuador"**
  - Crear `src/content/blog/importar-desde-estados-unidos.mdx`
  - Keyword de alta prioridad según audit SEO

- [ ] **Publicar blog post: "Agencia de carga en Guayaquil"**
  - Crear `src/content/blog/agencia-de-carga-guayaquil.mdx`
  - Local landing page para búsquedas geolocalizadas

- [ ] **Agregar reseñas de Google** via widget embebido en homepage
  - Refuerza señales de confianza para SEO

- [ ] **Añadir autor con bio en posts del blog**
  - Nombre real + cargo en AlphaCargo
  - Requerido para E-E-A-T en contenido de importaciones

## ✅ Completado

- [x] 20 páginas construidas y deployadas
- [x] SEO técnico: sitemap, robots.txt, canonical, OG tags, JSON-LD schemas
- [x] Fix H1 "MOVEMOSELMUNDO" → aria-label correcto
- [x] Meta descriptions extendidas (homepage + 9 servicios)
- [x] FAQPage schema (20 preguntas para rich snippets)
- [x] BlogPosting schema (3 posts)
- [x] LocalBusiness schema en layout global
- [x] Deploy en Vercel: https://alphacargo.vercel.app
- [x] GitHub: https://github.com/A13XMC11/alphacargo_web
