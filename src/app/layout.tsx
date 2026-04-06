import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
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
    <html lang="en" className={`${robotoFlex.variable} antialiased`}>
      <body className="bg-white text-near-black">{children}</body>
    </html>
  );
}
