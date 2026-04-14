import ProductPage from "@/components/ProductPage";

export default function OrientXPressPage() {
  return (
    <ProductPage
      name="Orient X-Press"
      category="Web Offset Printing — Flagship"
      description="Orient's flagship web offset press with stainless steel cylinders on Timken bearings, touchscreen console, and automated reel changers."
      speed="Up to 50,000 cph"
      features={[
        "Stainless steel cylinders on Timken bearings",
        "Narrow gap turn bar blanket",
        "Touchscreen console with MMI",
        "Automated reel changers",
        "Shaftless drives",
        "Auto registration system",
      ]}
      specs={[
        { label: "Speed", value: "50,000 cph" },
        { label: "Cylinders", value: "Stainless Steel / Timken" },
        { label: "Console", value: "Touchscreen MMI" },
        { label: "Reel Change", value: "Automated" },
      ]}
      configurations={["Full Tower", "Double Width"]}
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
