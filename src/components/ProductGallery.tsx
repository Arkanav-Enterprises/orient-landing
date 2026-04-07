"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  images,
  alt,
}: {
  images?: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const hasImages = images && images.length > 0;

  return (
    <div className="flex flex-col gap-4">
      {/* Thumbnail strip — only if more than one image */}
      {hasImages && images.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className="relative rounded-[4px] overflow-hidden transition-all shrink-0"
              style={{
                width: 72,
                height: 56,
                border: i === active ? "2px solid #1C1B1D" : "2px solid transparent",
                opacity: i === active ? 1 : 0.55,
              }}
              aria-label={`View image ${i + 1}`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="72px" />
            </button>
          ))}
        </div>
      )}

      {/* Main image */}
      <div className="relative bg-[#f5f5f4] rounded-[6px] overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
        {hasImages ? (
          <Image
            key={images[active]}
            src={images[active]}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-near-black/10 text-[14px] font-medium">Product Image</span>
          </div>
        )}
      </div>
    </div>
  );
}
