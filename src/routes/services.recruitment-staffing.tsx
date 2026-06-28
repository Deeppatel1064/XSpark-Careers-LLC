import { createFileRoute, Link } from "@tanstack/react-router";
import recruitmentHero from "@/assets/recruitment-hero.jpg";
import {
  Briefcase,
  Users,
  Globe,
  Award,
  Clock,
  Shield,
  TrendingUp,
  Cpu,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Plane,
  Factory,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/services/recruitment-staffing")({
  head: () => ({
    meta: [
      { title: "Recruitment & Staffing — XSpark Careers" },
      { name: "description", content: "Consider us your behind-the-scenes hiring partner. NetBounce works alongside your team to source, screen, and deliver talent across tech, finance, healthcare, logistics, retail, and beyond." },
      { property: "og:title", content: "Recruitment & Staffing — XSpark Careers" },
      { property: "og:description", content: "Hiring great people shouldn't slow down your business. Source, screen, and deliver talent with XSpark." },
    ],
  }),
  component: RecruitmentStaffingPage,
});

const stats = [
  { value: "1,750+", label: "Professionals Placed", sub: "With leading companies and industries across the world" },
  { value: "20+", label: "Countries Covered", sub: "Helping companies hire beyond borders through our global talent network" },
  { value: "230+", label: "Enterprise Clients", sub: "Happy to serve from Fortune companies to innovative startups" },
];

const serviceCards = [
  { title: "Permanent Placement", desc: "We help businesses hire qualified full-time professionals who align with their skills requirements, culture, and long-term goals.", icon: Briefcase },
  { title: "Temporary & Contract Placement", desc: "Quickly scale your workforce with skilled talent ready to make an immediate impact.", icon: Clock },
  { title: "Outsourcing Solutions", desc: "Optimize productivity and growth with flexible outsourcing and workforce management services.", icon: Globe },
  { title: "Workforce Training Solutions", desc: "Empower your teams with industry-relevant training that drives performance and growth.", icon: Award },
];

const detailServices = [
  { title: "Permanent Placement", items: ["Full-time talent acquisition across multiple industries", "Leadership and executive hiring solutions", "Specialized professional recruitment", "Long-term workforce planning and growth"] },
  { title: "Temporary & Contract Placement", items: ["Project-based staffing solutions", "Seasonal workforce support", "Short-term operational hiring", "Flexible contract talent acquisition"] },
  { title: "Creative Staffing", items: ["Branding and storytelling professionals", "Marketing and advertising talent", "UI/UX design specialists", "Product development and innovation experts"] },
  { title: "Training Solutions", items: ["Workforce skill development programs", "Industry-specific training initiatives", "Employee upskilling and reskilling", "Technology and tools training"] },
  { title: "Diversity & Inclusion Hiring", items: ["Diverse talent sourcing strategies", "Inclusive recruitment programs", "Equal opportunity hiring solutions", "Workplace diversity development"] },
  { title: "Outsourcing Solutions", items: ["Offshore recruitment and workforce support", "Cost-effective operational solutions", "Scalable talent acquisition services", "Compliance-focused workforce management"] },
];

const valueProps = [
  { title: "Rapid Deployment", desc: "Access qualified, pre-screened talent quickly through our extensive recruitment network and streamlined hiring process.", metric: "48", metricLabel: "First Candidate hrs", icon: Clock },
  { title: "Technical Expertise", desc: "Benefit from industry-focused recruiters with deep market knowledge and experience across specialized hiring requirements.", metric: "5+", metricLabel: "Years in Staffing", icon: Award },
  { title: "Global Talent Pool", desc: "Connect with skilled professionals worldwide through our global sourcing and remote recruitment capabilities.", icon: Globe },
  { title: "Cost-Effective Solutions", desc: "Optimize hiring budgets with flexible recruitment models that deliver quality talent while improving operational efficiency.", metric: "40%", metricLabel: "Cost Reduction", icon: TrendingUp },
  { title: "Compliance & Security", desc: "Ensure confidence in every hire with rigorous screening, verification, compliance, and data protection standards.", metric: "100%", metricLabel: "Compliance Rate", icon: Shield },
  { title: "Scalable Model", desc: "Whether hiring for a single position or building entire teams, our solutions scale seamlessly to match your business needs.", metric: "5-500", metricLabel: "Team Size Range", icon: Users },
];

