import ProductPage from "@/components/ProductPage";

export default function XPressFlexMidPage() {
  return (
    <ProductPage
      name="X-Press Flex Mid Web"
      category="Flexographic Printing"
      description="Mid web flexo press for film labels, shrink sleeves, pouches, and mono cartons with custom cylinder assembly."
      features={[
        "Width: 650-1000mm",
        "Custom cylinder assembly for registration",
        "Film labels, shrink sleeves, pouches, mono cartons",
      ]}
      specs={[
        { label: "Web Width", value: "650-1000mm" },
        { label: "Application", value: "Film Labels, Pouches, Cartons" },
      ]}
    />
  );
}
