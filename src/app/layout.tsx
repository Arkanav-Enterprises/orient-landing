import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tphorient.com"),
  title: {
    default: "Orient | Imprinting Excellence Worldwide Since 1946",
    template: "%s | Orient — The Printers House",
  },
  description:
    "From offset to inkjet, books to labels and everything packaging — Orient is your one-stop technology and equipment provider. 20,000+ units installed across 60+ countries.",
  keywords: [
    "web offset printing press",
    "flexographic printing machine",
    "inkjet printing press",
    "Orient printing",
    "TPH Orient",
    "The Printers House",
    "printing machinery manufacturer India",
    "Orient Jet",
    "Orient X-Press",
    "packaging printing machine",
  ],
  authors: [{ name: "TPH Orient — The Printers House" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Orient — The Printers House",
    title: "Orient | Imprinting Excellence Worldwide Since 1946",
    description:
      "From offset to inkjet, books to labels and everything packaging — Orient is your one-stop technology and equipment provider.",
    images: [{ url: "/images/orient-logo.png", width: 1200, height: 630, alt: "Orient — The Printers House" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orient | Imprinting Excellence Worldwide Since 1946",
    description:
      "From offset to inkjet, books to labels and everything packaging — 20,000+ units installed across 60+ countries.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orient — The Printers House",
  alternateName: "TPH Orient",
  url: "https://www.tphorient.com",
  logo: "https://www.tphorient.com/images/orient-logo.png",
  foundingDate: "1946",
  description: "Leading manufacturer of web offset, flexographic, and digital inkjet printing presses since 1946. 20,000+ units installed across 60+ countries.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10, Scindia House, Connaught Place",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-11-2331-3071",
    contactType: "sales",
    email: "tphho@tphorient.com",
  },
  sameAs: [
    "https://www.facebook.com/orientprintingandpackaging/",
    "https://www.instagram.com/orientprintingandpackaging",
    "https://www.linkedin.com/company/orientprintingandpackaging",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoFlex.variable} antialiased`}>
      <body className="bg-white text-near-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
