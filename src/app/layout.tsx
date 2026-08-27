import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";
import { CONTACT } from "@/data/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://w1teen8.github.io/cafe-garmonia";
const ogImage =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'GARMONIA CAFÉ — затишне кафе у Боярці',
    template: "%s — GARMONIA CAFÉ",
  },
  description:
    "GARMONIA CAFÉ — місце, де смак, атмосфера та щирі емоції створюють ідеальний відпочинок. Домашня кухня, авторська кава та десерти у Боярці. Бронюйте столик онлайн.",
  keywords: [
    "кафе Боярка",
    "GARMONIA CAFÉ",
    "Гармонія Боярка",
    "сніданки Боярка",
    "кава Боярка",
    "де поїсти Боярка",
  ],
  authors: [{ name: "GARMONIA CAFÉ" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: siteUrl,
    siteName: "GARMONIA CAFÉ",
    title: "GARMONIA CAFÉ — затишне кафе у Боярці",
    description:
      "Їжа, що об’єднує людей. Смак, атмосфера та щирі емоції у затишному кафе Гармонія.",
    images: [{ url: ogImage, width: 1600, height: 1000, alt: "GARMONIA CAFÉ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GARMONIA CAFÉ — затишне кафе у Боярці",
    description: "Їжа, що об’єднує людей. Затишне кафе Гармонія у Боярці.",
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
    name: "GARMONIA CAFÉ",
    image: ogImage,
    "@id": siteUrl,
    url: siteUrl,
    telephone: CONTACT.phone,
    priceRange: "₴₴",
    servesCuisine: ["European", "Coffee", "Desserts"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "вул. Білогородська 51, корпус 6",
      postalCode: "08150",
      addressLocality: "Боярка",
      addressRegion: "Київська область",
      addressCountry: "UA",
    },
    openingHours: "Mo-Su 10:00-22:00",
    sameAs: [CONTACT.instagramUrl, CONTACT.facebookUrl, CONTACT.telegramUrl],
  };

  return (
    <html
      lang="uk"
      className={`${playfair.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
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
