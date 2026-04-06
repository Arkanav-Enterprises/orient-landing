import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orient | Imprinting Excellence Worldwide Since 1946",
  description:
    "From offset to inkjet, books to labels and everything packaging — Orient is your one-stop technology and equipment provider. 20,000+ units installed across 60+ countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${geist.variable} antialiased`}>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
