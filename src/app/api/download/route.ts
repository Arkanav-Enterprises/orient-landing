import { NextRequest, NextResponse } from "next/server";

const ALLOWED_FILES = new Set([
  "Orient-Standard_.pdf",
  "Orient-Super_.pdf",
  "X-CEL-28-1-25.pdf",
  "X-PRESS_.pdf",
  "ORIENT-XLC.pdf",
  "Folders_.pdf",
  "OrientJet.pdf",
  "xpress-flex-brochure28-1-25.pdf",
  "SPARE-PARTS_new.pdf",
  "AMC-Catalogue_new.pdf",
  "Orient-print-&-pack-profile28-1-25.pdf",
]);

const BASE = "https://www.tphorient.com/assets/pdf";

export async function GET(req: NextRequest) {
  const file = req.nextUrl.searchParams.get("file");
  if (!file || !ALLOWED_FILES.has(file)) {
    return NextResponse.json({ error: "Invalid file" }, { status: 400 });
  }

  const res = await fetch(`${BASE}/${encodeURIComponent(file)}`, { next: { revalidate: 86400 } });
  if (!res.ok) return NextResponse.json({ error: "File not found" }, { status: 404 });

  return new NextResponse(res.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${file}"`,
      "Cache-Control": "public, max-age=86400",
    },
  });
}
