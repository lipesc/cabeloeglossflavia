/**
 * Adds basePath prefix to asset paths when in static export mode
 */
export function getAssetPath(path: string): string {
  const isStatic = process.env.NEXT_PUBLIC_IS_STATIC === "true";
  const basePath = isStatic ? "/salao_projeto_v1" : "";
  return `${basePath}${path}`;
}
