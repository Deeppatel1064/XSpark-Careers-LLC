import { motion } from "framer-motion";

const COUNTRY_BADGES = [
  { name: "Canada", stat: "1.2K+", top: "12%", left: "22%" },
  { name: "USA", stat: "3.5K+", top: "34%", left: "14%" },
  { name: "UK", stat: "1K+", top: "18%", left: "46%" },
  { name: "Australia", stat: "800+", top: "70%", left: "74%" },
];

export function HeroWorldMap() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] sm:max-w-[520px] lg:max-w-[640px] xl:max-w-[720px]">
      {/* Soft halo behind the map */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, color-mix(in oklab, white 55%, transparent) 0%, color-mix(in oklab, white 22%, transparent) 42%, transparent 68%)",
          filter: "blur(40px)",
          transform: "scale(1.1)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
        style={{ animation: "mapFloat 8s ease-in-out infinite" }}
      >
        <img
          src="/hero-world-map.png"
          alt="Global recruitment coverage across USA, Canada, UK and Australia"
          width={1024}
          height={1024}
          className="block h-auto w-full"
          loading="eager"
        />

        {COUNTRY_BADGES.map((badge, i) => (
          <motion.div
            key={badge.name}
            className="absolute flex items-center gap-1.5 rounded-full border border-navy/10 bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-sm"
            style={{ top: badge.top, left: badge.left }}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: "easeOut" }}
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-semibold text-navy">{badge.name}</span>
            <span className="text-xs font-bold text-primary">{badge.stat}</span>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @keyframes mapFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
