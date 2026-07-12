import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { useState } from "react";
import { CheckCircle2, Cpu, HeartPulse, Banknote, Factory, Building2 } from "lucide-react";
import { WhyEmployersChoose, BookCallCTA } from "../components/site/PageExtras";

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "For Employers — Hire Skilled Talent Faster | XSpark Careers" },
      { name: "description", content: "Talent acquisition, recruitment & staffing for startups and enterprises. Hire top global talent with XSpark Careers." },
      { property: "og:title", content: "Hire Skilled Talent Faster — XSpark Careers" },
      { property: "og:description", content: "Recruitment & staffing for high-growth teams." },
      { property: "og:url", content: "/employers" },
    ],
    links: [{ rel: "canonical", href: "/employers" }],
  }),
  component: EmployersPage,
});

const reasons = [
  "60% faster time-to-fill vs. industry average",
  "Pre-screened, role-fit candidates only",
  "Dedicated recruiter pod per account",
  "Transparent SLAs and weekly hiring reviews",
  "Compliance and immigration expertise",
  "Flexible contract, C2H and FTE models",
];

const process = [
  { step: "01", title: "Discovery", desc: "Calibration call to define role, comp, must-haves and culture." },
  { step: "02", title: "Sourcing", desc: "Multi-channel sourcing across passive and active candidates." },
  { step: "03", title: "Screening", desc: "Skills, fit, and reference validation by senior recruiters." },
  { step: "04", title: "Submission", desc: "Curated shortlist with structured candidate briefs." },
  { step: "05", title: "Hire", desc: "Interview support, offer negotiation and smooth onboarding." },
];

const screening = [
  "Resume parse & ATS scoring",
  "Technical skill validation",
  "Behavioral interview round",
  "Reference & background checks",
  "Compensation alignment",
  "Work authorization verification",
];

const industries = [
  { icon: Cpu, name: "Information Technology" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Banknote, name: "Finance" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Building2, name: "Enterprise SaaS" },
];

function EmployersPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", roles: "", details: "" });
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <PageHero
        eyebrow="For Employers"
        title={<>Hire <span className="text-gradient">Skilled Talent</span> Faster</>}
        description="From a critical first hire to a 50-person buildout — we deliver curated, role-ready talent on your timeline."
      >
        <Link to="/book-consultation" className="hover-lift-sm inline-flex rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
          Request Talent
        </Link>
      </PageHero>

      <WhyEmployersChoose />

      <section className="container-x py-16">

        <Reveal><h2 className="font-display text-3xl font-bold md:text-4xl">Why employers choose XSpark</h2></Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r} delay={i * 0.04}>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 hover-lift">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                <p className="text-sm font-medium text-foreground">{r}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <Reveal><h2 className="font-display text-3xl font-bold md:text-4xl">Talent acquisition process</h2></Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 hover-lift">
                <p className="font-display text-3xl font-bold text-gradient-dark">{p.step}</p>
                <h3 className="mt-3 font-semibold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x grid gap-10 py-16 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Candidate screening methodology</h2>
          <p className="mt-3 text-muted-foreground">Every candidate we submit clears a rigorous, multi-stage validation process.</p>
          <ul className="mt-6 space-y-3">
            {screening.map((s) => (
              <li key={s} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <span className="h-2 w-2 rounded-full bg-emerald" />
                <span className="text-sm font-medium">{s}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Industries served</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {industries.map((ind) => (
              <div key={ind.name} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 hover-lift">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                  <ind.icon className="h-5 w-5" />
                </span>
                <p className="font-semibold text-navy">{ind.name}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Consultation Form */}
      <section className="container-x py-16">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Free Consultation</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Tell us about your hiring needs</h2>
              <p className="mt-3 text-muted-foreground">Share a few details and a senior recruiter will reach out within 24 hours with a tailored proposal.</p>
            </div>
            {sent ? (
              <div className="rounded-2xl border border-emerald/30 bg-emerald/10 p-8 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald" />
                <h3 className="mt-3 font-display text-xl font-semibold text-navy">We've got it.</h3>
                <p className="mt-1 text-sm text-muted-foreground">A recruiter will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                  <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} required />
                  <Field label="Work email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                  <Field label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                </div>
                <Field label="Roles to hire" value={form.roles} onChange={(v) => setForm({ ...form, roles: v })} placeholder="e.g. Senior React Engineer × 2" />
                <Field label="Tell us more" textarea value={form.details} onChange={(v) => setForm({ ...form, details: v })} placeholder="Timeline, stack, location, comp range…" />
                <button type="submit" className="hover-lift-sm mt-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
                  Request Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <BookCallCTA />
    </>
  );
}

function Field({
  label, value, onChange, type = "text", required, placeholder, textarea,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; placeholder?: string; textarea?: boolean;
}) {
  const cls = "mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
  return (
    <label className="block text-sm font-medium text-navy">
      {label}{required && <span className="text-primary"> *</span>}
      {textarea ? (
        <textarea required={required} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} rows={4} className={cls} />
      ) : (
        <input required={required} type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className={cls} />
      )}
    </label>
  );
}
