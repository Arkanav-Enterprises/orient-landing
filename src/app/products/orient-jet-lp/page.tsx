import ProductPage from "@/components/ProductPage";

export default function OrientJetLPPage() {
  return (
    <ProductPage
      name="Orient Jet L&P Series"
      category="Digital Inkjet Printing — UV"
      description="UV inkjet press with high-speed, substrate-versatile printing on paper, plastics, and metals. Eco-friendly with no VOCs."
      features={[
        "UV inkjet technology",
        "Substrate versatile: paper, plastics, metals",
        "Eco-friendly: no VOCs",
        "Variable Data Printing (VDP) capable",
        "High-speed production",
      ]}
      specs={[
        { label: "Technology", value: "UV Inkjet" },
        { label: "Substrates", value: "Paper, Plastics, Metals" },
        { label: "VDP", value: "Capable" },
      ]}
      videoId="U4i-Szo_d9U"
    />
  );
}