const steps = [
  { n: "01", title: "Discovery & Requirements", desc: "Share your hiring objectives, role requirements, team culture, and growth plans. We develop a customized recruitment strategy aligned with your business goals." },
  { n: "02", title: "Talent Identification", desc: "Our recruitment specialists leverage extensive talent networks and targeted sourcing methods to identify high-quality candidates." },
  { n: "03", title: "Assessment & Screening", desc: "Candidates undergo comprehensive evaluations, including skills assessments, experience verification, and background screening." },
  { n: "04", title: "Interview Management", desc: "We coordinate interviews, facilitate communication, and streamline feedback to ensure an efficient hiring experience." },
  { n: "05", title: "Offer & Onboarding Support", desc: "From offer management to onboarding coordination, we support a seamless transition and successful integration of new hires." },
];

const industries = [
  { title: "Technology", desc: "Software Development, Artificial Intelligence, Machine Learning, Cloud Engineering, Cybersecurity, Data & Analytics", icon: Cpu },
  { title: "Finance & Banking", desc: "Financial Services, FinTech, Risk Management, Compliance, Accounting, Financial Operations", icon: Landmark },
  { title: "Healthcare", desc: "Healthcare Technology, Clinical Support, Medical Administration, Healthcare Operations, Life Sciences", icon: HeartPulse },
  { title: "E-commerce & Retail", desc: "Digital Commerce, Marketplace Operations, Supply Chain Management, Customer Experience, Retail Technology", icon: ShoppingCart },
  { title: "Travel & Hospitality", desc: "Airlines, Hospitality Management, Tourism Services, Guest Experience, Travel Operations", icon: Plane },
  { title: "Manufacturing", desc: "Industrial Automation, Production Management, Engineering, Quality Assurance, Supply Chain Operations", icon: Factory },
];

const testimonials = [
  { company: "NorthBridge Technologies", role: "Director of Talent Acquisition", name: "Emily Carter", achievement: "12 Hires", timeline: "3 Weeks", impact: "Time-to-Hire ↓ 40%", quote: "XSpark quickly understood our hiring priorities and delivered highly qualified candidates who matched both our technical requirements and company culture. Their responsiveness and professionalism made the entire process seamless." },
  { company: "Vertex Financial Group", role: "Head of Operations", name: "Daniel Foster", achievement: "8 Hires", timeline: "21 Days", impact: "Hiring Costs ↓ 25%", quote: "We were struggling to fill specialized positions through traditional channels. XSpark provided a focused recruitment strategy and introduced candidates who exceeded our expectations." },
  { company: "BrightPath Healthcare", role: "VP, Human Resources", name: "Sarah Mitchell", achievement: "15 Hires", timeline: "4 Weeks", impact: "Retention ↑ 45%", quote: "The quality of candidates and attention to detail throughout the recruitment process stood out immediately. XSpark became a trusted extension of our internal hiring team." },
  { company: "Pioneer Logistics Solutions", role: "Operations Director", name: "Michael Reynolds", achievement: "20 Hires", timeline: "18 Days", impact: "Productivity ↑ 30%", quote: "Scaling our workforce during a period of rapid growth was challenging. XSpark helped us build a reliable team quickly while maintaining high hiring standards." },
  { company: "Innovate Digital Labs", role: "Chief Marketing Officer", name: "Jennifer Lawson", achievement: "10 Hires", timeline: "14 Days", impact: "Team Performance ↑ 35%", quote: "Beyond sourcing talent, XSpark took the time to understand our business objectives and culture. The candidates they presented were consistently strong and well-aligned with our needs." },
  { company: "Summit Manufacturing Group", role: "Plant Operations Manager", name: "Robert Hayes", achievement: "25 Hires", timeline: "5 Weeks", impact: "Retention ↑ 55%", quote: "Finding skilled professionals for critical roles had always been difficult. XSpark streamlined the process and delivered exceptional candidates, allowing us to meet our production goals without delay." },
];

