"use client";

import { useRef, useEffect, useCallback } from "react";
import { geoOrthographic, geoPath, geoGraticule } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";

const WORLD_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Orient's key markets — lon/lat NEGATED for d3 rotation
const FOCUS: { id: string; name: string; lon: number; lat: number }[] = [
  { id: "356", name: "India", lon: -78, lat: -22 },
  { id: "840", name: "USA", lon: 95, lat: -38 },
  { id: "156", name: "China", lon: -104, lat: -35 },
  { id: "682", name: "Saudi Arabia", lon: -45, lat: -24 },
  { id: "566", name: "Nigeria", lon: -8, lat: -10 },
  { id: "076", name: "Brazil", lon: 52, lat: 14 },
  { id: "036", name: "Australia", lon: -134, lat: 25 },
  { id: "826", name: "UK", lon: 2, lat: -54 },
];

// All 44 Orient countries (ISO 3166-1 numeric)
const HIGHLIGHT_IDS = new Set([
  "004","012","032","036","050","056","076","124","152","156",
  "170","818","231","288","300","348","360","364","368","380",
  "400","404","414","484","504","104","524","528","554","566",
  "512","634","643","682","710","724","144","784","826","840",
  "862","704","887","716",
]);

const HOLD = 4;
const MOVE = 2;
const INTRO = 3;

function easeInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const worldRef = useRef<ReturnType<typeof feature> | null>(null);

  const draw = useCallback(() => {}, []); // placeholder, overwritten in effect

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animId: number;
    let startTime: number | null = null;
    let topo: Topology | null = null;

    // Load world data
    fetch(WORLD_URL)
      .then((r) => r.json())
      .then((data: Topology) => {
        topo = data;
        worldRef.current = feature(data, data.objects.countries) as any;
        startTime = performance.now();
        animId = requestAnimationFrame(render);
      });

    const graticule = geoGraticule().step([15, 15])();
    const projection = geoOrthographic().clipAngle(90);

    function render(now: number) {
      if (!ctx || !canvas || !worldRef.current || !startTime) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const size = Math.min(w, h);
      projection.translate([w / 2, h / 2]).scale(size / 2.2);

      const elapsed = (now - startTime) / 1000;
      const path = geoPath(projection, ctx);

      // Compute rotation
      let rotation: [number, number, number];
      if (elapsed < INTRO) {
        // Zoom in from India
        const t = easeInOut(Math.min(elapsed / INTRO, 1));
        const f = FOCUS[0];
        rotation = [f.lon, f.lat * t, 0];
      } else {
        const cycleTime = elapsed - INTRO;
        const totalCycle = HOLD + MOVE;
        const cyclePos = cycleTime % (FOCUS.length * totalCycle);
        const idx = Math.floor(cyclePos / totalCycle) % FOCUS.length;
        const phase = cyclePos - idx * totalCycle;

        const from = FOCUS[idx];
        const to = FOCUS[(idx + 1) % FOCUS.length];

        if (phase < HOLD) {
          rotation = [from.lon, from.lat, 0];
        } else {
          const t = easeInOut((phase - HOLD) / MOVE);
          rotation = [
            from.lon + (to.lon - from.lon) * t,
            from.lat + (to.lat - from.lat) * t,
            0,
          ];
        }
      }

      projection.rotate(rotation);

      // Clear — white background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);

      // Globe rim glow
      const center = projection.translate();
      const radius = projection.scale();
      const grad = ctx.createRadialGradient(
        center[0], center[1], radius * 0.95,
        center[0], center[1], radius * 1.15
      );
      grad.addColorStop(0, "rgba(200,195,160,0.06)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Ocean
      ctx.beginPath();
      path({ type: "Sphere" } as any);
      ctx.fillStyle = "rgba(221,221,220,1)";
      ctx.fill();

      // Graticule
      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = "rgba(28,27,29,0.06)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Countries
      const countries = (worldRef.current as any).features;
      for (const country of countries) {
        ctx.beginPath();
        path(country);
        if (HIGHLIGHT_IDS.has(country.id)) {
          ctx.fillStyle = "rgba(255,252,228,0.85)";
          ctx.strokeStyle = "rgba(200,195,160,0.6)";
          ctx.lineWidth = 0.8;
          ctx.fill();
          ctx.stroke();
        } else {
          ctx.fillStyle = "rgba(28,27,29,0.08)";
          ctx.strokeStyle = "rgba(28,27,29,0.12)";
          ctx.lineWidth = 0.3;
          ctx.fill();
          ctx.stroke();
        }
      }

      // Pin labels for current focus country
      const cycleTime = Math.max(0, elapsed - INTRO);
      const totalCycle = HOLD + MOVE;
      const idx = Math.floor((cycleTime % (FOCUS.length * totalCycle)) / totalCycle) % FOCUS.length;
      const focusCountry = FOCUS[idx];

      // Check if focus point is on visible hemisphere
      const lonLatPoint: [number, number] = [-focusCountry.lon, -focusCountry.lat];
      const projected = projection(lonLatPoint);
      if (projected) {
        const [px, py] = projected;

        // Pin dot
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#de2127";
        ctx.fill();

        // Pulse ring
        const pulsePhase = (elapsed * 2) % 1;
        ctx.beginPath();
        ctx.arc(px, py, 4 + pulsePhase * 12, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(222,33,39,${0.5 * (1 - pulsePhase)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label
        ctx.font = "500 13px Poppins, sans-serif";
        ctx.fillStyle = "rgba(28,27,29,0.7)";
        ctx.fillText(focusCountry.name, px + 10, py + 4);
      }

      // Rim border
      ctx.beginPath();
      path({ type: "Sphere" } as any);
      ctx.strokeStyle = "rgba(28,27,29,0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      animId = requestAnimationFrame(render);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
