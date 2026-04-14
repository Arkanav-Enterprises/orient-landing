import ProductPage from "@/components/ProductPage";

export default function XPressFlexNarrowMidPage() {
  return (
    <ProductPage
      name="X-Press Flex Narrow & Mid Web"
      category="Flexographic Printing"
      description="Narrow and mid web flexo presses for labels, flexible packaging, shrink sleeves, pouches, and mono cartons. Proprietary Orient X-Gear design with custom cylinder assembly for registration, UV LED / hot-air / IR curing, and ink compatibility across UV LED, water-based, and solvent systems."
      speed="Up to 180 m/min"
      features={[
        "Proprietary Orient X-Gear design",
        "Custom cylinder assembly for precise registration",
        "Optional sleeve technology (narrow web)",
        "UV LED · Hot Air · IR curing",
        "Ink compatibility: UV LED, water-based, solvent",
        "Labels, film labels, shrink sleeves, pouches, flexible packaging, mono cartons",
        "Hybrid-ready with Orient Jet for inline digital + flexo production",
      ]}
      specs={[]}
      specComparison={{
        columns: ["Narrow Web", "Mid Web"],
        rows: [
          { label: "Max Web Width", values: ["450 mm", "650 mm"] },
          { label: "Printing Repeat", values: ["177.8 – 609.6 mm", "177.8 – 609.6 mm"] },
          { label: "Die-Cutting Repeat", values: ["304.8 – 609.6 mm", "304.8 – 609.6 mm"] },
          { label: "Max Mechanical Speed", values: ["180 m/min", "180 m/min"] },
          { label: "Ink Curing", values: ["UV LED · Hot Air · IR", "UV LED · Hot Air · IR"] },
          { label: "Applicable Ink", values: ["UV LED · Water-based · Solvent", "UV LED · Water-based · Solvent"] },
          {
            label: "Typical Applications",
            values: [
              "Labels, paper packaging, flexible packaging",
              "Film labels, shrink sleeves, film pouches, flexible packaging",
            ],
          },
        ],
      }}
      images={[
        "/images/prod-flex-nm-1.jpg",
        "/images/prod-flex-nm-2.jpg",
        "/images/prod-flex-nm-3.jpg",
        "/images/prod-flex-nm-4.jpg",
        "/images/prod-flex-nm-5.jpg",
      ]}
      bannerImage="/images/prod-flex-nm-banner.jpg"
      pairedLeftVideo="/videos/flex-nm-gallery.mp4"
      videoId="3ulUbJItgFY"
      pairBannerWithVideo
    />
  );
}
