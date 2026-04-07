import ProductPage from "@/components/ProductPage";

export default function XPressFlexNarrowMidPage() {
  return (
    <ProductPage
      name="X-Press Flex Narrow & Mid Web"
      category="Flexographic Printing"
      description="Narrow and mid web flexo presses for labels, flexible packaging, shrink sleeves, pouches, and mono cartons — with proprietary Orient X-Gear design and custom cylinder assembly for precise registration."
      features={[
        "Proprietary Orient X-Gear design",
        "Custom cylinder assembly for registration",
        "Optional sleeve technology",
        "Labels, flexible packaging, paper packaging",
        "Film labels, shrink sleeves, pouches, mono cartons",
      ]}
      specs={[]}
      specComparison={{
        columns: ["Narrow Web", "Mid Web"],
        rows: [
          { label: "Web Width", values: ["330–650 mm", "650–1000 mm"] },
          {
            label: "Applications",
            values: [
              "Labels, flexible packaging, paper packaging",
              "Film labels, shrink sleeves, pouches, mono cartons",
            ],
          },
          {
            label: "Key Advantage",
            values: ["X-Gear precision, optional sleeves", "Custom cylinder assembly"],
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
