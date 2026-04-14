import ProductPage from "@/components/ProductPage";

export default function OrientJetLPPage() {
  return (
    <ProductPage
      name="Orient Jet L&P Series"
      category="Digital Inkjet Printing — UV"
      description="UV inkjet digital press for labels and flexible packaging. Up to 8 colours (White + CMYK + optional orange, violet, green, clear, double white) with UV LED curing. Engineered to integrate with the Orient X-Press Flex for a complete hybrid digital + flexo production line."
      speed="Up to 75 m/min"
      features={[
        "Custom Piezo DOD UV inkjet print heads — engineered exclusively for Orient",
        "Up to 8 colour stations — White + CMYK + optional orange, violet, green, clear, double white",
        "UV LED curing",
        "600 × 600 dpi and 1200 × 1200 dpi variants",
        "Orient Jet UV inks",
        "Hybrid-ready: inline flexo priming, coating, cold foil, spot colours, die-cutting, lamination, slitting, rewinding via Orient X-Press Flex",
        "Full VDP: barcodes, QR codes, serialization, security elements",
        "Corona treater, web cleaner, anti-static, fully-servo tension control, chiller roll, splice table, web aligner",
      ]}
      specs={[
        { label: "Printing Technology", value: "UV Inkjet Digital" },
        { label: "Colour Configuration", value: "Up to 8 · White + CMYK + spot colours" },
        { label: "Resolution", value: "600 × 600 dpi or 1200 × 1200 dpi" },
        { label: "Print Speed", value: "Up to 75 m/min" },
        { label: "Curing", value: "UV LED" },
        { label: "Machine Width", value: "330 – 880 mm" },
        { label: "Imaging Width", value: "324 – 864 mm" },
        { label: "Substrate Types", value: "Self-adhesive labels, paper, vinyl, BOPP, PET, PE, PP, metallized films, clear films, filmic, specialty" },
        { label: "Ink", value: "Orient Jet UV" },
        { label: "Print Heads", value: "Custom Piezo DOD · UV inkjet" },
        { label: "Roll Diameter", value: "800 mm (customizable)" },
        { label: "Core Size", value: "76 mm (3\") on air shaft" },
        { label: "Hybrid Capability", value: "Full hybrid with Orient X-Press Flex" },
        { label: "Environment", value: "40 – 60% RH, dust-free" },
      ]}
      images={[
        "/images/prod-jet-lp-1.jpg",
        "/images/prod-jet-lp-2.jpg",
        "/images/prod-jet-lp-3.jpg",
        "/images/prod-jet-lp-4.jpg",
        "/images/prod-jet-lp-5.jpg",
      ]}
      bannerVideo="/videos/jet-lp-banner.mp4"
      bannerImage="/images/prod-jet-lp-banner.jpg"
      videoId="U4i-Szo_d9U"
      pairBannerWithVideo
    />
  );
}
