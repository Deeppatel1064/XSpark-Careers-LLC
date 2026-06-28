import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Shield, GraduationCap, Briefcase, UserCheck } from "lucide-react";
import bgvHero from "@/assets/background-verification-hero.jpg";
import bgvSolutions from "@/assets/bgv-solutions.jpg";
import bgvSecurity from "@/assets/bgv-security.jpg";
import bgvCredentials from "@/assets/bgv-credentials.jpg";

export const Route = createFileRoute("/services/background-verification")({
  head: () => ({
    meta: [
      { title: "Background Verification Services USA — XSpark Careers" },
      { name: "description", content: "Protect your business with thorough employee background checks, employment verification, education screening, and criminal background check services. Trusted by companies across the USA." },
      { property: "og:title", content: "Background Verification Services USA — XSpark Careers" },
      { property: "og:description", content: "Comprehensive employee background checks with 24–48 hour turnaround." },
    ],
  }),
  component: BackgroundVerificationPage,
});

const stats = [
  { value: "56K+", label: "Verifications Completed", sub: "Candidates screened across the USA" },
  { value: "99.9%", label: "Accuracy Rate", sub: "Audited, court-grade verification reports" },
  { value: "24-48h", label: "Average Turnaround", sub: "From request to delivered report" },
];

const services = [
  { icon: Briefcase, title: "Employment Verification", desc: "Comprehensive employment history verification including job titles, dates of employment, and salary confirmation." },
  { icon: GraduationCap, title: "Education Verification", desc: "Verify academic credentials including degrees, diplomas, certifications, and attendance." },
  { icon: Shield, title: "Criminal Background Check", desc: "Thorough criminal background screening including federal, state, and county records." },
  { icon: UserCheck, title: "Reference Verification", desc: "Validate candidate credibility through direct feedback from previous employers." },
];

const quickChecks = [
  { icon: Shield, title: "Criminal Checks", desc: "Comprehensive criminal background check service USA with nationwide coverage." },
  { icon: Briefcase, title: "Employment Verification", desc: "Complete employment verification services USA for all previous employers." },
  { icon: GraduationCap, title: "Education Verification", desc: "Education & employment verification directly with institutions." },
];

const otherServices = [
  { to: "/services/talent-acquisition" as const, title: "Talent Acquisition", desc: "Strategic hiring support to build long-term, high-performing teams." },
  { to: "/services/job-placement" as const, title: "Job Placement", desc: "Helping professionals land meaningful full-time roles with end-to-end services." },
  { to: "/services/it-training" as const, title: "IT Training", desc: "Training that prepares candidates for real-world tech careers." },
  { to: "/services/payroll-taxes" as const, title: "Payroll & Taxes", desc: "Seamless payroll processing with full tax and regulatory compliance." },
];

const faqs = [
  { q: "What is included in a pre-employment background check?", a: "Our standard pre-employment background check covers criminal history (federal, state, county), employment verification, education verification, and reference checks. Optional add-ons include credit, drug, motor vehicle, and global searches." },
  { q: "How long does a background check take?", a: "Most background checks are completed within 24–48 hours. Complex cases involving international records or court delays may take 3–5 business days." },
  { q: "Are your background checks FCRA compliant?", a: "Yes. All our screening processes are fully compliant with the Fair Credit Reporting Act (FCRA), state-specific regulations, and EEOC guidelines." },
  { q: "Do you offer global background checks?", a: "Yes — we have unmatched global reach with verification capabilities across 200+ countries, including international criminal, education, and employment checks." },
  { q: "Can you verify professional licenses and credentials?", a: "Absolutely. We contact the associated state government, granting source, or issuing agency directly to verify status, sanctions, restrictions, and expiration dates." },
  { q: "Why is pre-employment background screening important?", a: "It helps you make smart, well-informed hiring decisions, reduces turnover, protects your workplace, and ensures the individuals you hire fit well within your culture." },
];

