import ProductPage from "@/components/ProductPage";

export default function OrientXLCPage() {
  return (
    <ProductPage
      name="Orient XLC"
      category="Web Offset Printing — Compact"
      description="Compact alternative to traditional web-offset at 578 mm cutoff. Single-width, single-circumference press designed for space-efficient 32,000 cph production, with a tower under 3.1 metres tall and web-wrap contact between blankets to prevent fluttering."
      speed="Up to 32,000 cph"
      features={[
        "Compact 4-Hi tower: 3,065 mm height, 1,390 mm width",
        "Web-wrap contact between blankets to prevent fluttering",
        "Variable-speed motorized contactless brushmist dampening",
        "Motorized ink fountain roller",
        "One extra rider roller per side for enhanced ink distribution",
        "Slit-type plate lock-up, narrow gap blanket cylinders",
        "Hardened and ground cylinder bores for long-lasting precision fit",
      ]}
      specs={[
        { label: "Speed", value: "32,000 cph" },
        { label: "Cut-off", value: "578 mm" },
        { label: "Paper Width", value: "660 – 889 mm" },
        { label: "Max Reel Diameter", value: "1,070 mm" },
        { label: "Plate Width", value: "889 mm" },
        { label: "Plate Length (Slit)", value: "609 mm" },
        { label: "Plate Thickness", value: "0.28 mm" },
        { label: "Blanket Width", value: "889 mm" },
        { label: "Blanket Length (Narrow Gap)", value: "651 mm" },
        { label: "Blanket Thickness (w/ packing)", value: "2.1 mm" },
        { label: "Printing Length (Narrow Gap)", value: "563 mm" },
        { label: "Paper Grammage (Uncoated)", value: "38 – 100 gsm" },
        { label: "Tower Height", value: "3,065 mm" },
        { label: "Tower Width", value: "1,390 mm" },
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
