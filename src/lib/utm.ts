export const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "ttclid",
];

type ParamsLike = {
  get: (key: string) => string | null;
};

export function appendTrackingParams(url: string, params: ParamsLike) {
  try {
    const nextUrl = new URL(url);
    TRACKING_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) {
        nextUrl.searchParams.set(key, value);
      }
    });
    return nextUrl.toString();
  } catch {
    return url;
  }
}

export function normalizePhoneNumber(phone: string) {
  return phone.replace(/\D/g, "");
}
