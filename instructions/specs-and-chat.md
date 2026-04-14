# Feature: Specifications Section + AI Chat Widget

Two features on the Orient landing page: a machine specifications section with dropdown selector and integrated AI chat, both in `src/components/Specifications.tsx`.

---

## 1. Specifications Section

### Location
`src/components/Specifications.tsx` — imported in `src/app/page.tsx` after `<Products />`.

### Machine dropdown — exactly 4 machines
The dropdown must contain **only** these 4 Orient Jet digital press variants. No other product lines (Offset, Flexo) appear here:

| Dropdown Label | Subtitle |
|---|---|
| Orient Jet C-Series | 600 dpi · Duplex Digital Press |
| Orient Jet C-Series | 1200 dpi · High-Res Duplex |
| Orient Jet L&P Series | 600 dpi · Label & Packaging |
| Orient Jet L&P Series | 1200 dpi · High-Res L&P |

### Spec rows per machine

| Spec Label | C-Series 600 dpi | C-Series 1200 dpi | L&P 600 dpi | L&P 1200 dpi |
|---|---|---|---|---|
| Print Head Technology | Kyocera RC / Katana / Epson D / I / S | Kyocera RC only | Kyocera Katana / Epson D | Kyocera Katana / Epson D |
| Resolution | 600 x 600 dpi | 1200 dpi | 600 x 600 dpi | 1200 dpi |
| Max Print Width | 1080 mm (324–1080 mm in 108mm steps) | Same | Same | Same |
| Print Speed | Up to 100 m/min (RC) · 75 (Katana) · 80 (Epson D) | Up to 100 m/min | Up to 75 m/min (Katana) · 80 (Epson D) | Same as L&P 600 |
| Duplex / Simplex | Duplex (both sides) | Duplex | Simplex (single side) | Simplex |
| Colours | Up to 4 (CMYK) | Up to 4 (CMYK) | Up to 4 (CMYK), expandable | Up to 4, expandable |
| Media Support | Coated & Uncoated, 40–240 g/m² | Same | Same | Same |
| Ink System | Orientjet IDS · Aqueous-based | Same | Same | Same |
| Electronics | Meteor, UK | Same | Same | Same |
| RIP + Server | Harlequin RIP with VDP · HP/Dell Server | Same | Same | Same |
| Finishing | In-Line Sheeter · Offline Sheeter · Folder | Same | Same | Same |

---

## 2. AI Chat Widget

### New files needed

**`src/app/api/chat/route.ts`** — Streaming API endpoint

```
POST /api/chat
Body: { messages: [{ role: "user"|"assistant", content: string }] }
Response: streamed text/plain (chunked transfer encoding)
```

- Install `@anthropic-ai/sdk` as a dependency
- Use `claude-haiku-4-5-20251001` model (fast, cheap — right for FAQ queries)
- `max_tokens: 512` (spec answers are short)
- System prompt scoped to Orient Jet specs only (see below)
- Stream via `client.messages.stream()` → `ReadableStream` with `for await` loop
- Requires `ANTHROPIC_API_KEY` in `.env.local`

**System prompt for the chat API:**
```
You are Orient Jet's product specialist — a helpful, concise assistant that answers questions about Orient Jet digital printing machines made by The Printers House Pvt. Ltd.

You know about these machine lines:

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

Rules:
- Keep answers short and factual (2-4 sentences unless detail is requested)
- If asked about pricing, say "Pricing depends on configuration — please contact our sales team for a quote"
- If asked something outside Orient Jet machines, politely redirect
- Never make up specs — if unsure, say so
```

**`src/components/ChatWidget.tsx`** — Floating chat UI

### Chat widget UX

**Collapsed state:** Fixed bottom-right floating button
- `position: fixed; bottom: 24px; right: 24px; z-index: 50`
- Red background (`bg-orient-red`), white text
- Chat bubble SVG icon + "Ask about our machines" label
- Hover: `scale(1.05)` transition

**Expanded state:** Chat panel (fixed bottom-right)
- Width: `380px`, max-width: `calc(100vw - 2rem)`
- Height: `min(520px, calc(100vh - 3rem))`
- Dark theme to match the site: `bg-[#111]` panel, `border border-white/10`
- Header bar: Orient red background, "Orient Jet Specialist" title, close (X) button
- Message area: scrollable, auto-scroll to bottom on new messages
  - User messages: red bubbles (`bg-orient-red text-white`), right-aligned
  - Assistant messages: dark surface (`bg-[#1a1a1a] text-white/80`), left-aligned
- Empty state: short prompt + 3 suggested question buttons:
  - "What is the max print width?"
  - "C-Series vs L&P Series?"
  - "What print heads are available?"
  - Clicking fills the input (doesn't auto-send)
- Input area: dark input field + red send button with arrow SVG
- Streaming: show tokens as they arrive using `response.body.getReader()` + `TextDecoder`
- Disable send button while streaming

### State management
- `useState` for: `open` (boolean), `input` (string), `messages` (array), `streaming` (boolean)
- `useRef` for scroll container (auto-scroll on new messages)
- `useEffect` to scroll to bottom when messages change

### Streaming fetch pattern
```ts
const res = await fetch("/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ messages: conversationHistory }),
});
const reader = res.body.getReader();
const decoder = new TextDecoder();
let text = "";
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  text += decoder.decode(value, { stream: true });
  // Update the last message in state with accumulated text
}
```

### Integration
Import `ChatWidget` in `src/app/page.tsx` and render it **after `<Footer />`** (it's fixed-position so DOM order doesn't matter, but keeping it last is cleanest).

---

## 3. Dependencies to install

```bash
npm install @anthropic-ai/sdk
```

Plus add to `.env.local`:
```
ANTHROPIC_API_KEY=sk-ant-...
```

---

## Summary of changes

| File | Action |
|---|---|
| `src/components/Specifications.tsx` | Create — tabbed specs section |
| `src/components/ChatWidget.tsx` | Create — floating AI chat |
| `src/app/api/chat/route.ts` | Create — streaming Claude API endpoint |
| `src/app/page.tsx` | Modify — import Specifications + ChatWidget |
| `.env.local` | Add `ANTHROPIC_API_KEY` |
| `package.json` | Add `@anthropic-ai/sdk` |
