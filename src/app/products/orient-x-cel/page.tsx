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
      images={[
        "/images/prod-xcel-1.jpg",
        "/images/prod-xcel-2.jpg",
        "/images/prod-xcel-3.jpg",
        "/images/prod-xcel-4.jpg",
        "/images/prod-xcel-5.jpg",
        "/images/prod-xcel-6.jpg",
      ]}
      videoFile="/videos/offset-final.mp4"
    />
  );
}
