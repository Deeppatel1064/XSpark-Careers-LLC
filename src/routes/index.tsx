import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Briefcase, Users, FileText, MessageSquare, Globe2, Sparkles,
  ArrowRight, CheckCircle2, Building2, HeartPulse, Cpu, Banknote,
  Wrench, Truck, Factory, FlaskConical, GraduationCap, Star,
  UserCheck, FileSearch, Megaphone, MessagesSquare, Trophy,
} from "lucide-react";

import { Counter } from "../components/site/Counter";
import { Reveal } from "../components/site/Reveal";
import { WorldMap } from "../components/site/WorldMap";
import { GlobeVisual } from "../components/site/GlobeVisual";
import { HeroWorldMap } from "../components/site/HeroWorldMap";

import {
  BrandMarquee, WhatIsXSpark, YearlyGrowth, FeaturedCaseStudy,
  FeaturedCaseStudyMihir, LivePlacements, CandidateGallery,
} from "../components/site/HomeExtras";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XSpark Careers — Accelerate Your Career. Hire Top Talent." },
      { name: "description", content: "Connecting skilled professionals with leading employers across the USA, Canada, UK and Australia. Career placement, recruitment & talent acquisition." },
      { property: "og:title", content: "XSpark Careers — Global Recruitment & Staffing" },
      { property: "og:description", content: "Connecting talent with opportunity worldwide." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const features = [
  { icon: Briefcase, title: "Career Placement", desc: "End-to-end placement support that lands offers at top global companies.", to: "/job-seekers" },
  { icon: Users, title: "Recruitment Solutions", desc: "Tailored hiring pipelines built around your team, stack and culture.", to: "/employers" },
  { icon: FileText, title: "Resume Optimization", desc: "ATS-optimized, recruiter-grade resumes that get callbacks.", to: "/job-seekers" },
  { icon: MessageSquare, title: "Interview Preparation", desc: "Mock interviews, behavioral coaching and offer negotiation playbooks.", to: "/job-seekers" },
  { icon: Globe2, title: "Global Hiring", desc: "Compliant cross-border hiring across US, Canada, UK and Australia.", to: "/employers" },
  { icon: Sparkles, title: "Talent Acquisition", desc: "Source, screen and secure standout talent — faster than the market.", to: "/employers" },
];

const stats = [
  { value: 10000, suffix: "+", label: "Candidates Assisted" },
  { value: 500, suffix: "+", label: "Hiring Partners" },
  { value: 50, suffix: "+", label: "Industries Served" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
];

const industries = [
  { icon: Cpu, name: "Information Technology", blurb: "Software, Cloud, AI, Data & Cyber.", span: "md:col-span-2 md:row-span-2", accent: true },
  { icon: HeartPulse, name: "Healthcare", blurb: "Clinical, allied health & informatics." },
  { icon: Banknote, name: "Finance", blurb: "Banking, fintech, risk & investments." },
  { icon: Wrench, name: "Engineering", blurb: "Mechanical, civil, electrical & QA." },
  { icon: Truck, name: "Supply Chain", blurb: "Logistics, procurement & operations." },
  { icon: Factory, name: "Manufacturing", blurb: "Industrial, automation & quality." },
  { icon: FlaskConical, name: "Life Sciences", blurb: "Pharma, biotech & regulatory." },
  { icon: GraduationCap, name: "Education", blurb: "EdTech, academic & instructional." },
];

const process = [
  { icon: UserCheck, title: "Profile Evaluation", desc: "Deep skills audit and market fit assessment with a dedicated career strategist." },
  { icon: FileSearch, title: "Resume Optimization", desc: "Recruiter-grade rewrite, ATS scoring and visual hierarchy designed to convert." },
  { icon: Megaphone, title: "Strategic Job Marketing", desc: "Targeted outreach to a curated network of 500+ hiring partners worldwide." },
  { icon: MessagesSquare, title: "Interview Preparation", desc: "Behavioral, technical and case interview drills with personalized feedback." },
  { icon: Trophy, title: "Placement Success", desc: "Offer evaluation, salary negotiation and onboarding support — start to signed." },
];

const stories = [
  { name: "Aarav Mehta", role: "Senior Data Engineer", company: "FinTech · NYC", quote: "From OPT confusion to a signed offer at a Fortune 500 in 9 weeks. The interview prep was unreal." },
  { name: "Priya Shah", role: "Product Manager", company: "SaaS · London", quote: "XSpark didn't just place me — they reshaped my career strategy. I doubled my comp on the new role." },
  { name: "Marcus Lee", role: "Cloud Architect", company: "Enterprise · Toronto", quote: "Personal, fast, no-fluff. The team treated my search like their own product launch." },
  { name: "Sophie Turner", role: "Talent Director", company: "Scale-up · Sydney", quote: "We hired 14 engineers in two quarters. Pipeline quality is the best we've worked with." },
];

function HomePage() {
  return (
    <>
      {/* HERO — clean two-column recruitment layout with world map */}
      <section className="relative flex min-h-fit flex-col items-start justify-center overflow-hidden bg-[#e2e5e8] pt-28 pb-12 md:min-h-[calc(100vh-80px)] md:pt-32 md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 75% 45%, color-mix(in oklab, white 45%, transparent) 0%, transparent 55%), radial-gradient(ellipse at 25% 30%, color-mix(in oklab, oklch(0.72 0.08 240) 12%, transparent) 0%, transparent 45%), linear-gradient(160deg, #e2e5e8 0%, #eef1f3 50%, #e6eaec 100%)",
          }}
        />

        <div className="container-x relative grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-xl text-navy"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex flex-wrap items-center gap-2 rounded-full border border-navy/10 bg-white/80 px-1 py-1 pr-3 backdrop-blur-sm"
            >
              <span className="rounded-full bg-navy px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Global Recruitment
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-navy/60">
                USA
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-navy/60">
                Canada
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-navy/60">
                UK
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-navy/60">
                Australia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
            >
              Accelerate Your Career.{" "}
              <span className="text-primary">Hire Top Talent.</span>{" "}
              Grow Globally.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-5 max-w-lg text-base text-navy/70 md:text-lg"
            >
              XSpark Careers connects skilled professionals with leading employers across the USA, Canada, UK and Australia — while helping organizations build exceptional teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/job-seekers"
                className="hover-lift-sm group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90"
              >
                Find Jobs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/employers"
                className="hover-lift-sm inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white/70 px-6 py-3 text-sm font-semibold text-navy backdrop-blur-sm hover:bg-white"
              >
                Hire Talent
              </Link>

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <HeroWorldMap />
          </motion.div>
        </div>
      </section>


      {/* feature strip */}
      <section className="container-x relative -mt-10 mb-4">
        <div className="grid gap-4 rounded-2xl border border-navy/10 bg-white/80 p-4 backdrop-blur shadow-elegant sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sparkles, title: "Smart Matching", desc: "AI-powered matching for better opportunities" },
            { icon: Briefcase, title: "Faster Placements", desc: "Reduce hiring time and get quality talent" },
            { icon: Globe2, title: "Global Reach", desc: "Access top talent from around the world" },
            { icon: MessageSquare, title: "Career Support", desc: "Guidance at every step of your career" },
          ].map((f) => (
            <div key={f.title} className="hover-lift-sm flex items-start gap-3 rounded-xl p-3">

              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary text-white shadow-glow">
                <f.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">{f.title}</p>
                <p className="mt-0.5 text-xs text-navy/65">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BrandMarquee />


      <WhatIsXSpark />

      {/* WHY US */}
      <section className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why XSpark</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              Built for ambitious careers and high-performance teams
            </h2>
            <p className="mt-4 text-muted-foreground">
              Six capabilities, one outcome — measurable hiring success and career growth across borders.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="tilt-card border-glow group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full gradient-primary opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                  <Link to={f.to} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-surface py-20">
        <div className="absolute inset-0 bg-dots opacity-40" aria-hidden="true" />
        <div className="container-x relative">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 text-center shadow-glow">
                  <p className="font-display text-4xl font-bold text-gradient-dark md:text-5xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <YearlyGrowth />

      {/* INDUSTRIES BENTO */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Industries</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              From silicon to scrubs — we hire across every modern industry
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <p className="text-muted-foreground">
              Domain-specialist recruiters embedded in every vertical we serve, with deep knowledge of certifications, comp bands and stack expectations.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.05} className={`${ind.span ?? ""}`}>
              <div
                className={`hover-lift group relative h-full overflow-hidden rounded-2xl border border-border p-6 ${
                  ind.accent ? "gradient-primary text-primary-foreground" : "bg-card"
                }`}

              >
                <div className={`grid h-11 w-11 place-items-center rounded-xl ${ind.accent ? "bg-white/15" : "bg-secondary text-primary"}`}>
                  <ind.icon className="h-5 w-5" />
                </div>
                <h3 className={`mt-4 text-lg font-semibold ${ind.accent ? "" : "text-navy"}`}>{ind.name}</h3>
                <p className={`mt-1 text-sm ${ind.accent ? "text-white/80" : "text-muted-foreground"}`}>
                  {ind.blurb}
                </p>
                {ind.accent && (
                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald/20 blur-3xl" aria-hidden="true" />

        <div className="container-x relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" /> Our Process
            </span>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold md:text-5xl">
              A proven <span className="text-sky">5-step engine</span> from profile to placement
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Every step is engineered to compound — from sharpening your story to signing the offer.
            </p>
          </Reveal>

          <div className="relative mt-20">
            {/* center spine */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald/0 via-primary to-emerald/0 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-14 md:space-y-20">
              {process.map((p, i) => {
                const left = i % 2 === 0;
                return (
                  <Reveal key={p.title} delay={i * 0.06}>
                    <div className="relative grid gap-6 md:grid-cols-[1fr_60px_1fr] md:items-center">
                      {/* CARD */}
                      <div className={`relative ${left ? "md:order-1 md:pr-16 md:text-right" : "md:order-3 md:pl-16 md:text-left"}`}>
                        <div className="group relative inline-block w-full max-w-md align-top md:max-w-none">
                          {/* gradient border */}
                          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary via-emerald/60 to-primary/40 opacity-60 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />
                          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1">
                            {/* huge step number watermark */}
                            <span
                              className={`pointer-events-none absolute top-3 font-display text-6xl font-black leading-none text-white/5 ${left ? "left-4" : "right-4"}`}
                              aria-hidden="true"
                            >
                              0{i + 1}
                            </span>

                            <div className={`flex items-center gap-3 ${left ? "md:justify-end" : ""}`}>
                              <span className="rounded-full bg-emerald/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald">
                                Step {i + 1}
                              </span>
                              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald/40 to-transparent" />
                            </div>

                            <h3 className="relative mt-4 font-display text-2xl font-bold tracking-tight md:text-[26px]">
                              {p.title}
                            </h3>
                            <p className="relative mt-3 text-sm leading-relaxed text-white/75">
                              {p.desc}
                            </p>

                            {/* hairline accent */}
                            <div className={`mt-5 h-[2px] w-12 rounded-full bg-gradient-to-r from-primary to-emerald ${left ? "md:ml-auto" : ""}`} />
                          </div>
                        </div>
                      </div>

                      {/* CENTER NODE */}
                      <div className="md:order-2 md:flex md:justify-center">
                        <div className="absolute left-6 top-8 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                          <span className="absolute inset-0 -m-3 rounded-full bg-primary/30 blur-xl" aria-hidden="true" />
                          <div className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-emerald shadow-[0_0_30px_rgba(59,130,246,0.5)] ring-4 ring-navy">
                            <p.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* spacer to balance grid on the opposite side */}
                      <div className={left ? "md:order-3 hidden md:block" : "md:order-1 hidden md:block"} aria-hidden="true" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FeaturedCaseStudy />
      <FeaturedCaseStudyMihir />

      {/* SUCCESS STORIES */}
      <section className="container-x py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Success Stories</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold md:text-5xl">
              Career wins that speak louder than slogans
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <div className="hover-lift group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6">

                <div className="flex items-center gap-1 text-amber">
                  {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{s.quote}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-sm font-bold text-primary-foreground">
                    {s.name.split(" ").map(x => x[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.role} · {s.company}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CandidateGallery />

      <LivePlacements />

      {/* GLOBAL PRESENCE */}
      <section className="container-x py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Global Presence</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              Hiring without borders
            </h2>
            <p className="mt-4 text-muted-foreground">
              Operations spanning North America, Europe, Asia-Pacific and the UK. Local expertise, global reach, compliant placements at every step.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["USA", "Canada", "United Kingdom", "Australia"].map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald" /> {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}><WorldMap /></Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 text-primary-foreground shadow-elegant md:p-16">
          <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald/40 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-foreground/80">
                <Building2 className="inline h-4 w-4" /> Ready to grow?
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
                Ready To Take The Next Step?
              </h2>
              <p className="mt-3 max-w-md text-white/80">
                Whether you're hiring or hunting — we'll move fast. Talk to a strategist today.
              </p>
            </div>
            <div className="flex flex-wrap justify-start gap-3 md:justify-end">
              <Link to="/job-seekers" className="hover-lift-sm rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy">
                Apply Now
              </Link>
              <Link to="/contact" className="hover-lift-sm rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
