import ProductPage from "@/components/ProductPage";

export default function XPressFlexNarrowPage() {
  return (
    <ProductPage
      name="X-Press Flex Narrow Web"
      category="Flexographic Printing"
      description="Narrow web flexo press for labels, flexible packaging, and paper packaging with proprietary Orient X-Gear design."
      features={[
        "Web Width: 330-650mm",
        "Proprietary Orient X-Gear design",
        "Optional sleeve technology",
        "Labels, flexible packaging, paper packaging",
      ]}
      specs={[
        { label: "Web Width", value: "330-650mm" },
        { label: "Application", value: "Labels, Flexible Packaging" },
      ]}
    />
  );
}
