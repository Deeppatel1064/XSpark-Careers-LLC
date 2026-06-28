import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck, Lock, FileCheck, BadgeCheck, Briefcase, FileText, MessagesSquare,
  Search, Trophy, Users, ClipboardList, UserSearch, ScanLine, Handshake, Sparkles,
  Award, Clock, Calendar, MessageCircle, ArrowRight, CheckCircle2, Globe2,
} from "lucide-react";
import { Reveal } from "./Reveal";

/* ============ ABOUT: Awards & Certifications ============ */
const certs = [
  { icon: Award, title: "ISO 9001 Certified — 2026", desc: "Aligned with global quality standards to deliver consistent, reliable workforce solutions." },
  { icon: Lock, title: "ISO 27001 Certified — 2026", desc: "Advanced information security & strict data protection across all systems and operations." },
  { icon: ShieldCheck, title: "GDPR Compliant — 2026", desc: "Transparent, secure and privacy-first practices in every process we follow." },
  { icon: FileCheck, title: "U.S. E-Verify Certified — 2023", desc: "Full compliance with U.S. employment standards and verified workforce solutions." },
];

export function Certifications() {
  return (
    <section className="container-x py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Awards & Certifications</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
          Trusted, compliant, and globally certified
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Independent certifications that back our commitment to quality, data security and ethical hiring.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 hover-lift">

              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <BadgeCheck className="absolute -right-4 -top-4 h-20 w-20 text-primary/10" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============ SERVICES: Tabbed Transparent Process ============ */
const seekerSteps = [
  { icon: MessagesSquare, t: "Free Consultation", d: "A quick consultation to understand your background, skills, career goals, and visa status — so we design the right strategy for you." },
  { icon: FileText, t: "Profile Enhancement", d: "ATS-optimized resume, LinkedIn profile and portfolio polish that match industry expectations and boost recruiter visibility." },
  { icon: MessagesSquare, t: "Interview Process", d: "Mock interviews, communication coaching and technical guidance to perform confidently in technical, behavioral, and HR rounds." },
  { icon: Search, t: "Job Matching & Applications", d: "Our recruiters submit targeted applications daily, focused on roles that match your skills, experience and direction." },
  { icon: Trophy, t: "Successful Placement", d: "From interview follow-ups to offer negotiation and onboarding, we support you until you successfully start your new role." },
];
const employerSteps = [
  { icon: ClipboardList, t: "Requirement Analysis", d: "Share your hiring needs, tech stack, team culture and timeline. We craft a tailored recruitment strategy." },
  { icon: UserSearch, t: "Talent Sourcing", d: "Recruiters tap into our extensive network and advanced sourcing techniques to surface the best candidates." },
  { icon: ScanLine, t: "Screening & Vetting", d: "Candidates clear technical assessments, soft-skill evaluations and background checks before reaching you." },
  { icon: Users, t: "Client Interviews", d: "We coordinate interviews, gather feedback and manage the process end-to-end for a smooth experience." },
  { icon: Handshake, t: "Onboarding Support", d: "We assist with offer negotiations, onboarding prep and follow-up to ensure successful integration." },
];

export function TransparentProcess() {
  const [tab, setTab] = useState<"seeker" | "employer">("seeker");
  const steps = tab === "seeker" ? seekerSteps : employerSteps;

  return (
    <section className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Our Process</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
            A simple, transparent process for everyone
          </h2>
        </Reveal>

        <div className="mt-8 inline-flex rounded-full border border-border bg-card p-1 shadow-glow">
          {(["seeker", "employer"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                tab === k ? "gradient-primary text-primary-foreground shadow-glow" : "text-navy hover:text-primary"
              }`}
            >
              {k === "seeker" ? "For Job Seekers" : "For Employers"}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-6 hover-lift">

                <p className="text-xs font-bold uppercase tracking-widest text-primary">Step {i + 1}</p>
                <div className="mt-3 grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ JOB SEEKERS: Visa Support + Why Choose ============ */
const visas = ["F1 / OPT", "CPT", "H-1B", "H-4 EAD", "Green Card", "U.S. Citizen", "TN Visa", "Open to Sponsorship"];

export function VisaSupport() {
  return (
    <section className="container-x py-16">
      <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Visa Support</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              We support every <span className="text-gradient">work status</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              From international students on OPT to seasoned professionals on H-1B and Green Card holders — we tailor strategy to your status and timeline.
            </p>
          </Reveal>
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-3">
              {visas.map((v, i) => (
                <Reveal key={v} delay={i * 0.04}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-navy">
                    <Globe2 className="h-4 w-4 text-primary" /> {v}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const seekerWhy = [
  { icon: Briefcase, t: "Personalized Job Matching", d: "Roles that build long-term careers, not just quick jobs." },
  { icon: Clock, t: "Faster Interview Scheduling", d: "Recruiters actively secure interviews so you're not stuck waiting." },
  { icon: Trophy, t: "End-to-End Placement Support", d: "From resume building to offer negotiation, we guide every step." },
  { icon: BadgeCheck, t: "Access to Verified Employers", d: "Trusted companies across multiple industries nationwide." },
  { icon: Sparkles, t: "Confidence Before Interviews", d: "Mock interviews and prep sessions help you walk in ready." },
];

export function WhySeekersChoose() {
  return (
    <section className="container-x py-16">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why Job Seekers Choose XSpark</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
          Built around your career — not the job board
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {seekerWhy.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 hover-lift">
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============ EMPLOYERS: Differentiators grid ============ */
const empWhy = [
  { icon: Briefcase, t: "Industry-Focused Hiring", d: "We understand your sector and find talent that actually fits." },
  { icon: BadgeCheck, t: "Pre-Screened Candidates", d: "Save time meeting pre-screened, qualified and verified professionals." },
  { icon: Clock, t: "Faster Hiring Cycles", d: "Our process reduces hiring delays significantly — we're strict to deadlines." },
  { icon: Users, t: "Flexible Workforce Solutions", d: "Permanent hires, staffing, or talent acquisition support — we do it all." },
  { icon: ShieldCheck, t: "Compliance & Payroll Support", d: "Background checks, payroll and tax support handled seamlessly." },
];

export function WhyEmployersChoose() {
  return (
    <section className="container-x py-16">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">What Makes XSpark Different</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
          A hiring partner built for serious teams
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {empWhy.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 hover-lift">
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============ CONTACT: What happens next ============ */
const nextSteps = [
  { icon: Clock, t: "Review within 24 hours", d: "Our team reviews your information and matches you with the right strategist." },
  { icon: Calendar, t: "Free 30-minute call", d: "We schedule a no-cost discovery call at a time that works for you." },
  { icon: MessageCircle, t: "Personalized roadmap", d: "We share a tailored placement, hiring or training roadmap built around your goals." },
];

export function WhatHappensNext() {
  return (
    <section className="container-x py-16">
      <div className="rounded-3xl bg-navy p-8 text-white shadow-elegant md:p-12 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full gradient-primary opacity-30 blur-3xl" />
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald">After You Submit</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">What happens next</h2>
        </Reveal>
        <div className="relative mt-10 grid gap-6 md:grid-cols-3">
          {nextSteps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08}>
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary shadow-glow">
                  <s.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-emerald">Step {i + 1}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-white/70">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CAREERS: Insights / Blog ============ */
const insights = [
  { tag: "Visa", date: "Jun 16, 2026", author: "Nisarg Patel", title: "STEM OPT Rejection: Mistakes That Can Cost Your U.S. Career", excerpt: "One of the biggest challenges international students face is STEM-OPT rejection in the USA." },
  { tag: "Policy", date: "Jun 11, 2026", author: "Dwijen Barot", title: "H-1B Shock Reversed: Why the $100K Visa Fee Was Struck Down", excerpt: "The proposal to increase H-1B visa fees has now been struck down by a federal judge." },
  { tag: "OPT", date: "Jun 9, 2026", author: "Nisarg Patel", title: "Can You Work Multiple Jobs on OPT?", excerpt: "While searching for a job in the USA, is it possible to take multiple jobs on an OPT visa?" },
  { tag: "STEM", date: "Jun 3, 2026", author: "Dwijen Barot", title: "STEM OPT in 2026: The Rules Every Student Should Know", excerpt: "For many international students, graduating with a STEM degree feels like reaching the finish line." },
];

export function InsightsSection() {
  return (
    <section className="container-x py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Insights</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Insights that empower careers & businesses
          </h2>
        </Reveal>
        <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          View all insights <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {insights.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card hover-lift">

              <div className="relative h-40 gradient-primary">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground">{p.date} · {p.author}</p>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug text-navy group-hover:text-primary transition">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============ Shared: Bottom CTA ============ */
export function BookCallCTA() {
  return (
    <section className="container-x pb-20">
      <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 text-primary-foreground shadow-elegant md:p-14">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-4xl">
              Got a job-hunt stress or hiring problem? We love those.
            </h2>
            <p className="mt-2 max-w-xl text-white/85">
              Big careers and great teams usually start with a simple message. Send us one — let's see what we can build together.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="hover-lift-sm rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-white/90">
              Book Free Call
            </Link>
            <Link to="/contact" className="hover-lift-sm inline-flex items-center gap-1 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
              Start Your Journey <CheckCircle2 className="h-4 w-4" />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
