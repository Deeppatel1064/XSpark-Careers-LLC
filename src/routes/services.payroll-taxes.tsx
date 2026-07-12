import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  BookOpen,
  Receipt,
  Wallet,
  BarChart3,
  Users,
  Search,
  ShieldCheck,
  MessageSquare,
  ClipboardCheck,
} from "lucide-react";
import payrollHero from "@/assets/payroll-taxes-hero.jpg";

export const Route = createFileRoute("/services/payroll-taxes")({
  head: () => ({
    meta: [
      { title: "Accounting, Payroll & Tax Services — XSpark Careers" },
      {
        name: "description",
        content:
          "Offshore accounting team that feels in-house. Bookkeeping, payroll processing, and tax filing handled quietly in the background — less stress, lower costs, full compliance.",
      },
      { property: "og:title", content: "Accounting, Payroll & Tax Services — XSpark Careers" },
      {
        property: "og:description",
        content:
          "Offshore accounting, payroll, and tax compliance handled end-to-end for businesses and professionals.",
      },
    ],
  }),
  component: PayrollTaxesPage,
});

const stats = [
  {
    value: "60%+",
    label: "Costs Saved",
    sub: "By businesses that switched to smarter accounting instead of expensive in-house teams",
  },
  {
    value: "99.9%",
    label: "Data Security Compliance",
    sub: "Ensuring your financial data stays protected, accurate, and aligned with regulations",
  },
  {
    value: "4 Days",
    label: "Avg. Onboarding",
    sub: "With a dedicated accounting team ready to handle your books and tax operations",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Bookkeeping & Financial Records",
    desc: "Accurate day-to-day bookkeeping including transactions, reconciliations, and financial tracking to keep your books clean and organized.",
  },
  {
    icon: Receipt,
    title: "Tax Preparation & Filing",
    desc: "Complete tax handling from preparation to filing, ensuring compliance with regulations while minimizing errors and delays.",
  },
  {
    icon: Wallet,
    title: "Payroll Processing",
    desc: "End-to-end payroll management including salary processing, tax deductions, and compliance so your team gets paid accurately and on time.",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting & Insights",
    desc: "Clear financial reports and insights to help you understand your numbers, track performance, and make smarter business decisions.",
  },
];

const forBusiness = [
  {
    title: "Accurate Financial Records",
    desc: "Maintain organized books and reliable financial data with professional bookkeeping and reporting services.",
  },
  {
    title: "Stress-Free Tax Compliance",
    desc: "From preparation to filing, we manage tax obligations accurately and on time, reducing compliance risks.",
  },
  {
    title: "Reliable Payroll Management",
    desc: "Ensure timely salary processing, statutory deductions, and payroll compliance with streamlined payroll support.",
  },
  {
    title: "Actionable Financial Insights",
    desc: "Access clear reports and financial visibility that support informed decision-making and business growth.",
  },
];

const forProfessionals = [
  {
    title: "Simplified Tax Filing",
    desc: "Stay compliant and maximize eligible benefits with professional tax preparation and filing assistance.",
  },
  {
    title: "Greater Salary Transparency",
    desc: "Understand your compensation structure, deductions, and take-home pay with complete clarity.",
  },
  {
    title: "Expert Tax Guidance",
    desc: "Receive straightforward support on tax regulations, filings, and compliance requirements.",
  },
  {
    title: "Dedicated Support When Needed",
    desc: "Our team is available to answer questions and provide guidance whenever financial or tax-related concerns arise.",
  },
];

const steps = [
  {
    n: "01",
    icon: Users,
    title: "Share Your Requirements",
    desc: "Tell us about your books, payroll cycles, tax history, and compliance needs. We'll create a tailored plan.",
  },
  {
    n: "02",
    icon: Search,
    title: "Team Onboarding",
    desc: "Our specialists onboard into your tools and processes — QuickBooks, Xero, NetSuite, Gusto, ADP, and more.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Screening & Compliance",
    desc: "We audit current books, identify gaps, and align processes with federal and state compliance requirements.",
  },
  {
    n: "04",
    icon: ClipboardCheck,
    title: "Day-to-Day Operations",
    desc: "Reconciliations, payroll runs, vendor payments, and tax workpapers handled on schedule, every cycle.",
  },
  {
    n: "05",
    icon: MessageSquare,
    title: "Ongoing Support",
    desc: "Monthly reviews, quarterly tax planning, and a dedicated account manager — a Slack message away.",
  },
];

