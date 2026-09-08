import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { siteConfig, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "YoungShark Technologies | AI-Native Digital Engineering",
    template: "%s | YoungShark Technologies",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "AI engineering company Nairobi",
    "digital product engineering Kenya",
    "intelligent automation",
    "cloud and platform engineering",
    "data and AI solutions Africa",
    "product design and software engineering",
    "YoungShark Technologies",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "YoungShark Technologies",
    description: siteConfig.description,
    type: "website",
    locale: "en_KE",
    siteName: siteConfig.name,
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "YoungShark Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YoungShark Technologies",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon.ico", sizes: "48x48" },
    ],
    apple: [{ url: "/assets/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    image: new URL("/opengraph-image", siteConfig.url).toString(),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