function BackgroundVerificationPage() {
  return (
    <main className="pt-28 pb-20">
      {/* Hero */}
      <section className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary/80">Background Verification</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl lg:text-6xl">Trusted Background Verification for Confident Hiring</h1>
          <p className="mt-5 text-lg text-navy/70">XSpark helps businesses make informed hiring decisions through comprehensive employee screening services, ensuring accuracy, compliance, and peace of mind throughout the recruitment process.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/contact" className="hover-lift-sm rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Start Background Consultation</Link>
            <Link to="/employers" className="hover-lift-sm rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-navy hover:border-primary">Watch Our Success</Link>
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 p-8">
          <img
            src={bgvHero}
            alt="Background verification specialist reviewing candidate report"
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
            <div key={s.label} className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/0 p-6 text-center hover-lift">
              <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 font-semibold text-navy">{s.label}</div>
              <div className="mt-1 text-xs text-navy/60">{s.sub}</div>
            </div>
          ))}
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-6 text-primary-foreground">
            <h3 className="font-display text-xl font-bold">Need a Check?</h3>
            <p className="mt-1 text-sm opacity-90">Get verified results in 24-48 hours</p>
            <Link to="/contact" className="hover-lift-sm mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary">Start Now</Link>
          </div>
        </div>
      </section>

      {/* Complete Solutions */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Complete Candidate Verification Services</h2>
          <p className="mt-4 text-navy/70">Verify credentials, employment history, education, and background information through reliable screening solutions designed to support secure and compliant hiring.</p>
          <Link to="/contact" className="hover-lift-sm mt-5 inline-flex rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-navy hover:border-primary">Get Started</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm hover-lift hover:border-primary/40">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Three editorial blocks */}
      <section className="container-x mt-24 space-y-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">Background Screening Solutions</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy">Pre-Employment Background Screening Solutions</h2>
            <p className="mt-4 text-navy/70">Make informed hiring decisions with comprehensive pre-employment screening services designed to verify candidate information, identify potential risks, and support compliance requirements.</p>
            <ul className="mt-5 space-y-3 text-sm text-navy/80">
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />Our background screening solutions include criminal record searches, identity verification, employment and education checks, sanctions screening, and other essential assessments to help organizations hire with confidence.</li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />With access to extensive domestic and international screening resources, XSpark supports businesses in conducting reliable background checks across multiple regions, helping ensure a secure and trustworthy workforce.</li>
            </ul>
          </div>
          <div className="order-1 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 p-8 lg:order-2">
            <img
              src={bgvSolutions}
              alt="Pre-employment background check solutions illustration"
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 p-8">
            <img
              src={bgvSecurity}
              alt="Secure background screening and employee data protection illustration"
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">Solutions You Can Trust</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy">Why Are Pre-Employment Background Checks Important?</h2>
            <p className="mt-4 text-navy/70">Pre-employment background checks help organizations make informed hiring decisions by verifying candidate information, reducing hiring risks, and supporting workplace safety and compliance.</p>
            <p className="mt-3 text-navy/70">By validating employment history, education credentials, professional qualifications, and other critical information, employers can confidently identify candidates who align with both the role requirements and company culture. A thorough background screening process not only protects your organization but also contributes to stronger hiring outcomes, improved employee retention, and a more secure workplace.</p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">Background Screening Solutions</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy">License & Credential Verification</h2>
            <p className="mt-4 text-navy/70">Ensure candidates possess the qualifications required for the role through comprehensive license and credential verification services. We validate professional certifications, licenses, and accreditations directly with the appropriate issuing authorities to confirm their authenticity and current standing.</p>
            <p className="mt-3 text-navy/70">Our verification process helps identify active status, expiration dates, restrictions, disciplinary actions, and other relevant details, enabling organizations to make informed and compliant hiring decisions.</p>
          </div>
          <div className="order-1 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 p-8 lg:order-2">
            <img
              src={bgvCredentials}
              alt="License and credential verification illustration"
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quick start */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Fast, Reliable Background Screening</h2>
          <p className="mt-4 text-navy/70">Accelerate your hiring process with comprehensive screening services that verify candidate credentials, employment history, education, and background information. Our efficient verification process helps organizations reduce risk and hire with confidence.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {quickChecks.map((q) => (
            <div key={q.title} className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <q.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{q.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{q.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/contact" className="hover-lift-sm inline-flex rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Talk to our experts</Link>
        </div>
      </section>

      {/* Other services */}
      <section className="container-x mt-24">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Other Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {otherServices.map((s) => (
            <Link key={s.to} to={s.to} className="group rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40 transition hover:border-primary hover:shadow-md">
              <h3 className="font-display text-lg font-semibold text-navy group-hover:text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{s.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-navy/70">Everything you need to know about our background verification services. If you're looking for something else, just contact us.</p>
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Got a Hiring Problem? We Love Those.</h2>
          <p className="mx-auto mt-3 max-w-2xl opacity-90">Big careers and great teams usually start with a simple message. Send us one and let's see what we can build together.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="hover-lift-sm rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary">Book Free Call</Link>
            <Link to="/contact" className="hover-lift-sm rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10">Start Your Journey</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