const lifecycle = [
  {
    title: "Attract",
    points: [
      "Employer brand development",
      "Job description optimization",
      "Multi-channel sourcing strategy",
      "Passive candidate outreach",
    ],
  },
  {
    title: "Assess",
    points: [
      "Technical assessments",
      "Structured interviewing",
      "Skills-based evaluation",
      "Cultural fit analysis",
    ],
  },
  {
    title: "Engage",
    points: [
      "Candidate relationship management",
      "Personalized outreach campaigns",
      "Interview scheduling automation",
      "Candidate experience design",
    ],
  },
  {
    title: "Onboard",
    points: [
      "Pre-boarding programs",
      "Documentation management",
      "New hire orientation",
      "90-day success planning",
    ],
  },
  {
    title: "Analyze",
    points: [
      "Time-to-fill metrics",
      "Quality of hire tracking",
      "Source effectiveness analysis",
      "Cost-per-hire optimization",
    ],
  },
];

const outsourceCards = [
  {
    title: "Bookkeeping & Financial Records",
    desc: "Keep your books clean, updated, and ready anytime without chasing spreadsheets or people.",
  },
  {
    title: "Payroll Processing & Compliance",
    desc: "Accurate salary processing, tax deductions, and compliance handled smoothly every cycle.",
  },
  {
    title: "Tax Filing & Reporting",
    desc: "Timely tax preparation and filings with proper documentation so you stay stress-free and compliant.",
  },
];

const otherServices = [
  {
    to: "/services/talent-acquisition" as const,
    title: "Talent Acquisition",
    desc: "Strategic hiring support to build long-term, high-performing teams.",
  },
  {
    to: "/services/background-verification" as const,
    title: "Background Verification",
    desc: "Comprehensive checks to ensure trust, compliance, and reliability.",
  },
  {
    to: "/services/it-training" as const,
    title: "IT Training",
    desc: "Training that prepares candidates for real-world tech careers.",
  },
  {
    to: "/services/job-placement" as const,
    title: "Job Placement",
    desc: "Helping professionals land meaningful full-time roles with end-to-end services.",
  },
];

const faqs = [
  {
    q: "What accounting tools do you work with?",
    a: "We work across all major platforms — QuickBooks, Xero, NetSuite, Sage, Zoho Books, Gusto, ADP, Paychex, and more. Our team adapts to your existing stack.",
  },
  {
    q: "Is my financial data secure?",
    a: "Yes. We use enterprise-grade encryption, role-based access, signed NDAs, and SOC 2-aligned processes. Your data stays protected at every step.",
  },
  {
    q: "Can you handle multi-state payroll and tax filings?",
    a: "Absolutely. We manage payroll and tax compliance across all 50 US states, including state-specific wage, withholding, and unemployment filings.",
  },
  {
    q: "How quickly can you take over our books?",
    a: "Most clients are fully onboarded within 4 working days. Cleanup of legacy books is scoped separately and usually completed within 2–4 weeks.",
  },
  {
    q: "Can one company handle recruitment, payroll, and compliance together?",
    a: "Yes. XSpark offers integrated workforce solutions across recruitment, payroll, verification, and compliance — one partner, one point of contact.",
  },
  {
    q: "Do you support professionals with personal tax filing?",
    a: "Yes — we help individual professionals with W-2, 1099, OPT/CPT, and H-1B related filings, deductions, and year-round tax planning.",
  },
];

