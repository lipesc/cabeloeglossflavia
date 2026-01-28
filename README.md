# Landing Page — Flavia Nolasco

Landing page mobile-first para Flavia Nolasco no Salão Martakblo.

Tudo fica em `src/content/siteContent.ts`:
  Textos, links e fotos
  Serviços oferecidos
  Depoimentos de clientes
  FAQ

## Deploy

GitHub Actions

## Arquitetura

**Stack:**
  Next.js 16 App Router + SSG
  TypeScript strict mode
  Tailwind CSS com design tokens customizados
  React 18
  PWA next pwa

**Estrutura:**
```
src/
├── app/          → Páginas App Router
├── components/   → react
├── content/      → siteContent.ts fonte única de verdade
└── lib/          → Utilidades GTM, paths, UTM tracking
```

**Padrões:**
  Server Components por padrão, Client Components quando necessário
  Conteúdo centralizado em `siteContent.ts` sem hardcode
  Path aliases: `@/` aponta para `src/`
  Event tracking via `pushDataLayer()` Google Tag Manager
  Schema.org JSON LD automático BeautySalon + Service

**Monitoramento:**
  Sentry errors + performance
  Google Tag Manager event tracking
  Vercel Analytics Web Vitals

**Features:**
  Instalável como app PWA
  Funciona offline
  Responsiva mobile first
  SEO otimizado sitemap, OG, schema
  Suporta Vercel dinâmica e GitHub Pages estática
