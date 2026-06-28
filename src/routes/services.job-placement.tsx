import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/job-placement")({
  head: () => ({
    meta: [
      { title: "Job Placement Services — XSpark Careers" },
      { name: "description", content: "End-to-end job placement services: resume writing, interview coaching, job applications, and direct placement with 230+ partner companies." },
      { property: "og:title", content: "Job Placement Services — XSpark Careers" },
      { property: "og:description", content: "1750+ successful placements. 98% resume success rate. Get hired in 45 days on average." },
    ],
  }),
  component: JobPlacementPage,
});

const stats = [
  { value: "1750+", label: "Successful Placements" },
  { value: "98%", label: "Resume Success Rate" },
  { value: "230+", label: "Partner Companies" },
  { value: "45 Days", label: "Avg. Time to Placement" },
];

const services = [
  { title: "Full-Time Job Placement", desc: "Direct placement into full-time roles with our 230+ partner companies across the US." },
  { title: "Resume Writing", desc: "ATS-friendly resumes crafted by experts — 98% of clients land interviews." },
  { title: "Interview Coaching", desc: "Mock interviews, technical prep, and behavioral coaching from senior engineers." },
  { title: "Job Applications", desc: "We apply to relevant roles on your behalf — saving you 20+ hours a week." },
];

const steps = [
  { n: "01", title: "Free Consultation", desc: "Understand your background, goals, and visa status." },
  { n: "02", title: "Profile Enhancement", desc: "Rewrite your resume, LinkedIn, and portfolio for impact." },
  { n: "03", title: "Interview Process", desc: "Mock interviews and tailored prep for each target role." },
  { n: "04", title: "Job Matching", desc: "We submit you to roles aligned with your skills and salary band." },
  { n: "05", title: "Successful Placement", desc: "Offer negotiation and onboarding support — all the way in." },
];

const stories = [
  { name: "Shiva Mandari", role: "Software Engineer", salary: "$135K" },
  { name: "Adi Lakshmi", role: "Data Analyst", salary: "$95K" },
  { name: "Dhrithi Alva", role: "Full-Stack Developer", salary: "$120K" },
  { name: "Ruthvika", role: "QA Engineer", salary: "$105K" },
  { name: "Shruthi Prasad", role: "Cloud Engineer", salary: "$145K" },
  { name: "Kalyan Gaddam", role: "DevOps Engineer", salary: "$155K" },
];

const faqs = [
  { q: "Who is eligible for the job placement program?", a: "Recent graduates, working professionals, and candidates on F1/OPT/CPT/H1B/GC/USC are all welcome." },
  { q: "How long does it take to get placed?", a: "On average our candidates are placed within 45 days of joining the program." },
  { q: "Do you guarantee a job?", a: "We don't guarantee a job, but our 98% interview success rate speaks for itself." },
  { q: "What salary range can I expect?", a: "Our placed candidates typically earn between $85K and $170K depending on experience and stack." },
  { q: "Is the program online or in-person?", a: "Fully online — coaching, mock interviews, and submissions are all remote-friendly." },
];

function JobPlacementPage() {
  return (
    <main className="pt-28 pb-20">
      <section className="container-x">
        <div className="mt-4 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-navy sm:text-5xl">Job Placement Services</h1>
          <p className="mt-3 text-lg font-semibold text-primary">Accelerate your career with expert job-search support and access to top opportunities.</p>
        <p className="mt-4 text-navy/70">From professional resume development and interview preparation to direct placement through our network of 230+ hiring partners, we manage every stage of your job search—helping you secure the right role faster and maximize your earning potential.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="hover-lift-sm rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Get Started Free</Link>
            <a href="#process" className="hover-lift-sm rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-navy hover:border-primary">See How It Works</a>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/0 p-6 text-center hover-lift">
              <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-navy/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <h2 className="font-display text-3xl font-bold text-navy">What's included</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm hover-lift hover:border-primary/40">
              <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <h2 className="font-display text-3xl font-bold text-navy text-center">Without us vs. With us</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40">
            <h3 className="font-display text-lg font-semibold text-navy">Conventional Job Search Approach</h3>
            <ul className="mt-4 space-y-2 text-sm text-navy/70">
              <li>• Independent job search with limited strategic support</li>
              <li>• Restricted access to high-quality employment opportunities</li>
              <li>• Generic application materials and lower visibility</li>
              <li>• Competitive applicant pools on public job platforms</li>
              <li>• Limited interview preparation and performance feedback</li>
              <li>• Unpredictable hiring timelines and outcomes</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-6 text-primary-foreground shadow-glow">
            <h3 className="font-display text-lg font-semibold">The XSpark Career Acceleration Program</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Comprehensive career strategy and job-search management</li>
              <li>• Exclusive access to a broad employer partner network</li>
              <li>• Premium resume optimization aligned with ATS standards</li>
              <li>• Direct introductions to hiring organizations</li>
              <li>• Expert-led interview coaching and skill development</li>
              <li>• Ongoing support through every stage of the hiring process</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="process" className="container-x mt-20">
        <h2 className="font-display text-3xl font-bold text-navy">Our 5-step process</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40">
              <div className="font-display text-3xl font-bold text-primary/30">{s.n}</div>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-1 text-sm text-navy/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <h2 className="font-display text-3xl font-bold text-navy">Recent success stories</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <div key={s.name} className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40">
              <div className="font-display text-lg font-semibold text-navy">{s.name}</div>
              <div className="text-sm text-navy/70">{s.role}</div>
              <div className="mt-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{s.salary}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <h2 className="font-display text-3xl font-bold text-navy">Who we place</h2>
        <p className="mt-2 text-navy/70">F1 / OPT / CPT / H1B / GC / USC across IT, data, cloud, QA, and product roles.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Software Engineering", "Data Analytics", "Cloud & DevOps", "QA Automation", "Cybersecurity", "Product Management", "Business Analyst", "Full-Stack"].map((t) => (
            <span key={t} className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-navy">{t}</span>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <h2 className="font-display text-3xl font-bold text-navy">FAQ</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl border border-border bg-white p-5">
              <summary className="cursor-pointer font-semibold text-navy">{f.q}</summary>
              <p className="mt-2 text-sm text-navy/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/70 p-10 text-center text-primary-foreground shadow-glow">
          <h2 className="font-display text-3xl font-bold">Ready to land your next role?</h2>
          <p className="mt-2 opacity-90">Book a free consultation and let's build your placement plan.</p>
          <Link to="/contact" className="hover-lift-sm mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary">Get Started</Link>
        </div>
      </section>
    </main>
  );
}
