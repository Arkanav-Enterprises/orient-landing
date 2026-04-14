import ProductPage from "@/components/ProductPage";

export default function FoldersPage() {
  return (
    <ProductPage
      name="Folders"
      category="Web Offset — Finishing"
      description="Five folder configurations for Orient web-offset presses, spanning 4 to 12 webs and speeds up to 50,000 cph — from economical 1:2 Standard to the flagship X-Press 1:2:2."
      speed="Up to 50,000 cph"
      features={[
        "Jaw 1:2 Standard — economical rugged 1:2 folder, 4 webs, 16,000 cph",
        "Jaw 1:2 Super — double RTF roller, 6 – 8 webs, 30,000 cph",
        "Jaw 2:2 Heavy Duty — two sets of nipping rollers, 8 webs, 36,000 cph",
        "Tucker — heavy-duty with balloon former, 10 webs, 50,000 cph",
        "X-Press 1:2:2 — flagship advanced folder, 12 webs, 50,000 cph",
        "Dynamically-balanced RTF, cutting and jaw cylinders across the range",
        "Pneumatic RTF trolley tyres and air formers (Heavy Duty and up)",
        "Options: 1/4 page folder, cross perforator, slitter on nipping rollers, upper former, fly-wheel delivery, cut-off compensator",
      ]}
      specs={[
        { label: "Models", value: "5 (1:2 Standard · 1:2 Super · 2:2 Heavy Duty · Tucker · X-Press 1:2:2)" },
        { label: "Max Speed", value: "50,000 cph (Tucker, X-Press 1:2:2)" },
        { label: "Max Webs", value: "12 (X-Press 1:2:2)" },
        { label: "Applications", value: "Broadsheet / Tabloid folding for web-offset presses" },
      ]}
      images={[
        "/images/prod-folders-1.jpg",
        "/images/prod-folders-2.jpg",
        "/images/prod-folders-3.jpg",
        "/images/prod-folders-4.jpg",
      ]}
      bannerImage="/images/prod-folders-banner.jpg"
    />
  );
}
