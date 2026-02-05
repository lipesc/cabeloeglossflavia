const withPWA = require("next-pwa")({
  dest: "public",
  register: process.env.NEXT_PUBLIC_ENABLE_PWA === "true",
  skipWaiting: true,
  // Disable PWA unless explicitly enabled via NEXT_PUBLIC_ENABLE_PWA=true
  disable: process.env.NEXT_PUBLIC_ENABLE_PWA !== "true" || process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const isStatic = process.env.NEXT_PUBLIC_IS_STATIC === "true";

const nextConfig = {
  reactStrictMode: true,
  // Use static export only when explicitly requested to avoid image optimizer conflicts
  output: isStatic ? "export" : undefined,
  // Base path and asset prefix for project pages: https://lipesc.github.io/cabeloeglossflavia
  // basePath: isStatic ? "/cabeloeglossflavia" : undefined,
  // assetPrefix: isStatic ? "/cabeloeglossflavia" : undefined,
  // Ensure directories render with index.html for static hosting
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Next Image optimization is not supported with static export
    unoptimized: isStatic,
  },
  // Disable source maps in production to avoid 404 errors
  productionBrowserSourceMaps: false,
  // Next 16: withPWA adds webpack config; silence Turbopack warning
  turbopack: {},
};

module.exports = withPWA(nextConfig);
