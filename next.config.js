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
  output: "export",
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
};

module.exports = withPWA(nextConfig);
