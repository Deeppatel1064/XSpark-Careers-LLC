import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Users,
  Briefcase,
  Search,
  UserCheck,
  BarChart3,
  Shield,
  Cpu,
  Headphones,
  Clock,
} from "lucide-react";
import talentHero from "@/assets/talent-acquisition-hero.jpg";

export const Route = createFileRoute("/services/talent-acquisition")({
  head: () => ({
    meta: [
      { title: "Talent Acquisition Services — XSpark Careers" },
      {
        name: "description",
        content:
          "From sourcing to screening, XSpark helps companies discover and hire exceptional talent across global markets — making hiring faster, smarter, and far less chaotic.",
      },
      { property: "og:title", content: "Talent Acquisition Services — XSpark Careers" },
      {
        property: "og:description",
        content:
          "Discover and hire exceptional talent across global markets — faster, smarter, less chaotic.",
      },
    ],
  }),
  component: TalentAcquisitionPage,
});

const stats = [
  { value: "455+", label: "Roles Filled", sub: "By companies who let XSpark handle the hiring" },
  {
    value: "$7.8M+",
    label: "Saved by Our Clients",
    sub: "By avoiding unnecessary agency fees and headaches",
  },
  {
    value: "28 Days",
    label: "Avg. Time to Hire",
    sub: "To bring the right talent through the door faster",
  },
];

