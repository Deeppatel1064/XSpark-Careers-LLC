import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CTAButtons } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { ShieldCheck, Eye, Lightbulb, HeartHandshake, Award, Target, Rocket, Users, Globe, TrendingUp, Zap } from "lucide-react";
import ceoPhoto from "@/assets/yash.png.asset.json";
import vpPhoto from "@/assets/deep.png.asset.json";
import headPhoto from "@/assets/harsh.png.asset.json";
import { Certifications, BookCallCTA } from "../components/site/PageExtras";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About XSpark Careers — Our Story, Mission & Team" },
      { name: "description", content: "Empowering careers, strengthening businesses. Meet the team and values behind XSpark Careers LLC." },
      { property: "og:title", content: "About XSpark Careers" },
      { property: "og:description", content: "Our story, mission and leadership." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2021", title: "Founded", desc: "XSpark Careers launches with a mission to humanize global hiring.", icon: Rocket, stat: "3", statLabel: "Founders" },
  { year: "2022", title: "Early Traction", desc: "Signed first enterprise clients and built core delivery teams.", icon: Zap, stat: "50+", statLabel: "First clients" },
  { year: "2023", title: "First 1,000 placements", desc: "Established hiring desks across North America with proven speed.", icon: Users, stat: "1,000", statLabel: "Placements" },
  { year: "2024", title: "Service Expansion", desc: "Launched executive search and RPO solutions for mid-market growth.", icon: Target, stat: "200+", statLabel: "Partner companies" },
  { year: "2025", title: "Global Expansion", desc: "Opened UK and Australia operations, partnered with 500+ companies.", icon: Globe, stat: "4", statLabel: "Countries" },
  { year: "2026", title: "Industry Leader", desc: "Crossed 10,000 candidates assisted and expanded enterprise partnerships.", icon: TrendingUp, stat: "10K+", statLabel: "Candidates placed" },
];

const values = [
  { icon: ShieldCheck, name: "Integrity", desc: "We do the right thing, every time, even when no one is watching." },
  { icon: Eye, name: "Transparency", desc: "Open communication and honest expectations at every stage." },
  { icon: Lightbulb, name: "Innovation", desc: "We invest in technology and process design that moves the market." },
  { icon: HeartHandshake, name: "Commitment", desc: "We don't stop until our candidates and clients win." },
  { icon: Award, name: "Excellence", desc: "Recruiter-grade quality on every resume, screen and submission." },
];

const team = [
  {
    name: "Yash Patel",
    role: "CEO & Founder",
    photo: ceoPhoto.url,
    bio: "Leads XSpark's vision and growth strategy across global markets.",
  },
  {
    name: "Deep Patel",
    role: "CFO & Founder",
    photo: vpPhoto.url,
    bio: "Drives financial strategy and operational excellence at XSpark.",
  },
  {
    name: "Harsh Patel",
    role: "Operations Consultant",
    photo: headPhoto.url,
    bio: "Oversees day-to-day operations and delivery quality across teams.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        variant="dark-blue"
        eyebrow="About XSpark"
        title={<>Empowering Careers. <span className="text-gradient-dark">Strengthening Businesses.</span></>}
        description="We're a global recruitment partner blending technology, domain expertise and human judgment to deliver outcomes that matter."
      >
        <CTAButtons variant="dark-blue" />
      </PageHero>

      {/* Story timeline */}
      <section className="container-x py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Our Story</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            What started as a small team passionate about better hiring has grown into a global firm trusted by leading employers and ambitious professionals.
          </p>
        </Reveal>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-sky to-transparent md:left-1/2 md:-translate-x-px" />
          <div className="space-y-10 md:space-y-0">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={m.year} delay={i * 0.08}>
                  <div className="relative grid gap-4 md:grid-cols-2 md:items-center md:gap-8 md:py-6">
                    {/* Card side */}
                    <div className={`pl-10 md:pl-0 ${isLeft ? "md:pr-10 md:text-right" : "md:order-2 md:pl-10"}`}>
                      <div className="inline-block w-full max-w-md rounded-2xl border border-border bg-card p-6 hover-lift shadow-glow">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary">{m.year}</p>
                        <h3 className="mt-1 font-display text-xl font-semibold text-navy">{m.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                      </div>
                    </div>
                    {/* Number marker */}
                    <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                      <div className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-primary-foreground shadow-glow">
                        <span className="text-sm font-bold">{i + 1}</span>
                      </div>
                    </div>
                    {/* Right-side content */}
                    <div className={`hidden pl-10 md:block md:pl-0 ${isLeft ? "md:order-2 md:pl-10" : "md:pr-10 md:text-right"}`}>
                      <div className="inline-flex items-center gap-3 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur-sm">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                          <m.icon className="h-5 w-5" />
                        </div>
                        <div className={isLeft ? "" : "text-right"}>
                          <p className="font-display text-2xl font-bold text-navy">{m.stat}</p>
                          <p className="text-xs text-muted-foreground">{m.statLabel}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="container-x grid gap-6 py-10 md:grid-cols-2">
        {[
          { icon: Target, title: "Our Mission", body: "To connect skilled talent with meaningful opportunity — and help organizations build teams that change industries." },
          { icon: Rocket, title: "Our Vision", body: "A world where geography, status, or background never limits anyone from reaching the role they were built for." },
        ].map((b, i) => (
          <Reveal key={b.title} delay={i * 0.1}>
            <div className="border-glow relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-navy">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Values */}
      <section className="container-x py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Core Values</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">The principles we hire, work and partner by</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.05}>
              <div className="tilt-card h-full rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-navy">{v.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Leadership
      <section className="container-x py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Leadership</p>
          <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">A team obsessed with outcomes</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {team.map((t, i) => {
            const isDeep = t.name === "Deep Patel";
            return (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="hover-lift group relative overflow-hidden rounded-2xl border border-border bg-card shadow-glow max-w-[280px] mx-auto">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={t.photo}
                    alt={`${t.name}, ${t.role} at XSpark Careers`}
                    loading="lazy"
                    width={300}
                    height={300}
                    className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${isDeep ? "scale-125 origin-top" : ""}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="font-display text-lg font-semibold">{t.name}</h3>
                    <p className="text-xs text-white/80">{t.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground">{t.bio}</p>
                </div>
              </div>
            </Reveal>
          )})}
        </div>
      </section> */}

      <Certifications />
      <BookCallCTA />
    </>
  );
}