const otherServices = [
  { title: "Talent Acquisition", desc: "Strategic TA support to build long-term, high-performing teams.", to: "/services/talent-acquisition" },
  { title: "Background Verification", desc: "Comprehensive checks to ensure trust, compliance, and reliability.", to: "/services/background-verification" },
  { title: "Job Placements", desc: "Helping professionals land meaningful full-time roles with end to end services.", to: "/services/job-placement" },
  { title: "Accounting & Taxes", desc: "Seamless payroll processing with full tax and regulatory compliance.", to: "/services/payroll-taxes" },
];

const faqs = [
  { q: "Why should companies use a staffing agency instead of hiring in-house?", a: "Staffing agencies reduce hiring time, cost, and effort by handling candidate sourcing and screening. XSpark enables faster hiring with pre-vetted candidates and flexible workforce solutions." },
  { q: "Can companies outsource talent acquisition to external partners?", a: "Yes, many businesses outsource talent acquisition to improve hiring efficiency and access wider talent pools. XSpark works as an extended hiring partner to manage sourcing, screening, and onboarding processes." },
  { q: "Can one company handle recruitment, payroll, and compliance together?", a: "Yes, many businesses prefer a single partner for hiring, payroll, and compliance to simplify operations. XSpark offers integrated workforce solutions across recruitment, payroll, and verification." },
  { q: "Where is XSpark based?", a: "XSpark is based in the United States with global operations, enabling seamless service delivery with a distributed team." },
  { q: "What roles do you staff for?", a: "Engineering, data, cloud, cybersecurity, product, design, finance, healthcare, and operations across IC and leadership levels." },
  { q: "How fast can we see candidates?", a: "First shortlist typically lands within 48-72 hours of an aligned intake call." },
];

