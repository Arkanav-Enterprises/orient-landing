import ProductPage from "@/components/ProductPage";

export default function OrientStandardPage() {
  return (
    <ProductPage
      name="Orient Standard"
      category="Web Offset Printing"
      description="Single-width, single-circumference web-offset press designed for newspaper, tabloid, book, and semi-commercial printing."
      speed="Up to 16,000 cph"
      features={[
        "Hard chromium cylinders",
        "Centralized oil lubrication",
        "PU dampening system",
        "Mono unit with integral reel stand",
        "3-Colour Satellite configuration",
      ]}
      specs={[
        { label: "Type", value: "Single-width" },
        { label: "Speed", value: "16,000 cph" },
        { label: "Application", value: "Newspaper, Tabloid, Book" },
      ]}
      configurations={["Mono Unit", "3-Colour Satellite"]}
    />
  );
}
