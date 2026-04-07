"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  images,
  video,
  videoPoster,
  alt,
}: {
  images?: string[];
  video?: string;
  videoPoster?: string;
  alt: string;
}) {
  const imageItems = (images ?? []).map((src) => ({ kind: "image" as const, src }));
  const items: ({ kind: "image"; src: string } | { kind: "video"; src: string; poster?: string })[] =
    video
      ? [...imageItems, { kind: "video", src: video, poster: videoPoster }]
      : imageItems;

  const [active, setActive] = useState(0);
  const hasItems = items.length > 0;
  const current = items[active];

  return (
    <div className="flex flex-col gap-4">
      {/* Thumbnail strip — only if more than one item */}
      {hasItems && items.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {items.map((item, i) => (
            <button
              key={`${item.kind}-${item.src}`}
              onClick={() => setActive(i)}
              className="relative rounded-[4px] overflow-hidden transition-all shrink-0"
              style={{
                width: 72,
                height: 56,
                border: i === active ? "2px solid #1C1B1D" : "2px solid transparent",
                opacity: i === active ? 1 : 0.55,
              }}
              aria-label={item.kind === "video" ? "View video" : `View image ${i + 1}`}
            >
              {item.kind === "image" ? (
                <Image src={item.src} alt="" fill className="object-cover" sizes="72px" />
              ) : (
                <>
                  {item.poster && <Image src={item.poster} alt="" fill className="object-cover" sizes="72px" />}
                  {/* Play icon overlay */}
                  <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Main view */}
      <div className="relative bg-[#f5f5f4] rounded-[6px] overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
        {hasItems && current ? (
          current.kind === "image" ? (
            <Image
              key={current.src}
              src={current.src}
              alt={alt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          ) : (
            <video
              key={current.src}
              src={current.src}
              poster={current.poster}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="metadata"
              className="absolute inset-0 w-full h-full object-contain bg-black"
            />
          )
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-near-black/10 text-[14px] font-medium">Product Image</span>
          </div>
        )}
      </div>
    </div>
  );
}
