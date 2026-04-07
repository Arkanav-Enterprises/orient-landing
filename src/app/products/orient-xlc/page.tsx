import ProductPage from "@/components/ProductPage";

export default function OrientXLCPage() {
  return (
    <ProductPage
      name="Orient XLC"
      category="Web Offset Printing — Compact"
      description="Compact alternative to traditional web-offset, designed for space-efficient high-quality production."
      speed="Up to 30,000 cph"
      features={[
        "Compact tower: 3,065mm height, 1,390mm width",
        "Paper Width: 660-889mm",
        "Grammage: 38-100 gsm",
        "Contactless brushmist dampening",
      ]}
      specs={[
        { label: "Speed", value: "30,000 cph" },
        { label: "Paper Width", value: "660-889mm" },
        { label: "Grammage", value: "38-100 gsm" },
        { label: "Tower Height", value: "3,065mm" },
        { label: "Tower Width", value: "1,390mm" },
      ]}
      videoId="eGJn9CscN14"
    />
  );
}
