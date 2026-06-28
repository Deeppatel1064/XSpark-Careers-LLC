import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/xspark-logo.png";

const primaryLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/employers", label: "Employers" },
  { to: "/job-seekers", label: "Job Seekers" },
] as const;

const serviceLinks = [
  { to: "/services/job-placement", label: "Job Placement" },
  { to: "/services/recruitment-staffing", label: "Recruitment & Staffing" },
  { to: "/services/talent-acquisition", label: "Talent Acquisition" },
  { to: "/services/background-verification", label: "Background Verification" },
  { to: "/services/payroll-taxes", label: "Payroll & Taxes" },
  { to: "/services/it-training", label: "IT Training" },
  { to: "/it-services-projects", label: "All IT Services & Projects" },
  { to: "/c2c-contract", label: "Contract & C2C" },
] as const;

const moreLinks = [
  { to: "/referral", label: "Referral" },
  { to: "/contact", label: "Contact" },
] as const;

const allLinks = [...primaryLinks, ...moreLinks] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled
              ? "bg-white/90 shadow-elegant ring-1 ring-navy/10 backdrop-blur-md"
              : "bg-white/75 backdrop-blur-md ring-1 ring-navy/10"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group" aria-label="XSpark Careers home">
            <img
              src={logo}
              alt="XSpark Careers Logo"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-10"
            />
            <span className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              XSpark
            </span>
            <span className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent sm:text-2xl">
              Careers
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {primaryLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover-lift-sm group relative rounded-full px-3 py-2 text-sm font-semibold text-navy/70 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
                <span className="pointer-events-none absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary to-sky transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
                className="group relative flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-navy/70 transition-colors hover:text-primary"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-navy/10 bg-white/95 backdrop-blur-md shadow-elegant"
                >
                  {serviceLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium text-navy/75 hover:bg-primary/10 hover:text-primary"
                      activeProps={{ className: "bg-primary/10 text-primary" }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div ref={moreRef} className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                aria-haspopup="menu"
                className="group relative flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-navy/70 transition-colors hover:text-primary"
              >
                More
                <ChevronDown className={`h-4 w-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
              </button>
              {moreOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-2xl border border-navy/10 bg-white/95 backdrop-blur-md shadow-elegant"
                >
                  {moreLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium text-navy/75 hover:bg-primary/10 hover:text-primary"
                      activeProps={{ className: "bg-primary/10 text-primary" }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/job-seekers"
              className="hover-lift-sm rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-semibold text-navy hover:border-primary/40 hover:text-primary"
            >
              Find Jobs
            </Link>
            <Link
              to="/employers"
              className="hover-lift-sm rounded-full gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Book Free Consultation
            </Link>
          </div>


          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-xl border border-navy/15 bg-white text-navy lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>


        {open && (
          <div className="mt-2 rounded-2xl glass p-4 shadow-elegant lg:hidden">
            <nav className="flex flex-col gap-1">
              {allLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
                  activeProps={{ className: "bg-secondary text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-border pt-2">
                <div className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-navy/50">Services</div>
                {serviceLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link
                  to="/job-seekers"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-border bg-white px-4 py-2 text-center text-sm font-semibold"
                >
                  Find Jobs
                </Link>
                <Link
                  to="/employers"
                  onClick={() => setOpen(false)}
                  className="rounded-full gradient-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
                >
                  Hire Talent
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
