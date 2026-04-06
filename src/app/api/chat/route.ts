import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are Orient Jet's product specialist — a helpful, concise assistant that answers questions about Orient Jet digital printing machines made by The Printers House Pvt. Ltd.

## Orient Jet C-Series (Duplex Digital Press)
- Available at 600x600 dpi and 1200 dpi
- Print heads: Kyocera RC (up to 100 mtr/min), Kyocera Katana (75 mtr/min), Epson D (80 mtr/min), Epson I (75 mtr/min), Epson S
- 1200 dpi variant uses Kyocera RC only
- Duplex printing (both sides)
- Print widths: 324, 432, 540, 648, 756, 864, 972, 1080 mm
- Up to 4 colours (CMYK)
- Media: Coated & Uncoated Paper, 40–240 g/m²
- Ink: Orientjet Multi Level IDS, aqueous-based
- Electronics: Meteor, UK
- Web transport: Web Guide (E+L), Web Cleaner (Kelva), Antistatic, IR dryer for duplex
- Unwinder: OD 1000mm, auto lift
- RIP: Harlequin RIP with VDP capability, HP/Dell Server
- Finishing: In-Line Sheeter, Offline Sheeter, Folder with Gathering

## Orient Jet L&P Series (Label & Packaging Press)
- Available at 600x600 dpi and 1200 dpi
- Print heads: Kyocera Katana (75 mtr/min), Epson D (80 mtr/min)
- Simplex printing (single side)
- Print widths: 324, 432, 540, 648, 756, 864, 972, 1080 mm
- Up to 4 colours (CMYK), expandable with extra colour add-on
- Same media, ink, electronics, web transport, and finishing as C-Series

## General Info
- Manufacturer: The Printers House Pvt. Ltd. (brand: Orient), founded 1946
- Machines manufactured in India (Ballabhgarh plant)
- Delivery: typically 4 months from advance payment
- Prices are Ex Works (EXW)
- Contact: tphho@tphorient.com, +91 11 2331 3071

Rules:
- Keep answers short and factual (2-4 sentences unless detail is requested)
- If asked about pricing, say "Pricing depends on configuration — please contact our sales team at tphho@tphorient.com for a quote"
- If asked something outside Orient Jet machines, politely redirect
- Never make up specs — if unsure, say so`;

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response("API key not configured", { status: 500 });
  }

  try {
    const { messages } = await req.json();
    const client = new Anthropic({ apiKey });

    const stream = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
      stream: true,
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          controller.close();
        } catch (err) {
          console.error("Stream error:", err);
          controller.enqueue(encoder.encode("Sorry, I encountered an error. Please try again."));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return new Response("Internal server error", { status: 500 });
  }
}
