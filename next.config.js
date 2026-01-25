const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // Disable PWA in dev; enable for static export only when explicitly opted in
  disable:
    process.env.NODE_ENV === "development" ||
    (process.env.NEXT_PUBLIC_IS_STATIC === "true" &&
      process.env.NEXT_PUBLIC_ENABLE_PWA !== "true"),
});

/** @type {import('next').NextConfig} */
const isStatic = process.env.NEXT_PUBLIC_IS_STATIC === "true";

const nextConfig = {
  reactStrictMode: true,
  // Use static export on GitHub Pages builds
  output: isStatic ? "export" : undefined,
  // Base path and asset prefix for project pages: https://username.github.io/salao_projeto_v1
  basePath: isStatic ? "/salao_projeto_v1" : undefined,
  assetPrefix: isStatic ? "/salao_projeto_v1/" : undefined,
  // Ensure directories render with index.html for static hosting
  trailingSlash: isStatic ? true : undefined,
  images: {
    formats: ["image/avif", "image/webp"],
    // Next Image optimization is not supported with static export
    unoptimized: isStatic,
  },
};

module.exports = withPWA(nextConfig);
