# Landing Page — Salão X

Projeto Next.js (App Router) com TypeScript e Tailwind para uma landing page single-scroll focada em conversão mobile-first.

## Requisitos
- Node.js 18.17+ (recomendado Node 20 LTS)
- npm 9+

## Como rodar (Linux)
```bash
npm install
npm run dev
```
Abra `http://localhost:3000`.

## Estrutura principal
- `src/app/page.tsx`: página única `/`
- `src/content/siteContent.ts`: conteúdo editável (textos, links e dados)
- `src/components/*`: componentes da landing page
- `public/gallery`: imagens do “Antes e Depois”
- `public/og/og-image.png`: imagem Open Graph
- `public/manifest.webmanifest` + `public/icons`: PWA

## Conteúdo e imagens
1. Edite os textos em `src/content/siteContent.ts`.
2. Coloque as fotos em `public/gallery` (6–12 imagens recomendadas).
3. Atualize os paths no array `beforeAfter.photos`.
4. Substitua `public/og/og-image.png` pela sua imagem (1200x630 recomendado).

## Variáveis de ambiente
Crie um `.env.local` com base em `.env.example`:
- `NEXT_PUBLIC_GTM_ID`: ID do Google Tag Manager (opcional).
- `NEXT_PUBLIC_SITE_URL`: URL final do site (ex: `https://seusite.com`).

## Tracking
Eventos enviados para `dataLayer`:
- `click_whatsapp`
- `click_instagram`
- `click_calendly`

UTMs (`utm_*`, `gclid`, `fbclid`, `ttclid`) são preservadas nos links externos.

## PWA
- Manifest e ícones prontos em `public/`.
- Service worker gerado pelo `next-pwa` no build.
- Banner discreto de instalação aparece após alguns segundos.

## Build / Deploy
```bash
npm run build
npm run start
```

Checklist rápido:
- [ ] Ajustar `siteContent.brand` com nome/bairro/cidade reais
- [ ] Atualizar URLs de Instagram, WhatsApp e Calendly
- [ ] Substituir imagens em `public/gallery`
- [ ] Revisar Google Maps embed em `siteContent.location.googleMapsEmbedUrl`
- [ ] Atualizar `NEXT_PUBLIC_SITE_URL`
- [ ] Substituir `public/og/og-image.png` e `public/icons`
