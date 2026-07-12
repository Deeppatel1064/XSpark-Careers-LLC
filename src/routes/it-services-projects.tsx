import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Code2,
  FolderKanban,
  MonitorPlay,
  Award,
  Users,
  Rocket,
  CheckCircle2,
  Sparkles,
  Zap,
  Building2,
  BookOpen,
  Target,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/it-services-projects")({
  head: () => ({
    meta: [
      { title: "All IT Services & Projects — XSpark Careers" },
      {
        name: "description",
        content:
          "Internships, live projects, final-year projects, industrial training, certification courses, and placement support for aspiring IT professionals across the USA and Canada.",
      },
      { property: "og:title", content: "All IT Services & Projects — XSpark Careers" },
      {
        property: "og:description",
        content:
          "End-to-end IT services including internships, live projects, training, and placement support.",
      },
    ],
    links: [{ rel: "canonical", href: "/it-services-projects" }],
  }),
  component: ITServicesProjectsPage,
});

const services = [
  {
    icon: GraduationCap,
    title: "IT Internships",
    desc: "Gain real company exposure with structured internship programs across development, QA, data, and cloud roles.",
  },
  {
    icon: Code2,
    title: "Live Projects",
    desc: "Work on ongoing, production-style projects with mentorship from industry professionals.",
  },
  {
    icon: FolderKanban,
    title: "Final Year Projects",
    desc: "End-to-end academic project support with documentation, implementation, and viva preparation.",
  },
  {
    icon: MonitorPlay,
    title: "Industrial Training",
    desc: "Short-term, intensive training programs aligned with real IT job requirements.",
  },
  {
    icon: Award,
    title: "Certification Training",
    desc: "Prepare for in-demand certifications in cloud, agile, testing, data, and development stacks.",
  },
  {
    icon: Users,
    title: "Placement Support",
    desc: "Resume building, mock interviews, and direct interview referrals with hiring partners.",
  },
  {
    icon: BookOpen,
    title: "Online & Offline Training",
    desc: "Flexible learning modes with live sessions, recorded content, and hands-on labs.",
  },
  {
    icon: Target,
    title: "Project Guidance",
    desc: "1:1 mentoring to plan, design, and deliver academic or portfolio projects confidently.",
  },
];

const eligibility = [
  "Fresh Graduates",
  "Final-Year Students",
  "Career Switchers",
  "Working Professionals",
  "Internship Seekers",
  "Certification Aspirants",
];

const projectTracks = [
  "Full Stack Web Apps",
  "Mobile App Development",
  "Data Engineering Pipelines",
  "Machine Learning Models",
  "Cloud & DevOps Automation",
  "Cybersecurity Labs",
  "QA & Test Automation",
  "UI/UX Design Systems",
];

const benefits = [
  { icon: Sparkles, title: "Real-World Experience" },
  { icon: Zap, title: "Fast Skill Building" },
  { icon: Building2, title: "Industry Exposure" },
  { icon: Users, title: "Mentorship from Experts" },
  { icon: Award, title: "Certificates & Portfolio" },
  { icon: Rocket, title: "Placement Assistance" },
];

function ITServicesProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="All IT Services & Projects"
        title={
          <>
            Build Real Skills with{" "}
            <span className="text-gradient">Internships, Projects & Training</span>
          </>
        }
        description="From internships and live projects to certification training and placement support — everything you need to start or grow your IT career in one place."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/book-consultation"
            className="hover-lift-sm rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Enroll Now
          </Link>
          <Link
            to="/job-seekers"
            className="hover-lift-sm rounded-full border border-navy/20 bg-white/80 px-6 py-3 text-sm font-semibold text-navy backdrop-blur hover:bg-white"
          >
            Explore Careers
          </Link>
        </div>
      </PageHero>

      {/* SERVICES BENTO */}
      <section className="container-x py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Everything You Need to Become Job-Ready
          </h2>
          <p className="mt-3 text-muted-foreground">
            A complete ecosystem of internships, projects, training, and career support.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="hover-lift group h-full rounded-2xl border border-border bg-card p-6 shadow-glow hover:border-primary/40">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-glow transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECT TRACKS */}
      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Project Tracks We Offer
            </h2>
            <p className="mt-3 text-muted-foreground">
              Hands-on projects across the most in-demand technology stacks.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {projectTracks.map((t) => (
              <div
                key={t}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-navy shadow-sm hover:border-primary/40 hover:text-primary transition"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="container-x py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Who Can Apply?</h2>
          <p className="mt-3 text-muted-foreground">
            Open to students, freshers, and professionals looking to build practical IT skills.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eligibility.map((e) => (
            <div
              key={e}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full gradient-primary text-primary-foreground shadow-glow">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <span className="font-medium text-navy">{e}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Why Choose XSpark for IT Services?
            </h2>
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

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 text-primary-foreground shadow-elegant sm:p-16">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative text-center">
            <Rocket className="mx-auto h-10 w-10" />
            <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Ready to Start Your IT Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">
              Join internships, work on live projects, and get the training & placement support you
              need to land your dream role.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/book-consultation"
                className="hover-lift-sm rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-glow hover:bg-white/90"
              >
                Enroll Now
              </Link>
              <Link
                to="/services/it-training"
                className="hover-lift-sm inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                Explore IT Training <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
