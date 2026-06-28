import { useEffect, useRef, useState } from "react";
import globeVideo from "@/assets/globe-user-video.mp4.asset.json";

export function GlobeVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      setTilt({ x: dx * 12, y: dy * 12 });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // The video background is baked to match the hero background (#e2e5e8)
  // so no blend mode or heavy mask is required for seamless integration.
  // Feather only the very outer edge so the globe + labels stay fully visible.
  const featherMask =
    "radial-gradient(circle at 50% 50%, #000 0%, #000 82%, rgba(0,0,0,0.30) 89%, rgba(0,0,0,0.10) 94%, transparent 99%)";

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[440px] animate-fade-in sm:max-w-[560px] lg:ml-auto lg:max-w-[640px] xl:max-w-[720px]"
      style={{
        transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0) scale(1)`,
        transition: "transform 0.5s ease-out",
      }}
    >
      {/* Soft neutral glow halo behind the globe to blend with the grey hero background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklab, white 22%, transparent) 0%, color-mix(in oklab, white 10%, transparent) 45%, transparent 72%)",
          filter: "blur(60px)",
          transform: "scale(1.05)",
        }}
      />
      <div
        className="relative bg-transparent"
        style={{ animation: "globeFloat 7s ease-in-out infinite" }}
      >
        <video
          src={globeVideo.url}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="block h-auto w-full origin-center scale-[1.05] bg-transparent lg:scale-[1.15]"
          style={{
            // Background is baked to match the hero (#e2e5e8); no blend mode needed.
            filter: "contrast(1.02) saturate(1.05)",
            WebkitMaskImage: featherMask,
            maskImage: featherMask,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
          aria-hidden="true"
        />
      </div>
      <style>{`
        @keyframes globeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}
