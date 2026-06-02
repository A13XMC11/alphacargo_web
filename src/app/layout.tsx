import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-var",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-var",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-var",
  weight: ["700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AlphaCargo — Logística Internacional desde Ecuador",
    template: "%s | AlphaCargo",
  },
  description:
    "Empresa ecuatoriana de logística y cargo internacional. 5 años de experiencia, 1.250+ clientes y cobertura en 180 países. Cotiza tu envío hoy.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://alphacargo-ec.com"
  ),
  openGraph: {
    type: "website",
    locale: "es_EC",
    siteName: "AlphaCargo",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AlphaCargo — Logística Internacional" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "AlphaCargo",
  url: "https://alphacargo-ec.com",
  logo: "https://alphacargo-ec.com/logo.png",
  description:
    "Empresa ecuatoriana de logística y cargo internacional con más de 5 años de experiencia, 1.250+ clientes y presencia en 180 países.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Francisco de Orellana, Torre Centrum, Piso 4",
    addressLocality: "Guayaquil",
    addressRegion: "Guayas",
    postalCode: "090112",
    addressCountry: "EC",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -2.1709,
    longitude: -79.8891,
  },
  telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+593999999999",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  areaServed: { "@type": "Country", name: "Ecuador" },
  serviceType: "Logística Internacional",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+593999999999",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: [
    "https://www.instagram.com/alphacargo_ec",
    "https://www.facebook.com/alphacargo",
    "https://www.linkedin.com/company/alphacargo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jakarta.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
