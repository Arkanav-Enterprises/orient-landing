import ProductPage from "@/components/ProductPage";

export default function XPressFlexWidePage() {
  return (
    <ProductPage
      name="X-Press Flex Wide Web"
      category="Flexographic Printing"
      description="Wide web flexo press running up to 200 m/min on web widths of 1,000 – 1,320 mm. Sleeve technology for quick changeover with up to 50% less wastage, ink curing across UV LED / IR / hot air, and sustainable green ink compatibility for FMCG, food, medical, and pharma packaging."
      speed="Up to 200 m/min"
      features={[
        "Max web width 1,000 – 1,320 mm · max printing width 1,270 mm",
        "Sleeve technology for quick changeover — up to 50% less wastage",
        "Max mechanical speed up to 200 m/min",
        "Full servo drive · auto registration · pre-registration and second-pass supported",
        "Ink curing: UV LED · IR · Hot Air (configurable to application)",
        "Ink compatibility: UV LED, water-based, solvent — sustainable green inks supported",
        "Chill water circulation at 20 – 22°C",
        "Hybrid-ready with Orient Jet for inline digital + flexo production",
        "FMCG, food, medical, pharma sectors",
      ]}
      specs={[
        { label: "Max Web Width", value: "1,000 – 1,320 mm" },
        { label: "Max Printing Width", value: "1,270 mm" },
        { label: "Printing Repeat", value: "350 – 850 mm" },
        { label: "Max Unwinding Diameter", value: "1,050 mm" },
        { label: "Max Rewinding Diameter", value: "1,050 mm" },
        { label: "Driving Mode", value: "Full Servo" },
        { label: "Max Mechanical Speed", value: "Up to 200 m/min" },
        { label: "Ink Curing", value: "IR · Hot Air · UV / LED (application-dependent)" },
        { label: "Applicable Ink", value: "UV LED · Water-based · Solvent" },
        { label: "Substrate", value: "Paper, film, board (wide gamut — contact sales for specific application)" },
        { label: "Substrate Thickness", value: "12 – 350 µm" },
        { label: "Registration", value: "Auto" },
        { label: "Pre-Registration", value: "Available" },
        { label: "Second Pass", value: "Available" },
        { label: "Chill Water", value: "20 – 22 °C" },
        { label: "Wastage Reduction", value: "Up to 50%" },
        { label: "Typical Sectors", value: "FMCG, Food, Medical, Pharma" },
      ]}
      images={[
        "/images/prod-flex-wide-1.jpg",
        "/images/prod-flex-wide-2.jpg",
        "/images/prod-flex-wide-3.jpg",
        "/images/prod-flex-wide-4.jpg",
        "/images/prod-flex-wide-5.jpg",
      ]}
      bannerImage="/images/prod-flex-wide-banner.jpg"
      videoId="RJGczOt_jb0"
      pairBannerWithVideo
    />
  );
}
