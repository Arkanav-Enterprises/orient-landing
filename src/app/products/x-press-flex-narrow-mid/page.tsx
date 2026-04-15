import ProductPage from "@/components/ProductPage";

export default function XPressFlexNarrowMidPage() {
  return (
    <ProductPage
      name="X-Press Flex Narrow & Mid Web"
      category="Flexographic Printing"
      description="Narrow and mid web flexo presses for labels, flexible packaging, shrink sleeves, pouches, and mono cartons. Proprietary Orient X-Gear design with custom cylinder assembly for registration, UV LED / hot-air / IR curing, and ink compatibility across UV LED, water-based, and solvent systems."
      speed="Up to 180 m/min"
      speedNote="Higher speeds configurable depending on specification and application — please ask your sales rep."
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
          { label: "Max Web Widths", values: ["350 / 450 / 550 mm", "650 / 750 / 850 mm"] },
          {
            label: "Max Printing Widths",
            values: [
              "340 mm @ 350 · 440 mm @ 450 · 540 mm @ 550",
              "640 mm @ 650 · 740 mm @ 750 · 840 mm @ 850",
            ],
          },
          {
            label: "Printing Repeat",
            values: [
              "177.8 – 609.6 mm",
              "177.8 – 609.6 mm @ 650 · 350 – 850 mm @ 750 / 850",
            ],
          },
          { label: "Die-Cutting Repeat", values: ["304.8 – 609.6 mm", "—"] },
          { label: "Max Unwinding Diameter", values: ["1,050 mm", "1,050 mm"] },
          { label: "Max Rewinding Diameter", values: ["1,050 mm", "1,050 mm"] },
          { label: "Max Matrix Diameter", values: ["700 mm", "—"] },
          { label: "Driving Mode", values: ["Full Servo", "Full Servo"] },
          {
            label: "Max Mechanical Speed",
            values: [
              "180 m/min (higher speeds configurable depending on specification and application — please ask your sales rep)",
              "180 m/min (higher speeds configurable depending on specification and application — please ask your sales rep)",
            ],
          },
          { label: "Ink Curing", values: ["UV LED · Hot Air · IR", "UV LED · Hot Air · IR"] },
          { label: "Applicable Ink", values: ["UV LED · Water-based · Solvent", "UV LED · Water-based · Solvent"] },
          { label: "Substrate Thickness", values: ["12 – 350 µm", "12 – 350 µm"] },
          {
            label: "Attachments",
            values: [
              "Delam Relam · Cold Foil · Peel & Seal · Turn Bar",
              "Delam Relam · Cold Foil · Peel & Seal · Turn Bar",
            ],
          },
          { label: "Registration", values: ["Auto", "Auto"] },
          { label: "Pre-Registration", values: ["Available", "Available"] },
          { label: "Second Pass", values: ["Available", "Available"] },
          {
            label: "Typical Applications",
            values: [
              "Self-adhesive labels, paper & coated stocks, vinyl, BOPP, PET, PE, PP, mono cartons, shrink, clear films, filmic, metallized & specialty",
              "Film labels, shrink sleeves, film pouches, flexible packaging, mono cartons, paper & coated stocks",
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
