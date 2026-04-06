import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Download product catalogs, brochures, and technical documentation for Orient printing presses.",
  alternates: { canonical: "/downloads" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
