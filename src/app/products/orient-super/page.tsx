import ProductPage from "@/components/ProductPage";

export default function OrientSuperPage() {
  return (
    <ProductPage
      name="Orient Super"
      category="Web Offset Printing"
      description="Versatile web offset press capable of up to 4 colours both sides of one web, or 2 colour both sides of two webs."
      speed="Up to 30,000 cph"
      features={[
        "Electro-mechanical web-break detector",
        "Centralized water circulation",
        "Multi-web capability",
        "High-speed production",
      ]}
      specs={[
        { label: "Speed", value: "30,000 cph" },
        { label: "Configurations", value: "Mono, Satellite, Tower" },
      ]}
      configurations={["Mono Unit", "3-Colour Satellite", "4 High Tower"]}
      images={[
        "/images/prod-super-1.jpg",
        "/images/prod-super-2.jpg",
        "/images/prod-super-3.jpg",
        "/images/prod-super-4.jpg",
        "/images/prod-super-5.jpg",
        "/images/prod-super-6.jpg",
      ]}
      videoFile="/videos/offset-final.mp4"
    />
  );
}