function PayrollTaxesPage() {
  return (
    <main className="pt-28 pb-20">
      {/* Hero */}
      <section className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary/80">
            Accounting & Taxes
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl lg:text-6xl">
            Dedicated Accounting Professionals for Growing Businesses
          </h1>
          <p className="mt-5 text-lg text-navy/70">
            From bookkeeping and financial reporting to tax preparation and compliance support,
            XSpark delivers reliable accounting services that integrate seamlessly with your
            operations. Reduce overhead, improve efficiency, and gain access to experienced
            accounting professionals without expanding your internal team.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/book-consultation"
              className="hover-lift-sm rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Get Started Today
            </Link>
            <Link
              to="/"
              className="hover-lift-sm rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-navy hover:border-primary"
            >
              Explore Us
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 p-8">
          <img
            src={payrollHero}
            alt="Accountant managing payroll and tax filings"
            width={1024}
            height={768}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="container-x mt-20">
        <div className="grid gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/0 p-6 text-center hover-lift"
            >
              <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 font-semibold text-navy">{s.label}</div>
              <div className="mt-1 text-xs text-navy/60">{s.sub}</div>
            </div>
          ))}
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-6 text-primary-foreground">
            <h3 className="font-display text-xl font-bold">Need an Accountant?</h3>
            <p className="mt-1 text-sm opacity-90">No more than 4 days — trust us.</p>
            <Link
              to="/contact"
              className="hover-lift-sm mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary"
            >
              Start Now
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Accounting, Tax & Compliance — Handled with Confidence
          </h2>
          <p className="mt-4 text-navy/70">
            From bookkeeping and financial reporting to tax preparation and compliance management,
            XSpark ensures your finances are managed accurately, efficiently, and transparently—so
            you can focus on growing your business.
          </p>
          <Link
            to="/contact"
            className="hover-lift-sm mt-5 inline-flex rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-navy hover:border-primary"
          >
            Get Started
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm hover-lift hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For Businesses / Professionals */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Why Businesses & Professionals Trust XSpark with Their Finances
          </h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">
              For Businesses
            </p>
            <p className="mt-2 text-navy/70">
              We simplify accounting, payroll, taxation, and compliance management, allowing you to
              focus on growth while we ensure your financial operations remain accurate, compliant,
              and efficient.
            </p>
            <ul className="mt-6 space-y-4">
              {forBusiness.map((b) => (
                <li key={b.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <div className="font-semibold text-navy">{b.title}</div>
                    <div className="text-sm text-navy/70">{b.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">
              For Professionals
            </p>
            <p className="mt-2 text-navy/70">
              We help individuals navigate tax and payroll complexities with confidence, providing
              guidance and support that simplifies financial management.
            </p>
            <ul className="mt-6 space-y-4">
              {forProfessionals.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <div className="font-semibold text-navy">{p.title}</div>
                    <div className="text-sm text-navy/70">{p.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Simple 5-Step Onboarding Process
          </h2>
          <p className="mt-4 text-navy/70">
            Our proven process to take your accounting, payroll, and tax operations from messy to
            dialled-in — without disrupting your business.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <div className="font-display text-3xl font-bold text-primary/30">{s.n}</div>
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-cycle lifecycle (Accounting talent offshoring) */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            End-to-End Accounting & Tax Offshoring Solutions
          </h2>
          <p className="mt-4 text-navy/70">
            Our accounting and tax outsourcing services support every stage of your financial
            operations. From bookkeeping and payroll management to tax compliance, reporting, and
            ongoing support, we provide comprehensive solutions tailored to your business needs.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {lifecycle.map((l, i) => (
            <div
              key={l.title}
              className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40"
            >
              <div className="font-display text-3xl font-bold text-primary/30">0{i + 1}</div>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy">{l.title}</h3>
              <ul className="mt-3 space-y-2">
                {l.points.map((p) => (
                  <li key={p} className="flex gap-2 text-xs text-navy/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <p className="text-sm text-navy/70">
            Our specialized program helps you build high-performing accounting teams from day one.
          </p>
          <Link
            to="/book-consultation"
            className="hover-lift-sm rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Talk to a Specialist
          </Link>
        </div>
      </section>

      {/* Run without running after accountants */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Accounting & Tax Support That Feels In-House
          </h2>
          <p className="mt-4 text-navy/70">
            Outsource your bookkeeping, payroll, tax preparation, and financial operations to
            experienced professionals who work as an extension of your team. Reduce overhead,
            improve accuracy, and stay focused on growing your business.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {outsourceCards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40"
            >
              <h3 className="font-display text-lg font-semibold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/book-consultation"
            className="hover-lift-sm inline-flex rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Other services */}
      <section className="container-x mt-24">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Other Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {otherServices.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40 transition hover:border-primary hover:shadow-md"
            >
              <h3 className="font-display text-lg font-semibold text-navy group-hover:text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-navy/70">{s.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-navy/70">
            Everything you need to know about our accounting, payroll, and tax services. If you're
            looking for something else, just contact us.
          </p>
        </div>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl border border-border bg-white p-5">
              <summary className="cursor-pointer font-semibold text-navy">{f.q}</summary>
              <p className="mt-2 text-sm text-navy/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-x mt-24">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/70 p-10 text-center text-primary-foreground">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Got a Hiring Problem? We Love Those.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl opacity-90">
            Big careers and great teams usually start with a simple message. Send us one and let's
            see what we can build together.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/book-consultation"
              className="hover-lift-sm rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary"
            >
              Book Free Call
            </Link>
            <Link
              to="/contact"
              className="hover-lift-sm rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