function RecruitmentStaffingPage() {
  return (
    <main className="pt-28 pb-20">
      {/* Hero */}
      <section className="container-x">
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">Recruitment & Staffing</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl lg:text-6xl">Exceptional Talent. Delivered Efficiently.</h1>
            <p className="mt-5 text-lg text-navy/70">XSpark serves as an extension of your hiring team, providing end-to-end recruitment solutions that reduce hiring time and improve candidate quality. Our industry-focused recruiters identify, screen, and connect you with top talent across technology, finance, healthcare, logistics, retail, and other key sectors.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="hover-lift-sm rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Request Talent</Link>
              <Link to="/employers" className="hover-lift-sm rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-navy hover:border-primary">Watch our Success</Link>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 p-8">
            <img
              src={recruitmentHero}
              alt="Recruitment team collaborating"
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
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
            <h3 className="font-display text-xl font-bold">Ready to Hire?</h3>
            <p className="mt-1 text-sm opacity-90">Get matched with your talent in 24-48 hours</p>
            <Link to="/contact" className="hover-lift-sm mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary">Start Now</Link>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="container-x mt-20">
        <h2 className="max-w-2xl font-display text-3xl font-bold text-navy sm:text-4xl">Talent Solutions Tailored to Your Business</h2>
        <p className="mt-4 max-w-3xl text-navy/70">XSpark partners with organizations to provide end-to-end workforce solutions, including direct hire recruitment, temporary staffing, outsourcing services, employee training, and inclusive hiring programs. Our flexible approach ensures you have the right talent to meet evolving business demands.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm hover-lift hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed services */}
      <section className="container-x mt-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Building High-Performing Teams Starts with the Right Talent</h2>
          <p className="mx-auto mt-3 max-w-2xl text-navy/70">XSpark simplifies hiring by connecting businesses with a network of 5,000+ pre-screened professionals across diverse industries and functions, helping you find qualified talent faster and more efficiently.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {detailServices.map((d) => (
            <div key={d.title} className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40">
              <h3 className="font-display text-lg font-semibold text-navy">{d.title}</h3>
              <ul className="mt-4 space-y-2">
                {d.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-navy/70">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-muted p-6 text-center">
          <p className="text-navy/80">Are you stuck with resume mountains? Just keep that on us & you just sit back & relax.</p>
          <Link to="/contact" className="hover-lift-sm rounded-full gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Discuss Your Hiring Needs</Link>
        </div>
      </section>

      {/* Value props */}
      <section className="container-x mt-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">XSpark — Building Stronger Teams, Faster</h2>
          <p className="mx-auto mt-3 max-w-2xl text-navy/70">From hard-to-fill positions to large-scale hiring initiatives, XSpark connects businesses with exceptional talent through strategic, efficient, and results-driven recruitment solutions.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{v.desc}</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-display text-2xl font-bold text-primary">{v.metric}</span>
                <span className="mb-1 text-xs font-medium text-navy/60">{v.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container-x mt-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Simplifying Recruitment from Start to Finish</h2>
          <p className="mx-auto mt-3 max-w-2xl text-navy/70">XSpark manages the entire hiring process, including talent sourcing, candidate screening, compliance checks, and onboarding, so you can focus on growing your business.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40">
              <div className="font-display text-3xl font-bold text-primary/30">{s.n}</div>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-1 text-sm text-navy/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="container-x mt-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Recruitment Expertise Across Industries</h2>
          <p className="mx-auto mt-3 max-w-2xl text-navy/70">Connecting businesses with exceptional talent through industry-specific recruitment strategies and workforce solutions.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div key={i.title} className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <i.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{i.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x mt-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Trusted by Businesses Building High-Performing Teams</h2>
          <p className="mx-auto mt-3 max-w-2xl text-navy/70">From growing startups to established enterprises, organizations rely on XSpark's recruitment expertise and talent solutions to attract, hire, and retain exceptional professionals.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-white p-6 hover-lift hover:border-primary/40">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">{t.company[0]}</div>
                <div>
                  <div className="font-semibold text-navy">{t.company}</div>
                  <div className="text-xs text-navy/60">{t.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm italic text-navy/80">"{t.quote}"</p>
              <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-muted p-3 text-center text-xs">
                <div><div className="font-semibold text-navy">{t.achievement}</div><div className="text-navy/60">Achievement</div></div>
                <div><div className="font-semibold text-navy">{t.timeline}</div><div className="text-navy/60">Timeline</div></div>
                <div><div className="font-semibold text-navy">{t.impact}</div><div className="text-navy/60">Impact</div></div>
              </div>
              <div className="mt-3 text-sm font-semibold text-navy">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Other services */}
      <section className="container-x mt-20">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Other services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {otherServices.map((s) => (
            <Link key={s.title} to={s.to} className="group rounded-2xl border border-border bg-white p-6 shadow-sm hover-lift hover:border-primary/40 transition hover:border-primary">
              <h3 className="font-display text-lg font-semibold text-navy group-hover:text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{s.desc}</p>
              <div className="mt-4 flex items-center text-sm font-semibold text-primary">Learn more <ChevronRight className="ml-1 h-4 w-4" /></div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x mt-20">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Frequently asked questions</h2>
        <p className="mt-3 text-navy/70">Everything you need to know about our recruitment and staffing services. If you're looking for something else just contact us.</p>
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
      <section className="container-x mt-20">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/70 p-10 text-center text-primary-foreground shadow-glow">
          <h2 className="font-display text-3xl font-bold">Got a job hunt stress or hiring problem? We love those</h2>
          <p className="mx-auto mt-3 max-w-2xl opacity-90">Big careers and great teams usually start with a simple message. Send us one and let's see what we can build together.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="hover-lift-sm rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary">Book Free Call</Link>
            <Link to="/job-seekers" className="hover-lift-sm rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10">Start Your Journey</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
