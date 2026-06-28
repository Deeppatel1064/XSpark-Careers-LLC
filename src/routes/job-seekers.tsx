import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { Briefcase, FileText, Search, MessagesSquare, Map, Trophy, ArrowRight } from "lucide-react";
import { VisaSupport, WhySeekersChoose, TransparentProcess, BookCallCTA } from "../components/site/PageExtras";

export const Route = createFileRoute("/job-seekers")({
  head: () => ({
    meta: [
      { title: "For Job Seekers — Career Placement & Resume Support | XSpark" },
      { name: "description", content: "Career placement, resume enhancement, job search support, interview prep and career strategy for OPT, CPT, H1B, GC and PR candidates." },
      { property: "og:title", content: "Job Seekers — XSpark Careers" },
      { property: "og:description", content: "End-to-end career support for global professionals." },
      { property: "og:url", content: "/job-seekers" },
    ],
    links: [{ rel: "canonical", href: "/job-seekers" }],
  }),
  component: JobSeekersPage,
});

const services = [
  { icon: Briefcase, title: "Career Placement Assistance", desc: "Hands-on support from profile review to signed offer letter — tailored to OPT, CPT, H1B, GC and PR candidates.", to: "/contact" },
  { icon: FileText, title: "Resume Enhancement", desc: "Recruiter-grade rewrites, ATS optimization and visual hierarchy that converts.", to: "/contact" },
  { icon: Search, title: "Job Search Support", desc: "Curated job leads, hidden-market access and direct submissions to hiring partners.", to: "/contact" },
  { icon: MessagesSquare, title: "Interview Preparation", desc: "Behavioral, technical and case interview drills with structured feedback.", to: "/contact" },
  { icon: Map, title: "Career Strategy", desc: "Long-term roadmap planning — roles, skills, salary growth and geo strategy.", to: "/contact" },
];

const wins = [
  { name: "Neha S.", outcome: "OPT → Senior Data Analyst, NYC", note: "Signed in 7 weeks with 40% pay bump." },
  { name: "Daniel R.", outcome: "H1B Transfer → Cloud Engineer, Seattle", note: "Three offers, negotiated +$22K base." },
  { name: "Aditi P.", outcome: "Recent Grad → PM Associate, Toronto", note: "First job out of school at a top SaaS." },
];

function JobSeekersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Job Seekers"
        title={<>Land the role you were <span className="text-gradient">built for</span></>}
        description="A personal career strategist, ATS-grade resume, hiring partner access and interview coaching — all under one roof."
      >
        <Link to="/contact" className="hover-lift-sm inline-flex rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
          Start My Application
        </Link>
      </PageHero>

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="border-glow group h-full rounded-2xl border border-border bg-card p-7 hover-lift">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-emerald text-emerald-foreground shadow-emerald">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <Link to={s.to} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Candidate Success</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Recent wins from our community</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {wins.map((w, i) => (
            <Reveal key={w.name} delay={i * 0.06}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 hover-lift">
                <Trophy className="absolute -right-4 -top-4 h-20 w-20 text-primary/10" />
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald">{w.name}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-navy">{w.outcome}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WhySeekersChoose />
      <VisaSupport />
      <TransparentProcess />
      <BookCallCTA />
    </>
  );
}
