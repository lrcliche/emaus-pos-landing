# EMAUS POS — Landing comercial

Landing page estática en **React + Vite** para EMAUS POS, producto de **Centro de Soluciones / CentrivoSoft**.

La implementación usa únicamente la identidad, capturas y fotografías entregadas para este proyecto. No contiene precios, teléfonos, correos, planes ni características comerciales no suministradas.

## Qué incluye

- React + Vite.
- HTML pre-renderizado durante el build para que el contenido principal exista antes de ejecutar JavaScript.
- Diseño responsive: móvil, tablet y escritorio.
- Imágenes optimizadas a WebP.
- SEO técnico: title, description, canonical, Open Graph, Twitter Card, JSON-LD, sitemap, robots y manifest.
- Accesibilidad básica: navegación semántica, alt text, skip link, foco por teclado y soporte `prefers-reduced-motion`.
- Docker multi-stage con Nginx.
- Healthcheck `/healthz`.
- GitHub Actions para CI, GitHub Pages y publicación de imagen Docker en GHCR.

## Requisitos

- Node.js 22+
- npm 10+
- Docker 24+ (opcional)

## Ejecutar localmente

```bash
npm install --no-audit --no-fund
npm run dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

El resultado queda en `dist/`.

El comando `npm run build` hace tres pasos:

1. genera el bundle SSR temporal;
2. construye los assets de Vite;
3. pre-renderiza React dentro de `dist/index.html` y elimina el bundle SSR temporal.

Esto conserva React en el cliente, pero entrega HTML rastreable desde el primer byte.

## Variables de entorno

Copia `.env.example` como `.env`:

```bash
cp .env.example .env
```

Variables disponibles:

```env
VITE_DEMO_URL=https://centrivosoft.com/
VITE_WHATSAPP_NUMBER=
```

- `VITE_DEMO_URL`: URL real del formulario, agenda o contacto comercial.
- `VITE_WHATSAPP_NUMBER`: opcional. Si queda vacío, el botón de WhatsApp no se renderiza.

No se inventó un número comercial.

## Docker local

### Docker Compose

```bash
docker compose up --build -d
```

Abrir:

```text
http://localhost:8080
```

Comprobar healthcheck:

```bash
curl http://localhost:8080/healthz
```

Detener:

```bash
docker compose down
```

### Docker sin Compose

```bash
docker build -t emaus-pos-web .
docker run --rm -p 8080:80 emaus-pos-web
```

## GitHub Actions

### 1. CI

Archivo: `.github/workflows/ci.yml`

Se ejecuta en `develop`, `main` y pull requests. Instala dependencias y verifica que el build termine correctamente.

### 2. GitHub Pages

Archivo: `.github/workflows/pages.yml`

Se ejecuta al hacer push a `main` o manualmente desde **Actions**.

En el repositorio:

1. ir a **Settings → Pages**;
2. en **Build and deployment**, seleccionar **GitHub Actions**;
3. hacer push a `main`.

El proyecto usa rutas relativas para que los assets funcionen también bajo una ruta de repositorio de GitHub Pages.

> Si la URL pública final no será `https://centrivosoft.com/`, actualiza `canonical`, `og:url`, `og:image`, `twitter:image`, `robots.txt` y `sitemap.xml` antes de publicar.

### 3. Docker en GitHub Container Registry

Archivo: `.github/workflows/docker-ghcr.yml`

Al hacer push a `main` se publica la imagen en:

```text
ghcr.io/<owner>/<repository>:latest
```

También genera tags por commit y por tag Git.

## Deploy en un VPS con Docker

Ejemplo después de publicar la imagen en GHCR:

```bash
docker pull ghcr.io/OWNER/REPO:latest
docker stop emaus-pos-web || true
docker rm emaus-pos-web || true
docker run -d \
  --name emaus-pos-web \
  --restart unless-stopped \
  -p 8080:80 \
  ghcr.io/OWNER/REPO:latest
```

Luego el Nginx frontal del VPS puede hacer proxy a `127.0.0.1:8080`.

## SEO

Los archivos principales son:

- `index.html`: metadata principal y JSON-LD.
- `public/robots.txt`.
- `public/sitemap.xml`.
- `public/site.webmanifest`.
- `scripts/prerender.mjs`: genera HTML estático con el contenido de React.

### Antes de producción

Confirma el dominio final. Si EMAUS POS se publicará, por ejemplo, en un subdominio distinto de `centrivosoft.com`, reemplaza las URLs absolutas usadas por canonical, sitemap y Open Graph.

Un puntaje Lighthouse de 100 no se puede prometer de forma seria sin medir la URL ya desplegada, porque depende también del servidor, compresión, CDN, TLS, caché y condiciones de red. El proyecto queda preparado para buscar puntajes altos y evitar los errores SEO habituales.

## Estructura

```text
.
├── .github/workflows/
│   ├── ci.yml
│   ├── docker-ghcr.yml
│   └── pages.yml
├── nginx/default.conf
├── public/
│   ├── images/
│   ├── favicon.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── scripts/prerender.mjs
├── src/
│   ├── App.jsx
│   ├── entry-client.jsx
│   ├── entry-server.jsx
│   └── styles.css
├── Dockerfile
├── docker-compose.yml
├── index.html
├── package.json
└── vite.config.js
```

## Identidad y contenido

Marca usada: **EMAUS POS**  
Proveedor: **Centro de Soluciones**  
Sitio de referencia: **centrivosoft.com**

Texto principal: **Ventas, facturación, control e inventario**.