const services = [
  {
    icon: Briefcase,
    title: "Recruitment Process Outsourcing (RPO)",
    desc: "Outsource your hiring process to us — from talent sourcing to onboarding, with recruiters working as an extension of your team.",
  },
  {
    icon: Users,
    title: "Contingency Recruitment",
    desc: "We find and present the right candidates for your roles, and you only pay once the perfect hire actually joins your team.",
  },
  {
    icon: Search,
    title: "Retained / Executive Search",
    desc: "For leadership roles where the stakes are high, we headhunt the talent that truly moves businesses forward.",
  },
  {
    icon: UserCheck,
    title: "Embedded / On-Demand TA",
    desc: "Our recruiters integrate directly into your hiring team, building talent pipelines and helping you scale without the stress.",
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

const specialists = [
  {
    icon: Users,
    title: "Share Your Requirements",
    desc: "Tell us about your hiring needs, tech stack, team culture, and timeline. We'll create a tailored recruitment strategy.",
  },
  {
    icon: Search,
    title: "Talent Sourcing",
    desc: "Our recruiters tap into our extensive network and use advanced sourcing techniques to find the best candidates.",
  },
  {
    icon: Clock,
    title: "Multi-Timezone Coverage",
    desc: "Round-the-clock recruitment operations to accelerate your hiring timeline.",
  },
  {
    icon: Shield,
    title: "Data Security",
    desc: "Enterprise-grade security protocols to protect sensitive candidate and company data.",
  },
  {
    icon: Cpu,
    title: "Tech-Enabled Process",
    desc: "Humanized & AI-powered sourcing, ATS integration, and analytics for data-driven decisions.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Your dedicated account manager ensures consistent quality and communication during the entire hiring cycle.",
  },
];

const regions = [
  {
    flag: "🇺🇸",
    name: "North America",
    countries: "USA, Canada, Mexico",
    count: "73+",
    tz: "EST, CST, MST, PST",
    strength: "Tech innovation, enterprise hiring, startup ecosystems",
  },
  {
    flag: "🇪🇺",
    name: "Europe",
    countries: "UK, Germany, France, Netherlands",
    count: "34+",
    tz: "GMT, CET",
    strength: "FinTech, SaaS companies, AI/ML talent markets",
  },
  {
    flag: "🇮🇳",
    name: "Asia Pacific",
    countries: "India, Singapore, Australia",
    count: "230+",
    tz: "IST, SGT, AEST",
    strength: "Offshore recruitment, large talent pools, cost efficiency",
  },
  {
    flag: "🇧🇷",
    name: "Latin America",
    countries: "Brazil, Argentina, Colombia",
    count: "21+",
    tz: "BRT, ART",
    strength: "Nearshore tech talent, remote teams, fast-growing startups",
  },
  {
    flag: "🇦🇪",
    name: "Middle East",
    countries: "UAE, Saudi Arabia, Israel",
    count: "17+",
    tz: "GST",
    strength: "Enterprise expansion, tech transformation, global hubs",
  },
  {
    flag: "🇿🇦",
    name: "Africa",
    countries: "South Africa, Nigeria, Kenya",
    count: "27+",
    tz: "SAST, WAT",
    strength: "Emerging tech talent, outsourcing support, digital growth",
  },
];

const whyGlobal = [
  { title: "Access Untapped Talent", desc: "Reach candidates beyond your local market" },
  {
    title: "Cost Optimization",
    desc: "Offshore talent acquisition support at 40-60% cost savings",
  },
  { title: "Diverse Perspectives", desc: "Build truly global, innovative teams" },
];

const testimonials = [
  {
    company: "Summit Aero Services",
    role: "VP, Talent Strategy",
    name: "Jennifer Collins",
    achievement: "14 Strategic Hires",
    timeline: "21 Days",
    impact: "Hiring Time ↓ 40%",
    quote:
      "XSpark took the time to understand our hiring goals and company culture before presenting candidates. Every profile was relevant, well-qualified, and aligned with our expectations.",
  },
  {
    company: "Nova Analytics",
    role: "Data Operations",
    name: "Michael Reed",
    achievement: "10 Technical Hires",
    timeline: "28 Days",
    impact: "Recruitment Cost ↓ 25%",
    quote:
      "The level of candidate quality was exceptional. XSpark simplified a process that had previously consumed a significant amount of our team's time and resources.",
  },
  {
    company: "Community Impact Network",
    role: "Chief Executive Officer",
    name: "Olivia Bennett",
    achievement: "18 Leadership Hires",
    timeline: "20 Days",
    impact: "Time-to-Fill ↓ 35%",
    quote:
      "From initial discussions to final placements, XSpark maintained clear communication and delivered outstanding results. Their understanding of specialized roles was particularly impressive.",
  },
  {
    company: "Sterling Financial Partners",
    role: "Head of Risk & Compliance",
    name: "David Mitchell",
    achievement: "12 Compliance Hires",
    timeline: "5 Weeks",
    impact: "Quality of Hire ↑ 50%",
    quote:
      "Finding experienced compliance professionals is never easy. XSpark consistently introduced candidates who met both our technical and regulatory requirements.",
  },
  {
    company: "CareFirst Medical Group",
    role: "Human Resources Director",
    name: "Dr. Emily Foster",
    achievement: "30 Healthcare Hires",
    timeline: "4 Weeks",
    impact: "Hiring Efficiency ↑ 45%",
    quote:
      "XSpark delivered qualified healthcare professionals quickly without compromising quality. Their screening process significantly reduced our workload.",
  },
  {
    company: "Vertex Supply Chain Solutions",
    role: "Operations Manager",
    name: "Ryan Walker",
    achievement: "22 Operations Hires",
    timeline: "3 Weeks",
    impact: "Employee Retention ↑ 55%",
    quote:
      "What stood out most was XSpark's focus on long-term fit rather than simply filling positions. The quality of hires has had a measurable impact on our business.",
  },
];

const otherServices = [
  {
    to: "/services/job-placement" as const,
    title: "Job Placement",
    desc: "Helping professionals land meaningful full-time roles with end-to-end services.",
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
    to: "/services/payroll-taxes" as const,
    title: "Payroll & Taxes",
    desc: "Seamless payroll processing with full tax and regulatory compliance.",
  },
];

const faqs = [
  {
    q: "Why should companies use a staffing agency instead of hiring in-house?",
    a: "Staffing agencies reduce hiring time, cost, and effort by handling candidate sourcing and screening. XSpark enables faster hiring with pre-vetted candidates and flexible workforce solutions.",
  },
  {
    q: "Can companies outsource talent acquisition to external partners?",
    a: "Yes, many businesses outsource talent acquisition to improve hiring efficiency and access wider talent pools. XSpark works as an extended hiring partner to manage sourcing, screening, and onboarding processes.",
  },
  {
    q: "Can one company handle recruitment, payroll, and compliance together?",
    a: "Yes, many businesses prefer a single partner for hiring, payroll, and compliance to simplify operations. XSpark offers integrated workforce solutions across recruitment, payroll, and verification.",
  },
  {
    q: "Do you offer global talent acquisition support?",
    a: "Yes — we offer offshore TA support across 50+ countries with 400+ TA specialists, providing 24/7 coverage across all major timezones.",
  },
  {
    q: "How fast can you fill a role?",
    a: "Most roles are filled in 2–4 weeks. Specialized leadership or compliance roles may take 4–8 weeks depending on requirements.",
  },
  {
    q: "What does an engagement look like?",
    a: "Most clients start with a 90-day pilot — embedded or project-based — to see real pipeline movement before scaling up.",
  },
];

function TalentAcquisitionPage() {
  return (
    <main className="pt-28 pb-20">
      {/* Hero */}
      <section className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary/80">
            Talent Acquisition
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl lg:text-6xl">
            Hire Smarter. Scale Faster.
          </h1>
          <p className="mt-5 text-lg text-navy/70">
            XSpark connects businesses with exceptional talent through strategic sourcing, rigorous
            screening, and efficient recruitment solutions.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/book-consultation"
              className="hover-lift-sm rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Hire Talent Acquisition
            </Link>
            <Link
              to="/employers"
              className="hover-lift-sm rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-navy hover:border-primary"
            >
              Watch Our Success
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 p-8">
          <img
            src={talentHero}
            alt="Talent acquisition specialist sourcing global candidates"
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
            <h3 className="font-display text-xl font-bold">Still Hiring? Connect Us</h3>
            <p className="mt-1 text-sm opacity-90">Get verified results in 24-48 hours</p>
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
            Talent Acquisition Solutions Designed Around Your Business
          </h2>
          <p className="mt-4 text-navy/70">
            Whether you're a growing startup or a global enterprise, XSpark delivers customized
            recruitment solutions that connect you with the right talent—efficiently, strategically,
            and at scale.
          </p>
          <Link
            to="/contact"
            className="hover-lift-sm mt-5 inline-flex rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-navy hover:border-primary"
          >
            Request Talent
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
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

      {/* Full-cycle lifecycle */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Comprehensive Recruitment Support, Every Step of the Way
          </h2>
          <p className="mt-4 text-navy/70">
            Our talent acquisition solutions are designed to support the complete hiring lifecycle,
            helping organizations attract, assess, hire, and retain top talent with confidence.
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
            Our specialized talent acquisition program helps you build high-performing teams from
            day one.
          </p>
          <Link
            to="/book-consultation"
            className="hover-lift-sm rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Talk to a Specialist
          </Link>
        </div>
      </section>

      {/* Behind-the-scenes specialists */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Recruitment Experts Dedicated to Your Success
          </h2>
          <p className="mt-4 text-navy/70">
            Partner with experienced talent acquisition specialists who help you overcome hiring
            challenges and secure the right talent faster.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialists.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40"
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

      {/* Global coverage */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Global Talent Acquisition Support
          </h2>
          <p className="mt-4 text-navy/70">
            XSpark delivers scalable recruitment solutions across international markets, helping
            organizations access skilled talent and specialized hiring expertise wherever business
            growth takes them.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40"
            >
              <div className="text-4xl">{r.flag}</div>
              <h3 className="mt-3 font-display text-lg font-semibold text-navy">{r.name}</h3>
              <p className="text-sm text-navy/70">{r.countries}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="text-navy/60">TA Specialists</div>
                  <div className="font-display text-lg font-bold text-primary">{r.count}</div>
                </div>
                <div>
                  <div className="text-navy/60">Timezone</div>
                  <div className="font-semibold text-navy">{r.tz}</div>
                </div>
              </div>
              <p className="mt-4 text-xs text-navy/70">
                <span className="font-semibold text-navy">Strength:</span> {r.strength}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-navy">24/7 Global Coverage</h3>
              <p className="mt-3 text-sm text-navy/70">
                We provide offshore talent acquisition support across 23+ countries. Access remote
                specialists and dedicated teams anywhere in the world.
              </p>
              <div className="mt-6 flex gap-8">
                <div>
                  <div className="font-display text-3xl font-bold text-primary">402+</div>
                  <div className="text-xs text-navy/60">Global TA Specialists</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-primary">23+</div>
                  <div className="text-xs text-navy/60">Countries Served</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-navy">Why Go Global?</h4>
              <ul className="mt-4 space-y-3">
                {whyGlobal.map((w) => (
                  <li key={w.title} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <div className="font-semibold text-navy">{w.title}</div>
                      <div className="text-sm text-navy/70">{w.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Helping Businesses Hire Better, Faster
          </h2>
          <p className="mt-4 text-navy/70">
            Delivering scalable talent acquisition solutions that connect organizations with the
            right people at the right time.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.company + t.name}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm hover-lift hover:border-primary/40"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                {t.role}
              </div>
              <h3 className="mt-1 font-display text-lg font-semibold text-navy">{t.company}</h3>
              <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-muted/40 p-3 text-center text-xs">
                <div>
                  <div className="text-navy/60">Achievement</div>
                  <div className="font-semibold text-navy">{t.achievement}</div>
                </div>
                <div>
                  <div className="text-navy/60">Timeline</div>
                  <div className="font-semibold text-navy">{t.timeline}</div>
                </div>
                <div>
                  <div className="text-navy/60">Impact</div>
                  <div className="font-semibold text-primary">{t.impact}</div>
                </div>
              </div>
              <p className="mt-4 text-sm italic text-navy/70">"{t.quote}"</p>
              <p className="mt-3 text-sm font-semibold text-navy">— {t.name}</p>
            </div>
          ))}
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
            Everything you need to know about our talent acquisition services. If you're looking for
            something else, just contact us.
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
