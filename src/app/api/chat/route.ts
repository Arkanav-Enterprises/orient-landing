import Anthropic from "@anthropic-ai/sdk";
import fs from "node:fs";
import path from "node:path";
import { specsAsMarkdown } from "@/lib/machine-specs";

// Prompt copy is editorial — lives in content/orient-ai.md so non-engineers
// can tweak wording without touching code. Spec data is injected from
// src/lib/machine-specs.ts via {{specs_*}} placeholders so the prompt can
// never drift from the on-page comparison table.
const PROMPT_TEMPLATE = fs.readFileSync(
  path.join(process.cwd(), "content", "orient-ai.md"),
  "utf8",
);

const SYSTEM_PROMPT = PROMPT_TEMPLATE
  .replace(/^<!--[\s\S]*?-->\s*/, "")
  .replace("{{specs_c_series}}", specsAsMarkdown(0))
  .replace("{{specs_lp_series}}", specsAsMarkdown(1))
  .replace("{{specs_offset}}", specsAsMarkdown(2))
  .replace("{{specs_flexo}}", specsAsMarkdown(3));

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response("API key not configured", { status: 500 });
  }

  try {
    const { messages, product } = await req.json();
    const client = new Anthropic({ apiKey });

    const system = product
      ? `${SYSTEM_PROMPT}

CRITICAL SCOPE RULE: The user is currently on the ${product} product page. You MUST ONLY answer questions specifically about ${product}. For ANY question about other Orient machines, other printing equipment, pricing of other products, or unrelated topics, politely redirect: "I'm here to help with questions about ${product} specifically. For other Orient machines, please visit the main Orient AI chat on our homepage or contact sales at tphho@tphorient.com." Do not volunteer information about other products even if it seems relevant. Stay strictly focused on ${product}.`
      : SYSTEM_PROMPT;

    const stream = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system,
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
          controller.enqueue(encoder.encode("I'm sorry, I'm unable to answer you at the moment. Please contact our sales team at tphho@tphorient.com."));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Chat API error:", message, err);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
