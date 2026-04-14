import ProductPage from "@/components/ProductPage";

export default function OrientXCelPage() {
  return (
    <ProductPage
      name="Orient X-Cel"
      category="Web Offset Printing"
      description="Single-width, single-circumference web-offset press running up to 36,000 copies per hour — 20% faster than the Orient Super. Hardened and ground bushes, motorized circumferential register, and brushmist dampening for demanding commercial and newspaper production."
      speed="Up to 36,000 cph"
      features={[
        "Hardened and ground bushes in frame for plate and blanket cylinders",
        "Dynamically-balanced hard chromium plated cylinders",
        "Motorized circumferential register on loading side, on the run",
        "Motorized side register for both plate cylinders",
        "PU-covered ink vibrator rollers with narrow gap blanket lock-up",
        "Infra-red web-break detector",
        "Variable-speed motorized brushmist dampening",
        "Optional: heavy-duty compensator, pillar clutch on either side, auto grease lubrication, centralized water with chiller, solid stainless-steel cylinders, T-Bar blanket lock-up, AC drive",
      ]}
      specs={[
        { label: "Speed", value: "36,000 cph" },
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
