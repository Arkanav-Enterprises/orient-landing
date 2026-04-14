// Single source of truth for machine-family specs.
// Consumed by:
//   - src/components/Specifications.tsx  (homepage comparison table)
//   - src/app/api/chat/route.ts           (LLM system prompt)
//
// Values are sourced from the current product brochures in
// public/assets/pdf/. When a brochure is updated, update this file
// and the note in instructions/ at the same time.

export type Machine = {
  label: string;
  subtitle: string;
  img: string;
};

export const MACHINES: readonly Machine[] = [
  { label: "Orient Jet C-Series", subtitle: "Commercial Digital Inkjet", img: "/images/spec-jet-c.jpg" },
  { label: "Orient Jet L&P Series", subtitle: "Label & Packaging Inkjet", img: "/images/spec-jet-lp.jpg" },
  { label: "Orient Offset", subtitle: "Web Offset Press Range", img: "/images/spec-offset.jpg" },
  { label: "Orient X-Press Flex", subtitle: "Flexographic Press Range", img: "/images/spec-flex.jpg" },
] as const;

// values[] indices line up with MACHINES[]: [C-Series, L&P, Offset, X-Press Flex].
// Empty string = hide cell (and row, if column is currently active).
export type SpecRow = { label: string; values: readonly string[] };

export const SPECS: readonly SpecRow[] = [
  {
    label: "Type",
    values: [
      "Aqueous Inkjet Digital (Duplex)",
      "UV Inkjet Digital (Simplex)",
      "Web Offset",
      "Flexographic",
    ],
  },
  {
    label: "Application",
    values: [
      "Book, Commercial, Newspaper, Security",
      "Labels, Flexible Packaging",
      "Newspaper, Book, Commercial",
      "Labels, Films, Flexible Packaging",
    ],
  },
  {
    label: "Print Head / Plate",
    values: ["Custom Piezo DOD", "Custom Piezo DOD", "CTP Plates", "Photopolymer Plates"],
  },
  {
    label: "Resolution",
    values: ["600 / 1200 dpi", "600 / 1200 dpi", "Industry standard offset", "Up to 4800 dpi screening"],
  },
  {
    label: "Print Speed",
    values: [
      "Up to 100 m/min @ 600 dpi · 80 m/min @ 1200 × 1200 dpi · Optional 120 m/min @ 1200 × 900 dpi · 150 m/min @ 1200 × 600 dpi",
      "Up to 75 m/min",
      "Up to 50,000 cph (X-Press)",
      "180 m/min (Narrow/Mid) · 220 m/min (Wide)",
    ],
  },
  {
    label: "Colours",
    values: [
      "Mono or 4-Colour CMYK",
      "Up to 8 · White + CMYK + Orange / Violet / Green / Clear / Double White",
      "4 colours both sides",
      "Up to 12 colours",
    ],
  },
  {
    label: "Media Support",
    values: [
      "Coated & Uncoated paper, 40–250 g/m²",
      "Self-adhesive labels, vinyl, BOPP, PET, PE, PP, metallized films, coated stocks",
      "Newsprint to coated stock, 38–100 g/m²",
      "Films, foils, paper, board",
    ],
  },
  {
    label: "Ink System",
    values: [
      "Orient Jet Aqueous ink",
      "Orient Jet UV inks",
      "Conventional offset inks",
      "UV LED / Water-based / Solvent",
    ],
  },
  {
    label: "Curing",
    values: ["IR & Hot Air", "UV LED", "—", "UV LED · Hot Air · IR"],
  },
  {
    label: "Models",
    values: [
      "Orient Jet C-Series",
      "Orient Jet L&P Series",
      "Super · X-Cel · X-Press · XLC",
      "Narrow · Mid · Wide Web",
    ],
  },
  {
    // Hidden for L&P — finishing on that press is handled via the
    // hybrid flexo line (die-cut / lamination / slitting), not paper
    // finishing. Empty string collapses the row when L&P is active.
    label: "Finishing",
    values: [
      "In-line Sheeter · Folder",
      "",
      "Folders · Stackers",
      "Die-cutting · Lamination · Slitting",
    ],
  },
];

// Renders a machine's specs as a markdown bullet list for LLM prompts.
export function specsAsMarkdown(machineIndex: number): string {
  return SPECS.map((row) => {
    const v = row.values[machineIndex];
    return v ? `- **${row.label}:** ${v}` : null;
  })
    .filter(Boolean)
    .join("\n");
}
