import ProductPage from "@/components/ProductPage";

export default function OrientJetCPage() {
  return (
    <ProductPage
      name="Orient Jet C Series"
      category="Digital Inkjet Printing"
      description="Commercial inkjet press for book, commercial, newspaper, label, and packaging printing. First of the Orient line of inkjet presses."
      features={[
        "Book, commercial, newspaper, label, packaging",
        "Market-leading ROI",
        "Economical ink usage",
        "First Orient inkjet press",
      ]}
      specs={[
        { label: "Application", value: "Book, Commercial, Newspaper, Label, Packaging" },
        { label: "Ink", value: "Economical usage" },
      ]}
      videoId="hP0uOO0yPpo"
    />
  );
}
