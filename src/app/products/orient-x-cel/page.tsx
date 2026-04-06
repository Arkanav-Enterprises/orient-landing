import ProductPage from "@/components/ProductPage";

export default function OrientXCelPage() {
  return (
    <ProductPage
      name="Orient X-Cel"
      category="Web Offset Printing"
      description="High-performance web offset press with infra-red web detection and pneumatic controls for demanding production environments."
      speed="Up to 36,000 cph"
      features={[
        "Infra-red web detector",
        "Brushmist dampening",
        "Pneumatic controls",
        "Motorized registration",
        "Optional auto grease lubrication",
        "Optional reel changer",
      ]}
      specs={[
        { label: "Speed", value: "36,000 cph" },
        { label: "Web Detection", value: "Infra-red" },
        { label: "Dampening", value: "Brushmist" },
      ]}
      configurations={["Mono Unit", "3-Colour Satellite", "4 High Tower"]}
    />
  );
}
