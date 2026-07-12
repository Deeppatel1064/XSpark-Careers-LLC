import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Code2,
  FileText,
  MessageSquare,
  Briefcase,
  Users,
  Target,
} from "lucide-react";
import itTrainingHero from "@/assets/it-training-hero.jpg";
import itTrainingRoles from "@/assets/it-training-roles.jpg";
import itTrainingPractical from "@/assets/it-training-practical.jpg";
import itTrainingOutcome from "@/assets/it-training-outcome.jpg";

export const Route = createFileRoute("/services/it-training")({
  head: () => ({
    meta: [
      { title: "IT Training & Placement — XSpark Careers" },
      {
        name: "description",
        content:
          "Not just training — job-ready transformation. Real-world IT training, practical projects, resume building, and interview preparation that gets you hired.",
      },
      { property: "og:title", content: "IT Training & Placement — XSpark Careers" },
      {
        property: "og:description",
        content:
          "Role-based IT training across frontend, backend, QA, DevOps, product, and project roles.",
      },
    ],
  }),
  component: ITTrainingPage,
});

const stats = [
  { value: "3,400+", label: "People Trained", sub: "Across multiple IT roles and technologies" },
  {
    value: "98%",
    label: "Interview Readiness",
    sub: "To confidently clear real-world technical interviews",
  },
  {
    value: "45+",
    label: "Tech Roles Covered",
    sub: "From frontend, backend, QA to product and project roles",
  },
];

const services = [
  {
    icon: Code2,
    title: "Role-Based IT Training",
    desc: "Hands-on training across frontend, backend, QA, DevOps, product, and project roles.",
  },
  {
    icon: FileText,
    title: "Resume & Profile Building",
    desc: "Create ATS-friendly resumes and optimized profiles aligned with real job requirements.",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation & Mock Sessions",
    desc: "Practice with real interview scenarios, technical questions, and role-based discussions.",
  },
  {
    icon: Briefcase,
    title: "Practical Projects & Real Exposure",
    desc: "Work on industry-level projects to gain confidence and real-world experience.",
  },
];

const trainingPoints = [
  "Role-focused training aligned with current industry needs",
  "Programs covering Frontend, Backend, QA, DevOps, Data, and Product roles",
  "Practical learning based on real workplace scenarios",
  "Suitable for beginners, graduates, and career changers",
];

const practicalPoints = [
  "Work on industry-relevant projects and real-world scenarios",
  "Create professional, ATS-optimized resumes",
  "Participate in role-specific mock interviews",
  "Develop the confidence to present projects and technical skills effectively",
];

const careerCards = [
  {
    icon: Briefcase,
    title: "240+ Real-World Projects",
    desc: "Hands-on projects designed to match actual job responsibilities.",
  },
  {
    icon: Users,
    title: "1:1 Mentorship Support",
    desc: "Personal guidance to improve skills, resumes, and interview performance.",
  },
  {
    icon: Target,
    title: "End-to-End Preparation",
    desc: "From learning to resume to interviews — everything covered in one journey.",
  },
];

const placedAt = [
  "TikTok",
  "Meta",
  "Amazon",
  "Microsoft",
  "Google",
  "PayPal",
  "Intel",
  "Discover",
  "Accenture",
  "Capital One",
  "Chase",
  "Fidelity",
  "Bank of America",
  "Stripe",
  "Amgen",
  "Verisk",
];

const otherServices = [
  {
    to: "/services/talent-acquisition" as const,
    title: "Talent Acquisition",
    desc: "Strategic hiring support to build long-term, high-performing teams.",
  },
  {
    to: "/services/job-placement" as const,
    title: "Job Placement",
    desc: "Helping professionals land meaningful full-time roles with end-to-end services.",
  },
  {
    to: "/services/payroll-taxes" as const,
    title: "Accounting & Taxes",
    desc: "Seamless payroll processing with full tax and regulatory compliance.",
  },
  {
    to: "/services/recruitment-staffing" as const,
    title: "Recruitment & Staffing",
    desc: "Finding skilled professionals aligned with your business needs.",
  },
];

const faqs = [
  {
    q: "Who is this IT training designed for?",
    a: "Beginners, recent graduates, career switchers, and professionals looking to upskill. Every track is structured around real job roles, not just theory.",
  },
  {
    q: "What IT roles do you train for?",
    a: "Frontend, backend, full-stack, QA / SDET, DevOps, cloud, data engineering, product management, project / scrum roles, and more.",
  },
  {
    q: "Do you guarantee placement after training?",
    a: "We don't promise jobs — we promise readiness. Our track record shows 98% interview readiness, and our placement team actively supports you through interviews.",
  },
  {
    q: "Is the training online or in person?",
    a: "Training is fully online with live instructor-led sessions, recorded backups, and 1:1 mentorship — so you can learn from anywhere.",
  },
  {
    q: "How long does the training take?",
    a: "Most tracks run 8–16 weeks depending on the role, followed by 2–4 weeks of intensive interview prep and placement support.",
  },
  {
    q: "Do you help with resumes and interview prep?",
    a: "Yes — every candidate gets ATS-friendly resume building, profile optimization, mock interviews, and 1:1 feedback as part of the program.",
  },
];

