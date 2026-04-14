import { NextRequest, NextResponse } from "next/server";

const ALLOWED_FILES = new Set([
  "orient-super.pdf",
  "xcel.pdf",
  "xpress.pdf",
  "xlc.pdf",
  "xpress-flex.pdf",
  "orient-jet-c-series.pdf",
  "orient-jet-lp-series.pdf",
  "folders.pdf",
  "after-sales-services.pdf",
  "orient-printpack-profile.pdf",
]);

export async function GET(req: NextRequest) {
  const file = req.nextUrl.searchParams.get("file");
  if (!file || !ALLOWED_FILES.has(file)) {
    return NextResponse.json({ error: "Invalid file" }, { status: 400 });
  }

  return NextResponse.redirect(new URL(`/assets/pdf/${file}`, req.url), 302);
}
