import "./globals.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Playfair_Display, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { siteContent } from "@/content/siteContent";
import { GTM_ID } from "@/lib/gtm";
import { getAssetPath } from "@/lib/paths";
import { ConsentBanner } from "@/components/ConsentBanner";

import * as Sentry from '@sentry/nextjs';

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  metadataBase: new URL(siteUrl),
  manifest: getAssetPath("/manifest.webmanifest"),
  icons: {
    icon: getAssetPath("/icons/icon-192-v2.png"),
    apple: getAssetPath("/icons/icon-192-v2.png"),
  },
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    type: "website",
    siteName: siteContent.seo.siteName,
    images: [
      {
        url: siteContent.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteContent.seo.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [siteContent.seo.ogImage],
  },
  other: {
  ...Sentry.getTraceData()
}
};

export const viewport: Viewport = {
  themeColor: "#e04b36",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-base text-ink">
        {GTM_ID ? (
          <>
            <Script
              id="gtm"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${GTM_ID}');
                `,
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
                title="Google Tag Manager"
              />
            </noscript>
          </>
        ) : null}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17907551410"
          strategy="beforeInteractive"
        />
        <Script
          id="google-ads"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                analytics_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });
              gtag('js', new Date());
              gtag('config', 'AW-17907551410', {
                'page_path': window.location.pathname,
                'anonymize_ip': true
              });
              
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-17907551410/ZRclCNu0yO0bELKZ_tpC',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
        <ConsentBanner />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
