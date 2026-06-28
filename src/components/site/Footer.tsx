import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/xspark-logo.png";

const socialLinks = [
  { Icon: Linkedin, href: "https://www.linkedin.com/company/xspark-careers-llc/", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[oklch(0.18_0.05_260)] text-navy-foreground">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
      <div className="absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full gradient-primary opacity-15 blur-3xl" aria-hidden="true" />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="XSpark Careers" className="h-11 w-11 object-contain" />
            <span className="font-display text-xl font-bold">
              XSpark Careers
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Connecting skilled professionals with leading employers across the
            USA, Canada, UK and Australia. Building exceptional teams, accelerating careers worldwide.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover-lift-sm grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 hover:border-emerald/40 hover:bg-white/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}

          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="story-link text-white/80 hover:text-white">About</Link></li>
            <li><Link to="/contact" className="story-link text-white/80 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Solutions</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/job-seekers" className="story-link text-white/80 hover:text-white">Job Seekers</Link></li>
            <li><Link to="/employers" className="story-link text-white/80 hover:text-white">Employers</Link></li>
            <li><Link to="/referral" className="story-link text-white/80 hover:text-white">Referral Program</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald" /> info@xsparkcareersllc.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald" /> +1 442 393 2403</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-emerald" /> 8 The Green STE A, Dover, Delaware, United States, 19901</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} XSpark Careers LLC. All rights reserved.</p>
          <p>Connecting Talent with Opportunity Worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
