import { siteContent } from "@/content/siteContent";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FlaviaImage } from "@/components/FlaviaImage";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
// import { HowItWorks } from "@/components/HowItWorks";
import { LocationSection } from "@/components/LocationSection";
// import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { PwaInstallBanner } from "@/components/PwaInstallBanner";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const ogImageUrl = siteContent.seo.ogImage.startsWith("http")
    ? siteContent.seo.ogImage
    : `${siteUrl}${siteContent.seo.ogImage}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteContent.brand.professionalName,
        jobTitle: "Cabeleireira e Maquiadora",
        telephone: siteContent.schema.phone,
        sameAs: siteContent.schema.sameAs,
      },
      {
        "@type": "BeautySalon",
        name: siteContent.brand.salonName,
        url: siteUrl,
        image: ogImageUrl,
        telephone: siteContent.schema.phone,
        priceRange: siteContent.schema.priceRange,
        areaServed: `${siteContent.brand.neighborhood}, ${siteContent.brand.city}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteContent.location.addressLine2,
        },
        employee: {
          "@type": "Person",
          name: siteContent.brand.professionalName,
        },
      },
      ...siteContent.services.items.map((service) => ({
        "@type": "Service",
        name: service.name,
        description: service.shortDescription,
        serviceType: service.name,
        provider: {
          "@type": "BeautySalon",
          name: siteContent.brand.salonName,
        },
        areaServed: `${siteContent.brand.neighborhood}, ${siteContent.brand.city}`,
      })),
    ],
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FlaviaImage />
        <BeforeAfter />
        <Services />
        <Testimonials />
        {/* <HowItWorks /> */}
        <LocationSection />
        <FinalCta />
        {/* <FaqSection /> */}
      </main>
      <Footer />
      <PwaInstallBanner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
