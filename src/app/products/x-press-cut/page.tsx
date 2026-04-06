import ProductPage from "@/components/ProductPage";

export default function XPressCutPage() {
  return (
    <ProductPage
      name="Orient X-Press Cut"
      category="Packaging — Die Cutter"
      description="Die cutting machine in 2 models with speeds up to 7,500 sheets/hour, 300 tons max pressure, handling up to 4mm B flute corrugated."
      speed="7,500 sheets/hour"
      features={[
        "2 models: ASR 1060 and SHU 1060",
        "Max pressure: 300 tons",
        "Handles up to 4mm B flute corrugated",
        "Weight: 16-18.5 tons",
      ]}
      specs={[
        { label: "Models", value: "ASR 1060, SHU 1060" },
        { label: "Speed", value: "7,500 sheets/hr" },
        { label: "Max Pressure", value: "300 tons" },
        { label: "Max Material", value: "4mm B flute corrugated" },
        { label: "Weight", value: "16-18.5 tons" },
      ]}
    />
  );
}
