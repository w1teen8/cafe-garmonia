import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";
import settings from "@/data/settings.json";
import type { SettingsData } from "@/lib/types";

const data = settings as SettingsData;

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://w1teen8.github.io/cafe-garmonia";
const ogImage =
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1600&q=80";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Кафе "Гармонія" — затишне кафе у Боярці',
    template: '%s — Кафе "Гармонія"',
  },
  description:
    'Кафе "Гармонія" у Боярці — сніданки, обіди, вечері, авторська кава та десерти у теплій атмосфері. Бронюйте столик онлайн, проводьте банкети та приватні події.',
  keywords: [
    "кафе Боярка",
    "ресторан Боярка",
    "сніданки Боярка",
    "де поїсти Боярка",
    "кава Боярка",
    "банкети Боярка",
    "бізнес-ланч Боярка",
  ],
  authors: [{ name: 'Кафе "Гармонія"' }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: siteUrl,
    siteName: 'Кафе "Гармонія"',
    title: 'Кафе "Гармонія" — затишне кафе у Боярці',
    description:
      "Аромат свіжої кави, домашня кухня та тепла атмосфера створюють особливі моменти.",
    images: [{ url: ogImage, width: 1600, height: 1000, alt: 'Кафе "Гармонія"' }],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Кафе "Гармонія" — затишне кафе у Боярці',
    description:
      "Аромат свіжої кави, домашня кухня та тепла атмосфера створюють особливі моменти.",
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: data.brand.legalName,
    image: ogImage,
    "@id": siteUrl,
    url: siteUrl,
    telephone: data.contact.phone,
    priceRange: "₴₴",
    servesCuisine: ["European", "Coffee", "Desserts"],
    address: {
      "@type": "PostalAddress",
      streetAddress: data.contact.address,
      addressLocality: "Боярка",
      addressRegion: "Київська область",
      addressCountry: "UA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.contact.coordinates.lat,
      longitude: data.contact.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "23:00",
      },
    ],
    sameAs: data.social.map((s) => s.url),
  };

  return (
    <html
      lang="uk"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-bg font-sans text-primary">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
