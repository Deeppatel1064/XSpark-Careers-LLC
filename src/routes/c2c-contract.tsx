import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  FileSignature,
  Repeat,
  DollarSign,
  Building2,
  Headphones,
  CheckCircle2,
  Rocket,
  Zap,
  MapPin,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/c2c-contract")({
  head: () => ({
    meta: [
      { title: "C2C & Contract Opportunities — XSpark Careers" },
      {
        name: "description",
        content:
          "Premium C2C, Contract & Contract-to-Hire opportunities for USC, Green Card, Canadian PR & EAD holders across the USA and Canada.",
      },
      { property: "og:title", content: "C2C & Contract Opportunities — XSpark Careers" },
      {
        property: "og:description",
        content:
          "Connecting experienced consultants with high-paying contract & C2C roles at leading US & Canadian organizations.",
      },
    ],
    links: [{ rel: "canonical", href: "/c2c-contract" }],
  }),
  component: C2CContractPage,
});

const features = [
  { icon: Briefcase, title: "C2C Opportunities", desc: "Access exclusive Corp-to-Corp projects with top clients and implementation partners.", span: "md:col-span-2" },
  { icon: FileSignature, title: "Contract Positions", desc: "Explore short-term and long-term contract assignments across multiple industries." },
  { icon: Repeat, title: "Contract-to-Hire", desc: "Work on contract assignments with potential full-time conversion opportunities." },
  { icon: DollarSign, title: "High-Paying Projects", desc: "Get connected with competitive contract opportunities offering market-leading rates." },
  { icon: Building2, title: "Direct Client Opportunities", desc: "Access projects from direct clients and established implementation partners.", span: "md:col-span-2" },
  { icon: Headphones, title: "Dedicated Recruiter Support", desc: "Receive personalized assistance throughout the contract hiring process.", span: "md:col-span-3" },
];

const eligibility = [
  "U.S. Citizens (USC)",
  "Green Card Holders (GC)",
  "Canadian Permanent Residents (PR)",
  "EAD Holders",
  "Authorized Independent Consultants",
  "Experienced Contract Professionals",
];

const roles = [
  "Full Stack Developer","Java Developer",".NET Developer","React Developer","Angular Developer","Python Developer","Data Engineer","Data Analyst","Business Analyst","QA Automation Engineer","DevOps Engineer","Cloud Engineer","Cybersecurity Analyst","Salesforce Consultant","SAP Consultant","Project Manager","Scrum Master","Network Engineer",
];

const benefits = [
  { icon: Sparkles, title: "Exclusive Contract Openings" },
  { icon: Zap, title: "Fast Submission Process" },
  { icon: Building2, title: "Direct Client Access" },
  { icon: MapPin, title: "Nationwide Opportunities" },
  { icon: TrendingUp, title: "Competitive Pay Rates" },
  { icon: Headphones, title: "Dedicated Recruiter Assistance" },
];

const stats: { value: number; suffix?: string; label: string; display?: string }[] = [
  { value: 500, suffix: "+", label: "Contract Opportunities" },
  { value: 100, suffix: "+", label: "Client Networks" },
  { value: 95, suffix: "%", label: "Candidate Satisfaction" },
  { value: 0, label: "USA & Canada Coverage", display: "USA + CA" },
];

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Counter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 7}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => { const el = ref.current; if (!el) return; el.style.transform = ""; };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-glow transition-[transform,box-shadow] duration-300 hover:border-primary/40 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), hsl(var(--primary)/0.12), transparent 45%)" }}
      />
      {children}
    </div>
  );
}

function C2CContractPage() {
  return (
    <>
      <PageHero
        eyebrow="C2C & Contract Opportunities"
        title={<>Premium Contract & C2C Opportunities for <span className="text-gradient">Experienced Professionals</span></>}
        description="Connecting USC, Green Card Holders, Canadian PR Holders, and Authorized Professionals with high-paying Contract, C2C, and Consulting opportunities across leading organizations in the United States and Canada."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/job-seekers" className="hover-lift-sm rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
            Submit Resume
          </Link>
          <Link to="/contact" className="hover-lift-sm rounded-full border border-navy/20 bg-white/80 px-6 py-3 text-sm font-semibold text-navy backdrop-blur hover:bg-white">
            Talk to a Recruiter
          </Link>
        </div>
      </PageHero>

      {/* FEATURES BENTO */}
      <section className="container-x py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Built for serious contract professionals</h2>
          <p className="mt-3 text-muted-foreground">Six advantages that make XSpark Careers the home for premium contract work.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <TiltCard className={f.span ?? ""}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-glow transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Who Can Apply?</h2>
            <p className="mt-3 text-muted-foreground">We work with authorized professionals ready for their next contract engagement.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eligibility.map((e, i) => (
              <EligibilityBadge key={e} text={e} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* ROLES CAROUSEL */}
      <section className="py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Roles We Support</h2>
            <p className="mt-3 text-muted-foreground">From engineering to consulting — we cover the full stack of in-demand contract roles.</p>
          </div>
        </div>
        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex gap-4 marquee-roles">
            {[...roles, ...roles].map((r, i) => (
              <div key={`${r}-${i}`} className="shrink-0 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-navy shadow-sm hover:border-primary/40 hover:text-primary transition">
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Why Choose XSpark Careers for Contract Opportunities?</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="hover-lift group rounded-2xl border border-border bg-card p-6 shadow-glow hover:border-primary/40">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-glow transition-transform duration-500 group-hover:rotate-12">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy">{b.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-x py-20">
        <div className="grid grid-cols-2 gap-5 rounded-3xl border border-border bg-card p-8 shadow-elegant md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                {s.display ? s.display : <Counter to={s.value} suffix={s.suffix} />}
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 text-primary-foreground shadow-elegant sm:p-16">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative text-center">
            <Rocket className="mx-auto h-10 w-10" />
            <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">Ready for Your Next Contract Opportunity?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">
              Join our network of experienced consultants and professionals to access exclusive C2C and contract opportunities.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/job-seekers" className="hover-lift-sm rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-glow hover:bg-white/90">
                Submit Resume
              </Link>
              <Link to="/contact" className="hover-lift-sm rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
                Talk to a Recruiter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee-x { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-roles { animation: marquee-x 35s linear infinite; width: max-content; }
        .marquee-roles:hover { animation-play-state: paused; }
      `}</style>
    </>
  );
}

function EligibilityBadge({ text, delay }: { text: string; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <span className={`grid h-9 w-9 place-items-center rounded-full gradient-primary text-primary-foreground shadow-glow transition-transform duration-700 ${inView ? "scale-100 rotate-0" : "scale-0 rotate-180"}`}>
        <CheckCircle2 className="h-5 w-5" />
      </span>
      <span className="font-medium text-navy">{text}</span>
    </div>
  );
}
