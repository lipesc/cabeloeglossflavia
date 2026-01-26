# Landing Page — Flavia Nolasco

Projeto Next.js 16 (App Router) com TypeScript, Tailwind CSS e Sentry para uma landing page single-scroll focada em conversão mobile-first. Landing page da Flavia Nolasco, especialista em cabelo e maquiagem para eventos no Salão Martakblo.


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

```dotenv
# Google Ta e Monitoramento

### Google Tag Manager (GTM)
Eventos enviados para `dataLayer`:
- `click_whatsapp`: Clique no link do WhatsApp
- `click_instagram`: Clique no perfil do Instagram
- `click_calendly`: Clique para agendar

UTMs (`utm_*`, `gclid`, `fbclid`, `ttclid`) são preservadas automaticamente nos links externos.

### Sentry (Error Tracking & Performance Monitoring)
- Integração automática em produção
- Monitora erros de frontend e backend
- Coleta dados de performance (Web Vitals)
- Source maps carregados automaticamente via CI/CD
NEXT_PUBLIC_ENABLE_PWA=true

# Sentry - apenas no CI/CD (GitHub Actions)
SENTRY_AUTH_TOKEN=<seu-token-aqui>
SENTRY_ORG=lipesc-corp
SENTRY_PROJECT=javascript-nextjs
```

**Notas importantes:**
- `SENTRY_AUTH_TOKEN` só é necessário no CI/CD (GitHub Actions) para upload de source maps
- Em desenvolvimento local, o Sentry funcionará sem o token (apenas logs locais)

## Tracking
Eventos enviados para `dataLayer`:
- `click_whatsapp`
- `click_instagram`
- `click_calendly`


### Local
```bash
npm run build
npm run start
```

### Build estático (para GitHub Pages)
```bash
npm run build:static
```

### Deployment automático (GitHub Actions)
- Push para `main` ativa o workflow automaticamente
- Build com Node.js 22
- Deploy para GitHub Pages
- Sentry source maps enviados automaticamente

## Checklist de Configuração

✅ **Já configurado:**
- `siteContent.brand`: Flavia Nolasco, Salão Martakblo, Lauzane Paulista
- Serviços: Maquiagem, Escosa, Penteado, Corte, Hidratação, etc.
- Fotos antes e depois (8 imagens)
- Links: Instagram, WhatsApp, Calendly
- Google Maps embed
- PWA com ícones e manifest
- Sentry integrado
- Sitemap estático

⚠️ **Validar antes de produção:**
- [ ] Confirmar URLs de contato (Instagram, WhatsApp, Calendly)
- [ ] Atualizar `NEXT_PUBLIC_SITE_URL` para domínio real
- [ ] Testar agendamento via Calendly
- [ ] Verificar responsividade em dispositivos móveis
- [ ] Validar imagens em `public/gallery`
- [ ] Atualizar `public/og/og-image.png` (1200x630px recomendado)
- [ ] Revisar ícones PWA em

Checklist rápido:
- [ ] Ajustar `siteContent.brand` com nome/bairro/cidade reais
- [ ] Atualizar URLs de Instagram, WhatsApp e Calendly
- [ ] Substituir imagens em `public/gallery`
- [ ] Revisar Google Maps embed em `siteContent.location.googleMapsEmbedUrl`
- [ ] Atualizar `NEXT_PUBLIC_SITE_URL`
- [ ] Substituir `public/og/og-image.png` e `public/icons`
