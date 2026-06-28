// Global presence visual
import { motion } from "framer-motion";

const COUNTRIES = [
  { name: "USA", top: "32%", left: "18%" },
  { name: "Canada", top: "14%", left: "20%" },
  { name: "UK", top: "18%", left: "44%" },
  { name: "Australia", top: "68%", left: "72%" },
];

export function WorldMap() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-navy to-[oklch(0.2_0.05_254)] shadow-elegant">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <motion.img
        src="/global-presence.png"
        alt="Global presence — USA, Canada, UK, Australia"
        className="relative w-full object-cover"
        loading="lazy"
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {COUNTRIES.map((c) => (
        <motion.span
          key={c.name}
          className="absolute rounded-full bg-primary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground shadow-glow backdrop-blur-sm"
          style={{ top: c.top, left: c.left }}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {c.name}
        </motion.span>
      ))}
    </div>
  );
}
