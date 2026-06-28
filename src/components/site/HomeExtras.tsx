import { motion } from "framer-motion";
import { Quote, MapPin, DollarSign, CheckCircle2, Sparkles, Clock, Handshake, Rocket, BadgeCheck, Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import mihirAsset from "@/assets/mihir.png.asset.json";

/* ---------------- Logo Marquee ---------------- */
const brands: { name: string; color: string; logo: string }[] = [
  { name: "Google", color: "#4285F4", logo: "/logos/google_com.png" },
  { name: "Meta", color: "#0467DF", logo: "/logos/meta_com.png" },
  { name: "Amazon", color: "#FF9900", logo: "/logos/amazon_com.jpg" },
  { name: "Microsoft", color: "#00A4EF", logo: "/logos/microsoft_com.png" },
  { name: "TikTok", color: "#FE2C55", logo: "/logos/tiktok_com.png" },
  { name: "PayPal", color: "#003087", logo: "/logos/paypal_com.png" },
  { name: "Intel", color: "#0071C5", logo: "/logos/intel_com.png" },
  { name: "Accenture", color: "#A100FF", logo: "/logos/accenture_com.jpg" },
  { name: "Capital One", color: "#D03027", logo: "/logos/capitalone_com.png" },
  { name: "Chase", color: "#117ACA", logo: "/logos/chase_com.png" },
  { name: "Fidelity", color: "#368727", logo: "/logos/fidelity_com.png" },
  { name: "Discover", color: "#FF6000", logo: "/logos/discover_com.png" },
  { name: "Stripe", color: "#635BFF", logo: "/logos/stripe_com.jpg" },
  { name: "Bank of America", color: "#E31837", logo: "/logos/bankofamerica_com.png" },
  { name: "Verisk", color: "#0033A0", logo: "/logos/verisk_com.png" },
  { name: "Freddie Mac", color: "#006633", logo: "/logos/freddiemac_com.png" },
  { name: "Amgen", color: "#0063C3", logo: "/logos/amgen_com.jpg" },
];

export function BrandMarquee() {
  return (
    <section className="border-y border-border bg-surface/60 py-14">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Candidates placed in
        </p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-[marquee_45s_linear_infinite] items-center gap-14 pr-14">
            {[...brands, ...brands].map((b, i) => (
              <div
                key={i}
                title={b.name}
                className="group flex flex-col items-center gap-1.5"
              >
                <img
                  src={b.logo}
                  alt={b.name}
                  className="h-10 w-auto max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                  }}
                />
                <span
                  style={{ color: b.color }}
                  className="font-display text-[11px] font-semibold tracking-tight"
                >
                  {b.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}




/* ---------------- What Is XSpark ---------------- */
const pillars = [
  { icon: Rocket, title: "Careers, Not Just Jobs", desc: "We place candidates in roles that build long-term careers — not stop-gap gigs." },
  { icon: Clock, title: "Deadlines Mean Deadlines", desc: "When we commit to a timeline, hiring and placements move forward exactly when we say." },
  { icon: Handshake, title: "Partnership Driven", desc: "We don't disappear after one role — we build long-term partnerships that grow with you." },
  { icon: Sparkles, title: "Continuous Innovation", desc: "The hiring world moves fast. We evolve our process constantly to deliver smarter results." },
];

export function WhatIsXSpark() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">So, what is XSpark?</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-5xl">
            Hiring without the <span className="text-primary">usual chaos</span>
          </h2>

          <p className="mt-5 text-muted-foreground">
            XSpark Careers is built on a simple idea: great talent shouldn't struggle to find the right opportunities, and great companies shouldn't drown in resumes. We work closely with professionals to understand their skills and ambitions, while helping businesses hire smarter, faster, and more reliably — from job placement and recruitment to staffing and full talent acquisition.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="tilt-card group h-full rounded-2xl border border-border bg-card p-6">

                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Yearly Growth ---------------- */
const years = [
  { y: "2021", n: 130 }, { y: "2022", n: 188 }, { y: "2023", n: 234 },
  { y: "2024", n: 376 }, { y: "2025", n: 385 }, { y: "2026", n: 437 },
];
const max = Math.max(...years.map(y => y.n));

export function YearlyGrowth() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Success since our establishment</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold md:text-5xl">
            1,750+ careers launched — and counting
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Year over year, we've grown the network, the placements, and the careers we shape — together with our partners.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-6">
          {years.map((yr, i) => (
            <Reveal key={yr.y} delay={i * 0.05}>
              <div className="flex h-56 flex-col justify-end rounded-2xl border border-border bg-card p-4">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(yr.n / max) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                  className="w-full rounded-lg gradient-primary shadow-glow"
                />
                <p className="mt-3 font-display text-2xl font-bold text-navy">
                  <Counter to={yr.n} suffix="+" />
                </p>
                <p className="text-xs text-muted-foreground">Candidates · {yr.y}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { v: "97.8%", l: "Placement success rate" },
            { v: "12+", l: "Years of experience" },
            { v: "4+", l: "Countries covered" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-6 text-center shadow-glow">
              <p className="font-display text-3xl font-bold text-gradient-dark md:text-4xl">{s.v}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured Case Study ---------------- */
export function FeaturedCaseStudy() {
  return (
    <section className="container-x py-20 md:py-28">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Featured success story</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
          From uncertainty to a <span className="text-primary">$140K offer</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-elegant">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full gradient-primary opacity-40 blur-3xl" />
            <div className="relative">
              <img
                src="/avatars/f-1.jpg"
                alt="Vijayalakshmi Talla"
                className="h-20 w-20 rounded-2xl object-cover ring-2 ring-white/20"
              />
              <p className="mt-5 font-display text-2xl font-bold">Vijayalakshmi Talla</p>
              <p className="text-sm text-white/70">AI-Enabled Data Engineer · Intellias, Ohio</p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
                <div className="rounded-xl bg-white/5 p-3">
                  <DollarSign className="mx-auto h-4 w-4 text-emerald" />
                  <p className="mt-1 font-semibold">$140K</p>
                  <p className="text-white/60">Package</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <MapPin className="mx-auto h-4 w-4 text-emerald" />
                  <p className="mt-1 font-semibold">Ohio</p>
                  <p className="text-white/60">USA</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <BadgeCheck className="mx-auto h-4 w-4 text-primary" />
                  <p className="mt-1 font-semibold">Full-time</p>
                  <p className="text-white/60">Verified</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <Quote className="h-8 w-8 text-primary" />
            <p className="mt-4 text-lg leading-relaxed text-foreground/85">
              "An impressive package, a clear role, and a team that believed in me end-to-end. XSpark didn't just place me — they reshaped how I approached every interview."
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { t: "The Situation", d: "Navigating a competitive U.S. job market while looking for a role aligned to her data engineering background and long-term growth." },
                { t: "Our Approach", d: "Targeted positioning for AI/Data roles, mock interviews, recruiter outreach, and end-to-end offer support." },
                { t: "The Result", d: "Secured a full-time AI-Enabled Data Engineer role at Intellias with a $140K package — and a new chapter unlocked." },
              ].map((b) => (
                <div key={b.t}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">{b.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {[
                "Strategic positioning for AI & data roles",
                "Consistent interview preparation",
                "Continuous guidance through every round",
                "Full offer evaluation & negotiation support",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Featured Case Study: Mihir Patel ---------------- */
export function FeaturedCaseStudyMihir() {
  return (
    <section className="container-x py-20 md:py-28">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Featured success story</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
          From portfolio to a <span className="text-primary">$95K offer</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-elegant">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full gradient-primary opacity-40 blur-3xl" />
            <div className="relative">
              <img
                src={mihirAsset.url}
                alt="Mihir Patel"
                className="h-20 w-20 rounded-2xl object-cover ring-2 ring-white/20"
              />
              <p className="mt-5 font-display text-2xl font-bold">Mihir Patel</p>
              <p className="text-sm text-white/70">Full Stack Developer · CGI, Toronto</p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
                <div className="rounded-xl bg-white/5 p-3">
                  <DollarSign className="mx-auto h-4 w-4 text-emerald" />
                  <p className="mt-1 font-semibold">$95K</p>
                  <p className="text-white/60">Package</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <MapPin className="mx-auto h-4 w-4 text-emerald" />
                  <p className="mt-1 font-semibold">Toronto</p>
                  <p className="text-white/60">Canada</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <BadgeCheck className="mx-auto h-4 w-4 text-primary" />
                  <p className="mt-1 font-semibold">Full-time</p>
                  <p className="text-white/60">Verified</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <Quote className="h-8 w-8 text-primary" />
            <p className="mt-4 text-lg leading-relaxed text-foreground/85">
              "XSpark helped me bridge the gap between freelance work and enterprise development. Their technical interview prep and system design coaching gave me the confidence to land a role at a global consulting firm."
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { t: "The Situation", d: "Building a career transition from freelance web development to enterprise full-stack roles in Toronto's competitive tech market." },
                { t: "Our Approach", d: "Full-stack positioning, system design sessions, technical interview drills, and recruiter introductions to top consulting firms." },
                { t: "The Result", d: "Secured a full-time Full Stack Developer role at CGI with a $95K package — transitioning from freelance to enterprise." },
              ].map((b) => (
                <div key={b.t}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">{b.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {[
                "Full-stack positioning for enterprise roles",
                "System design and architecture preparation",
                "Continuous technical interview coaching",
                "Full offer evaluation & negotiation support",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {p}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift-sm group flex items-center gap-4 rounded-2xl bg-navy p-5 text-white transition hover:bg-navy/90"
              >

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10">
                  <Play className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Watch Mihir's Story</p>
                  <p className="text-xs text-white/60">YouTube · Coming soon</p>
                </div>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Live Placements Ticker ---------------- */
const live = [
  { name: "Vijayalakshmi", company: "Intellias", role: "AI Data Engineer", loc: "Ohio", pkg: "140K", photo: "/avatars/f-1.jpg" },
  { name: "Vishnu Raman", company: "Fiserv", role: "Product Manager", loc: "Milwaukee, WI", pkg: "180K", photo: "src/assets/All images of xsc/Vishnu Raman.jpg" },
  { name: "Ayesha Rahman", company: "Verisk", role: "Associate Scientist", loc: "Ontario", pkg: "100K CAD", photo: "src/assets/All images of xsc/Ayesha Rahman.jpg" },
  { name: "Lily Parker", company: "RK Industries", role: "Project Engineer", loc: "Abilene, TX", pkg: "80K", photo: "src/assets/All images of xsc/Lily Parker.jpg" },
  { name: "Vivek Sharma", company: "EY", role: "Tech Round Scheduled", loc: "New York", pkg: "In progress", photo: "src/assets/All images of xsc/Vivek Sharma.jpg" },
  { name: "Oluwaseun Adeyemi", company: "Dexian", role: "Interviewing", loc: "Virginia", pkg: "Negotiation", photo: "src/assets/All images of xsc/Oluwaseun Adeyemi.jpg" },
];


export function LivePlacements() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-600">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 pulse-ring" />
            Live · recently updated
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold md:text-5xl">
            Real placements happening right now
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {live.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover-lift">

              <div className="flex items-center justify-between">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="h-12 w-12 rounded-xl object-cover ring-2 ring-primary/20"
                  loading="lazy"
                />
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  <BadgeCheck className="h-3 w-3" /> Verified
                </span>
              </div>
              <p className="mt-4 font-display text-lg font-bold text-navy">{p.name}</p>

              <p className="text-sm text-muted-foreground">{p.role} · {p.company}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {p.loc}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-primary"><DollarSign className="h-3 w-3" /> {p.pkg}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Candidate Gallery ---------------- */
const candidates = [
  { name: "Aadhya Patel", role: "IT Analyst", photo: "src/assets/All images of xsc/Aadhya Patel.jpg" },
  { name: "Abhinav Joshi", role: "Supply Chain Analyst", photo: "src/assets/All images of xsc/Abhinav Joshi.jpg" },
  { name: "Abimbola Ogunleye", role: "Software Engineer", photo: "src/assets/All images of xsc/Abimbola Ogunleye.jpg" },
  { name: "Adewale Adebayo", role: "Senior Associate", photo: "src/assets/All images of xsc/Adewale Adebayo.jpg" },
  { name: "Anaya Mehta", role: "Sr. Financial Analyst", photo: "src/assets/All images of xsc/Anaya Mehta.jpg" },
  { name: "Vihaan Patel", role: "Sr. Project Manager", photo: "src/assets/All images of xsc/Vihaan Patel.jpg" },
  { name: "Ava Martinez", role: "Senior Associate", photo: "src/assets/All images of xsc/Ava Martinez.jpg" },
  { name: "Thomas Richardson", role: "Consultant", photo: "src/assets/All images of xsc/Thomas Richardson.jpg" },
  { name: "Ayesha Rahman", role: "Financial Analyst", photo: "src/assets/All images of xsc/Ayesha Rahman.jpg" },
  { name: "Vivaan Desai", role: "Project Engineer", photo: "src/assets/All images of xsc/Vivaan Desai.jpg" },
  { name: "Lily Parker", role: "Construction Manager", photo: "src/assets/All images of xsc/Lily Parker.jpg" },
  { name: "Vishnu Raman", role: "Software Engineer", photo: "src/assets/All images of xsc/Vishnu Raman.jpg" },
  { name: "Myra Shah", role: "Business Analyst", photo: "src/assets/All images of xsc/Myra Shah.jpg" },
  { name: "Vamsi Krishna Naidu", role: "Cloud Engineer", photo: "src/assets/All images of xsc/Vamsi Krishna Naidu.jpg" },
  { name: "Sophia Clark", role: "Financial Analyst", photo: "src/assets/All images of xsc/Sophia Clark.jpg" },
  { name: "Ryan Mitchell", role: "Senior Consultant", photo: "src/assets/All images of xsc/Ryan Mitchell.jpg" },
];

export function CandidateGallery() {
  const firstRow = candidates.slice(0, 8);
  const secondRow = candidates.slice(8);

  return (
    <section className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Real success, real stories</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
            Faces behind the wins
          </h2>
        </Reveal>

        {/* Row 1: left to right */}
        <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)]">
          <div className="flex w-max animate-[gallery-ltr_35s_linear_infinite] items-stretch gap-3">
            {[...firstRow, ...firstRow].map((c, i) => (
              <CandidateCard key={`r1-${c.name}-${i}`} candidate={c} />
            ))}
          </div>
        </div>

        {/* Row 2: right to left */}
        <div className="mt-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)]">
          <div className="flex w-max animate-[gallery-rtl_40s_linear_infinite] items-stretch gap-3">
            {[...secondRow, ...secondRow].map((c, i) => (
              <CandidateCard key={`r2-${c.name}-${i}`} candidate={c} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gallery-ltr {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @keyframes gallery-rtl {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function CandidateCard({ candidate }: { candidate: { name: string; role: string; photo: string } }) {
  return (
    <div className="group w-[170px] shrink-0 rounded-2xl border border-border bg-card p-5 text-center hover-lift sm:w-[200px]">
      <img
        src={candidate.photo}
        alt={candidate.name}
        className="mx-auto h-[72px] w-[72px] rounded-full object-cover ring-2 ring-primary/20 transition group-hover:ring-primary/40"
        loading="lazy"
      />
      <p className="mt-4 truncate text-sm font-semibold text-navy">{candidate.name}</p>
      <p className="truncate text-[11px] text-muted-foreground">{candidate.role}</p>
      <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
        <BadgeCheck className="h-3.5 w-3.5" /> Verified
      </span>
    </div>
  );
}
