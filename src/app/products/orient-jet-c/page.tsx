import ProductPage from "@/components/ProductPage";

export default function OrientJetCPage() {
  return (
    <ProductPage
      name="Orient Jet C Series"
      category="Digital Inkjet Printing"
      description="Commercial inkjet press for book, commercial, and newspaper printing. First of the Orient line of inkjet presses."
      features={[
        "Book, commercial, newspaper",
        "Market-leading ROI",
        "Economical ink usage",
        "First Orient inkjet press",
      ]}
      specs={[
        { label: "Application", value: "Book, Commercial, Newspaper" },
        { label: "Ink", value: "Economical usage" },
      ]}
      images={[
        "/images/prod-jet-c-1.jpg",
        "/images/prod-jet-c-2.jpg",
        "/images/prod-jet-c-3.jpg",
        "/images/prod-jet-c-4.jpg",
        "/images/prod-jet-c-5.jpg",
      ]}
      bannerVideo="/videos/jet-c-banner.mp4"
      bannerImage="/images/prod-jet-c-banner.jpg"
      videoId="hP0uOO0yPpo"
      pairBannerWithVideo
    />
  );
}
