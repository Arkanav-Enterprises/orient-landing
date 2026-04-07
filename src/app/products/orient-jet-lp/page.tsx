import ProductPage from "@/components/ProductPage";

export default function OrientJetLPPage() {
  return (
    <ProductPage
      name="Orient Jet L&P Series"
      category="Digital Inkjet Printing — UV"
      description="UV inkjet press with high-speed, substrate-versatile printing on paper, plastics, and metals. Eco-friendly with no VOCs."
      features={[
        "UV inkjet technology",
        "Substrate versatile: paper, plastics, metals",
        "Eco-friendly: no VOCs",
        "Variable Data Printing (VDP) capable",
        "High-speed production",
      ]}
      specs={[
        { label: "Technology", value: "UV Inkjet" },
        { label: "Substrates", value: "Paper, Plastics, Metals" },
        { label: "VDP", value: "Capable" },
      ]}
      images={[
        "/images/prod-jet-lp-1.jpg",
        "/images/prod-jet-lp-2.jpg",
        "/images/prod-jet-lp-3.jpg",
        "/images/prod-jet-lp-4.jpg",
      ]}
      bannerVideo="/videos/jet-lp-banner.mp4"
      bannerImage="/images/prod-jet-lp-banner.jpg"
      videoId="U4i-Szo_d9U"
      pairBannerWithVideo
    />
  );
}
