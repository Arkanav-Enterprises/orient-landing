import ProductPage from "@/components/ProductPage";

export default function OrientJetCPage() {
  return (
    <ProductPage
      name="Orient Jet C-Series"
      category="Digital Inkjet Printing — Aqueous"
      description="Production-grade aqueous inkjet press for book, commercial, newspaper, and security printing. Mono or 4-colour CMYK variants with simplex or duplex printing, custom high-end Piezo DOD print heads engineered exclusively for Orient, and in-line finishing for sheeting, folding, perforation, and perfect binding."
      speed="Up to 100 m/min @ 600 dpi · 80 m/min @ 1200 dpi"
      features={[
        "Custom high-end Piezo DOD inkjet print heads — long-lasting service life, engineered and manufactured exclusively for Orient",
        "Mono or 4-colour CMYK · simplex or duplex printing",
        "600 x 600 dpi and 1200 x 1200 dpi variants (optional 1200 × 900 @ 120 m/min · 1200 × 600 @ 150 m/min)",
        "IR and hot-air drying",
        "Orient Jet aqueous ink — open system, no proprietary lock-in",
        "Full VDP: barcodes, QR codes, serialization, security elements",
        "Web cleaner, anti-static, fully-servo tension control, web aligner, splice table, web-break sensor",
        "Hybrid-ready with Orient X-Press Flex for inline priming, coating, and finishing",
        "Harlequin RIP with HP/Dell server; custom Orient Jet software",
      ]}
      specs={[
        { label: "Printing Technology", value: "Aqueous Inkjet Digital" },
        { label: "Colour Configuration", value: "Mono or 4-Colour CMYK · Simplex / Duplex" },
        { label: "Resolution", value: "600 × 600 dpi or 1200 × 1200 dpi" },
        { label: "Print Speed", value: "Up to 100 m/min @ 600 dpi · 80 m/min @ 1200 dpi" },
        { label: "Machine Width", value: "330 – 1,200 mm" },
        { label: "Imaging Width", value: "324 – 1,180 mm" },
        { label: "Substrate Types", value: "Uncoated & coated paper, newsprint, bond, offset, book-grade" },
        { label: "Substrate Weight", value: "40 – 250 gsm (higher configurable with thickness kit)" },
        { label: "Ink", value: "Orient Jet Aqueous" },
        { label: "Print Heads", value: "Custom Piezo DOD · Industrial (exclusive to Orient)" },
        { label: "Drying", value: "IR & Hot Air" },
        { label: "Max Roll Diameter", value: "1,200 mm" },
        { label: "Finishing", value: "In-line sheeter, folder, rewinder, perforation, perfect binding" },
        { label: "Environment", value: "40 – 60% RH, dust-free" },
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
