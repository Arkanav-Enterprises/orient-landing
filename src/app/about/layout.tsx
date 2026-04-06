import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Orient — The Printers House. Founded in 1946 by K.D. Kohli. 20,000+ units installed in 60+ countries. Manufacturing campus in Delhi NCR.",
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