function ITTrainingPage() {
  return (
    <main className="pt-28 pb-20">
      {/* Hero */}
      <section className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary/80">
            IT Training
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl lg:text-6xl">
            Transforming Skills into Career Opportunities
          </h1>
          <p className="mt-5 text-lg text-navy/70">
            Our industry-focused IT training programs combine hands-on learning, real-world
            projects, and interview preparation to help you build the skills employers value and
            become job-ready with confidence.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/book-consultation"
              className="hover-lift-sm rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Enroll Now
            </Link>
            <Link
              to="/job-seekers"
              className="hover-lift-sm rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-navy hover:border-primary"
            >
              Watch Our Success
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 p-8">
          <img
            src={itTrainingHero}
            alt="IT training classroom with students learning programming"
            width={1024}
            height={768}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Candidates Placed In */}
      <section className="container-x mt-20">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-navy/60">
          Our Candidates Placed In
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {placedAt.map((c) => (
            <div
              key={c}
              className="rounded-full border border-border bg-white px-5 py-2 text-sm font-semibold text-navy/80"
            >
              {c}
            </div>
          ))}
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
            <h3 className="font-display text-xl font-bold">Confused About Role?</h3>
            <p className="mt-1 text-sm opacity-90">
              Get a free consultation and choose the right IT career path.
            </p>
            <Link
              to="/book-consultation"
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
            Build Skills. Gain Experience. Launch Your IT Career.
          </h2>
          <p className="mt-4 text-navy/70">
            Practical training, industry-relevant projects, and career support that help you become
            job-ready and stand out to employers.
          </p>
          <Link
            to="/contact"
            className="hover-lift-sm mt-5 inline-flex rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-navy hover:border-primary"
          >
            Enroll Now
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

      {/* What we do in Training */}
      <section className="container-x mt-24 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 p-8">
          <img
            src={itTrainingRoles}
            alt="IT training across frontend, backend, QA and product roles"
            width={1024}
            height={768}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">
            What We Do in Training
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy">
            Role-Based IT Training Built for Real Careers
          </h2>
          <p className="mt-4 text-navy/70">
            At XSpark, we train candidates for real-world IT roles—not just technical concepts. Our
            programs are designed around industry requirements, helping learners develop the
            practical skills employers expect across today's most in-demand technology careers.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-navy/80">
            {trainingPoints.map((p) => (
              <li key={p} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-navy/70">
            Our approach goes beyond teaching technical skills. We focus on helping candidates
            understand how technologies are applied in real business environments, ensuring they are
            prepared for both the job requirements and the hiring process.
          </p>
        </div>
      </section>

      {/* How we train */}
      <section className="container-x mt-24 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">
            How We Train
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy">
            Practical Training Built for Real-World Success
          </h2>
          <p className="mt-4 text-navy/70">
            Technical knowledge is important, but practical application is what sets candidates
            apart. Our training programs emphasize hands-on experience, real-world projects, and
            career-focused preparation to help learners build confidence and become job-ready.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-navy/80">
            {practicalPoints.map((p) => (
              <li key={p} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-navy/70">
            By simulating real workplace environments and interview experiences, we help candidates
            gain the practical expertise, communication skills, and professional confidence needed
            to succeed in today's competitive job market.
          </p>
        </div>
        <div className="order-1 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 p-8 lg:order-2">
          <img
            src={itTrainingPractical}
            alt="Hands-on practical IT training with real projects"
            width={1024}
            height={768}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Outcome */}
      <section className="container-x mt-24 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 p-8">
          <img
            src={itTrainingOutcome}
            alt="From training to job-ready confidence"
            width={1024}
            height={768}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">
            Outcome / Result
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy">
            From Learning to Career Readiness
          </h2>
          <p className="mt-4 text-navy/70">
            Training is only valuable when it prepares you for real opportunities. At XSpark, we
            focus on transforming technical knowledge into practical, job-ready skills that align
            with industry expectations and workplace demands.
          </p>
          <p className="mt-3 text-navy/70">
            Candidates learn how to apply technologies in real-world scenarios, communicate their
            experience effectively, and approach interviews with confidence. Rather than relying on
            memorized answers, we help learners develop problem-solving abilities and a deeper
            understanding of their chosen field.
          </p>
          <p className="mt-3 text-navy/70">
            By the end of the program, you'll have hands-on experience, industry-relevant skills,
            and a professional profile that positions you for success in today's competitive job
            market.
          </p>
        </div>
      </section>

      {/* Career Journey */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Launch Your IT Career with Confidence
          </h2>
          <p className="mt-4 text-navy/70">
            Gain industry-relevant technical skills, work on real-world projects, and develop the
            experience employers value. Our training programs combine practical learning, career
            guidance, and interview preparation to help you become job-ready and stand out in
            today's competitive technology market.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {careerCards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/book-consultation"
            className="hover-lift-sm inline-flex rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Talk to our experts
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
            Everything you need to know about our IT training programs. If you're looking for
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
            Got a Job Hunt Stress? We Love Those.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl opacity-90">
            Big careers usually start with a simple message. Send us one and let's see what we can
            build together.
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
