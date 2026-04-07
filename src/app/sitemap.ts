import type { MetadataRoute } from "next";

const BASE = "https://www.tphorient.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/downloads", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/news", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/careers", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  const productPages = [
    "/products/orient-super",
    "/products/orient-x-cel",
    "/products/orient-x-press",
    "/products/orient-xlc",
    "/products/folders",
    "/products/orient-jet-c",
    "/products/orient-jet-lp",
    "/products/x-press-flex-narrow-mid",
    "/products/x-press-flex-wide",
  ].map((url) => ({ url, priority: 0.8 as number, changeFrequency: "monthly" as const }));

  const servicePages = [
    "/services/spare-parts",
    "/services/amc",
  ].map((url) => ({ url, priority: 0.6 as number, changeFrequency: "monthly" as const }));

  return [...staticPages, ...productPages, ...servicePages].map((page) => ({
    url: `${BASE}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
