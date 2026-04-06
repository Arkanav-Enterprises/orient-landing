import ProductPage from "@/components/ProductPage";

export default function XPressFlexWidePage() {
  return (
    <ProductPage
      name="X-Press Flex Wide Web"
      category="Flexographic Printing"
      description="Wide web flexo press with sleeve technology for quick changeover, achieving up to 50% less wastage with sustainable green inks."
      features={[
        "Width: 1000-1500mm",
        "Sleeve technology for quick changeover",
        "Up to 50% less wastage",
        "Sustainable green inks",
        "FMCG, food, medical, pharma sectors",
      ]}
      specs={[
        { label: "Web Width", value: "1000-1500mm" },
        { label: "Wastage Reduction", value: "Up to 50%" },
        { label: "Sectors", value: "FMCG, Food, Medical, Pharma" },
      ]}
    />
  );
}
