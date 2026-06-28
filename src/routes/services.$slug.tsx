import { createFileRoute, Link, notFound } from "@tanstack/react-router";

type ServiceContent = {
  title: string;
  tagline: string;
  description: string;
  highlights: { title: string; desc: string }[];
};

const content: Record<string, ServiceContent> = {
  "recruitment-staffing": {
    title: "Recruitment & Staffing",
    tagline: "Right people. Right roles. Right on time.",
    description:
      "Our recruitment and staffing services help organizations hire confidently across contract, contract-to-hire, and direct-hire engagements.",
    highlights: [
      { title: "Contract Staffing", desc: "Flexible talent for short and long-term projects." },
      { title: "Contract-to-Hire", desc: "Evaluate fit before making a permanent offer." },
      { title: "Direct Hire", desc: "Full-time placements aligned with your culture." },
      { title: "Volume Hiring", desc: "Scale teams quickly without sacrificing quality." },
    ],
  },
  "talent-acquisition": {
    title: "Talent Acquisition",
    tagline: "Strategic hiring built around your roadmap.",
    description:
      "We partner with your leadership to design and execute hiring strategies that map to business goals — from workforce planning to onboarding.",
    highlights: [
      { title: "Workforce Planning", desc: "Forecast roles and skills you'll need next." },
      { title: "Employer Branding", desc: "Stand out to top candidates in your space." },
      { title: "Executive Search", desc: "Targeted search for leadership roles." },
      { title: "Diversity Hiring", desc: "Inclusive sourcing and structured interviews." },
    ],
  },
  "background-verification": {
    title: "Background Verification",
    tagline: "Hire with confidence and compliance.",
    description:
      "Comprehensive pre-employment screening designed to verify credentials, protect your business, and stay compliant with regulations.",
    highlights: [
      { title: "Employment Checks", desc: "Confirm prior roles, tenure, and responsibilities." },
      { title: "Education Verification", desc: "Validate degrees and certifications." },
      { title: "Identity & Address", desc: "Government ID and address verification." },
      { title: "Criminal Records", desc: "Court and database checks where permitted." },
    ],
  },
  "payroll-taxes": {
    title: "Payroll & Taxes",
    tagline: "Accurate payroll. Stress-free tax compliance.",
    description:
      "End-to-end payroll processing and tax support for contractors and full-time employees — pay slips, filings, and year-end documentation.",
    highlights: [
      { title: "Payroll Processing", desc: "On-time, accurate pay cycles every month." },
      { title: "Tax Filing Support", desc: "Help with W-2, 1099, and quarterly filings." },
      { title: "Benefits Admin", desc: "Healthcare, 401(k), and PTO management." },
      { title: "Compliance", desc: "Stay current with federal and state regulations." },
    ],
  },
  "it-training": {
    title: "IT Training",
    tagline: "Skill up. Get hired. Grow your career.",
    description:
      "Job-ready training in the most in-demand tech stacks, taught by industry practitioners with real-world projects and interview prep.",
    highlights: [
      { title: "Cloud & DevOps", desc: "AWS, Azure, Kubernetes, Terraform, CI/CD." },
      { title: "Data & AI", desc: "Python, SQL, ML, GenAI, and data engineering." },
      { title: "Full-Stack Development", desc: "React, Node, TypeScript, and modern APIs." },
      { title: "QA & Automation", desc: "Selenium, Playwright, API testing." },
    ],
  },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { slug: string; data?: ServiceContent } => {
    if (params.slug === "job-placement") return { slug: params.slug };
    const data = content[params.slug];
    if (!data) throw notFound();
    return { slug: params.slug, data };
  },
  head: ({ loaderData }) => {
    if (!loaderData || loaderData.slug === "job-placement") return { meta: [] };
    const d = loaderData.data!;
    return {
      meta: [
        { title: `${d.title} — XSpark Careers` },
        { name: "description", content: d.description },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { data } = Route.useLoaderData();
  if (!data) return null;

  return (
    <main className="pt-28 pb-20">
      <section className="container-x">
        <div className="mt-4 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-navy sm:text-5xl">{data.title}</h1>
          <p className="mt-3 text-lg text-primary font-semibold">{data.tagline}</p>
          <p className="mt-4 text-navy/70">{data.description}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {data.highlights.map((h: { title: string; desc: string }) => (
            <div key={h.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm hover-lift hover:border-primary/40">
              <h3 className="font-display text-lg font-semibold text-navy">{h.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-navy">Ready to get started?</h2>
          <p className="mt-2 text-navy/70">Talk to our team about your hiring or career goals.</p>
          <Link to="/contact" className="hover-lift-sm mt-5 inline-flex rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
