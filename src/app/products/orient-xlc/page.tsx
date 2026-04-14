import ProductPage from "@/components/ProductPage";

export default function OrientXLCPage() {
  return (
    <ProductPage
      name="Orient XLC"
      category="Web Offset Printing — Compact"
      description="Compact alternative to traditional web-offset, designed for space-efficient high-quality production."
      speed="Up to 32,000 cph"
      features={[
        "Compact tower: 3,065mm height, 1,390mm width",
        "Contactless brushmist dampening",
      ]}
      specs={[
        { label: "Speed", value: "32,000 cph" },
        { label: "Tower Height", value: "3,065mm" },
        { label: "Tower Width", value: "1,390mm" },
      ]}
      images={[
        "/images/web-offset-hero-dark.jpg",
        "/images/web-offset-hero-showroom.jpg",
        "/images/prod-xlc-2.jpg",
        "/images/prod-xlc-3.jpg",
        "/images/prod-xlc-4.jpg",
      ]}
      bannerImage="/images/prod-xlc-banner.jpg"
      videoId="eGJn9CscN14"
      pairBannerWithVideo
    />
  );
}
