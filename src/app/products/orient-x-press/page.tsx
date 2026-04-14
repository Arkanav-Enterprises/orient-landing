import ProductPage from "@/components/ProductPage";

export default function OrientXPressPage() {
  return (
    <ProductPage
      name="Orient X-Press"
      category="Web Offset Printing — Flagship"
      description="Orient's flagship web-offset press at 50,000 copies per hour. Dynamically-balanced solid stainless steel cylinders preloaded in nickel double-row taper roller bearings, Siemens PLC with colour touchscreen console, and ink/water balance controlled through the screen."
      speed="Up to 50,000 cph"
      features={[
        "Solid stainless steel plate and blanket cylinders, preloaded in nickel double-row taper roller bearings",
        "Hardened and ground bushes in frames for cylinder sleeves",
        "Motorized ink fountain rollers with swing-down lever fountain",
        "Slit-type plate lock-up with quick-positioning pins; half-plate possible",
        "Narrow gap blanket lock-up",
        "Motorized side and circumferential register for both plate cylinders",
        "Variable-speed motorized brushmist dampening",
        "Pneumatic on/off for main impression, ink feed, ink form and damper",
        "Siemens PLC + colour touchscreen console; ink/water balance, registration and pagination from one screen",
        "Centralized water circulation with chiller, reverse inching",
      ]}
      specs={[
        { label: "Speed", value: "50,000 cph" },
        { label: "Paper Width", value: "700 – 915 mm" },
        { label: "Max Reel Diameter", value: "1,070 mm (42\")" },
        { label: "Plate Width", value: "915 mm" },
        { label: "Plate Thickness", value: "0.28 / 0.30 mm" },
        { label: "Blanket Thickness (w/ packing)", value: "2.1 mm" },
        { label: "Paper Grammage (Uncoated)", value: "38 – 100 gsm" },
        { label: "Available Cut-offs", value: "533 · 546 · 578 mm" },
        { label: "Console", value: "Siemens Colour Touchscreen" },
      ]}
      configurations={["Mono Unit", "3-Colour Satellite", "4 High Tower"]}
      images={[
        "/images/web-offset-hero-dark.jpg",
        "/images/web-offset-hero-showroom.jpg",
        "/images/prod-xpress-2.jpg",
        "/images/prod-xpress-3.jpg",
        "/images/prod-xpress-4.jpg",
      ]}
      videoFile="/videos/offset-final.mp4"
    />
  );
}
