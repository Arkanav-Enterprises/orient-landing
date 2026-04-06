import ProductPage from "@/components/ProductPage";

export default function FoldersPage() {
  return (
    <ProductPage
      name="Folders"
      category="Web Offset — Finishing"
      description="Five folder models ranging from jaw type to tucker folders, handling 4 to 12 webs at speeds up to 50,000 cph."
      speed="Up to 50,000 cph"
      features={[
        "Jaw Type 1:2 Standard (16,000 cph, 4 webs)",
        "Heavy Duty 2:2 (36,000 cph, 8 webs)",
        "Tucker Folder (50,000 cph, 10 webs)",
        "X-Press 1:2:2 (50,000 cph, 12 webs)",
        "Jaw Type 1:2 Super (30,000 cph, 8 webs)",
      ]}
      specs={[
        { label: "Models", value: "5" },
        { label: "Max Speed", value: "50,000 cph" },
        { label: "Max Webs", value: "12" },
      ]}
    />
  );
}
