import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Latest news, trade show appearances, product launches, and industry updates from Orient — The Printers House.",
  alternates: { canonical: "/news" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
