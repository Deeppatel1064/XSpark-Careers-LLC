import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  variant = "dark-blue",
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  variant?: "light" | "dark-blue";
}) {
  const isDarkBlue = variant === "dark-blue";
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="absolute inset-0 -z-10 gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" aria-hidden="true" />
      <div className="absolute -bottom-20 left-1/2 h-80 w-[120%] -translate-x-1/2 rounded-[50%] bg-white" aria-hidden="true" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`mx-auto max-w-3xl text-center ${isDarkBlue ? "text-navy" : "text-white"}`}
        >
          <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${isDarkBlue ? "border-navy/15 bg-navy/5 text-navy" : "border-white/15 bg-white/5 text-emerald"}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${isDarkBlue ? "bg-navy" : "bg-emerald"}`} /> {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
            {title}
          </h1>
          <p className={`mx-auto mt-5 max-w-2xl text-base md:text-lg ${isDarkBlue ? "text-navy/75" : "text-white/75"}`}>{description}</p>
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}

export function CTAButtons({ variant = "light" }: { variant?: "light" | "dark-blue" }) {
  const isDarkBlue = variant === "dark-blue";
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Link
        to="/contact"
        className={`hover-lift-sm rounded-full px-6 py-3 text-sm font-semibold shadow-glow ${isDarkBlue ? "bg-navy text-white" : "gradient-primary text-primary-foreground"}`}
      >
        Schedule Consultation
      </Link>
      <Link
        to="/job-seekers"
        className={`hover-lift-sm rounded-full border px-6 py-3 text-sm font-semibold backdrop-blur ${isDarkBlue ? "border-navy/20 bg-navy/5 text-navy hover:bg-navy/10" : "border-white/20 bg-white/5 text-white hover:bg-white/10"}`}
      >
        Explore Careers
      </Link>
    </div>

  );
}
