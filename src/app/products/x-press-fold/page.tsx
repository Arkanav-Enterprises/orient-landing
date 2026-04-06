import ProductPage from "@/components/ProductPage";

export default function XPressFoldPage() {
  return (
    <ProductPage
      name="Orient X-Press Fold"
      category="Packaging — Folder Gluer"
      description="Folder gluer machine in 3 models handling blanks up to 1100x900mm and paper from 250-800g including corrugated grades."
      features={[
        "3 models: 650 PC, 850 PC, 1100 PC",
        "Max Blank Size: up to 1100x900mm",
        "Paper: 250-800g, corrugated F/E grades",
        "7 functions: quick feed, auto-correction, pro folding, lock bottom, folding, trombone, delivery",
        "Machine length: 16.8m",
      ]}
      specs={[
        { label: "Models", value: "3 (650/850/1100 PC)" },
        { label: "Max Blank", value: "1100x900mm" },
        { label: "Paper Weight", value: "250-800g" },
        { label: "Machine Length", value: "16.8m" },
      ]}
    />
  );
}
