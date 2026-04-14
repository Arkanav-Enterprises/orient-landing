import ProductPage from "@/components/ProductPage";

export default function OrientSuperPage() {
  return (
    <ProductPage
      name="Orient Super"
      category="Web Offset Printing"
      description="Single-width, single-circumference web-offset press running up to 30,000 copies per hour. Configurable as Mono Unit, 3-Colour Satellite, or 4 High Tower — 4 colours on both sides of one web, 2 colours on both sides of two webs, or single colour on both sides of three webs."
      speed="Up to 30,000 cph"
      features={[
        "Dynamically-balanced hard chromium plated plate and blanket cylinders",
        "Lever-type swing-down ink fountain with overrides",
        "Slit or spring-type plate lock-up system",
        "Motorized side register for both plate cylinders, on the run",
        "Variable-speed motorized brushmist dampening",
        "Electro-mechanical web-break detector",
        "Optional: narrow gap blanket cylinder, solid stainless-steel cylinders, centralized water circulation with chiller, automatic grease lubrication, AC drive",
      ]}
      specs={[
        { label: "Speed", value: "30,000 cph" },
        { label: "Paper Width", value: "660 – 889 mm" },
        { label: "Max Reel Diameter", value: "1,070 mm (42\")" },
        { label: "Plate Width", value: "890 mm" },
        { label: "Plate Thickness", value: "0.28 / 0.30 mm" },
        { label: "Blanket Thickness (w/ packing)", value: "2.1 mm" },
        { label: "Paper Grammage (Uncoated)", value: "38 – 100 gsm" },
        { label: "Available Cut-offs", value: "508 · 533 · 546 · 560 · 578 · 630 mm" },
      ]}
      configurations={["Mono Unit", "3-Colour Satellite", "4 High Tower"]}
      images={[
        "/images/web-offset-hero-dark.jpg",
        "/images/web-offset-hero-showroom.jpg",
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
