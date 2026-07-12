import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { WhatHappensNext } from "../components/site/PageExtras";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact XSpark Careers — Talk To A Strategist" },
      {
        name: "description",
        content: "Get in touch with XSpark Careers. Email, phone, address and office hours.",
      },
      { property: "og:title", content: "Contact XSpark Careers" },
      { property: "og:description", content: "Talk to our team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", topic: "Job Seeker", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

      name: form.name,
      email: form.email,
      topic: form.topic,
      message: form.message,

      subject: `New ${form.topic} Contact Form`,

      from_name: "XSpark Careers Website",

      botcheck: "",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);

        setForm({
          name: "",
          email: "",
          topic: "Job Seeker",
          message: "",
        });
      } else {
        setError(result.message || "Failed to send message.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's <span className="text-gradient">build something</span> together
          </>
        }
        description="Whether you're hiring or hunting, our team responds within one business day."
      />

      <section className="container-x py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-3xl gradient-primary p-8 text-primary-foreground shadow-elegant">
              <h2 className="font-display text-2xl font-bold">Contact information</h2>
              <p className="mt-2 text-sm text-white/80">
                A senior consultant will get back to you within 24 hours.
              </p>

              <ul className="mt-8 space-y-5">
                <Info icon={Mail} label="Email" value="info@xsparkcareersllc.com" />
                <Info icon={Phone} label="Phone" value="+1 442 393 2403" />
                <Info
                  icon={MapPin}
                  label="Headquarters"
                  value="8 The Green STE A, Dover, Delaware, United States, 19901"
                />
                <Info
                  icon={Clock}
                  label="Working hours"
                  value="Mon – Fri · 9:00 AM – 7:00 PM (ET)"
                />
              </ul>

              <div className="mt-8 overflow-hidden rounded-2xl border border-white/20">
                <iframe
                  title="XSpark Careers office location"
                  src="https://www.google.com/maps?q=8+The+Green+STE+A,+Dover,+Delaware,+19901&output=embed"
                  className="h-56 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-10">
              <h2 className="font-display text-2xl font-bold text-navy">Send us a message</h2>
              {sent ? (
                <div className="mt-8 rounded-2xl border border-emerald/30 bg-emerald/10 p-8 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-emerald" />
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy">Thank you!</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We've received your message and will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-medium text-navy">
                      Full name *
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </label>
                    <label className="text-sm font-medium text-navy">
                      Work email *
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </label>
                  </div>
                  <label className="text-sm font-medium text-navy">
                    I'm a…
                    <select
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option>Job Seeker</option>
                      <option>Employer / Hiring Manager</option>
                      <option>Referral Partner</option>
                      <option>Press / Other</option>
                    </select>
                  </label>
                  <label className="text-sm font-medium text-navy">
                    Message *
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>

                  {/* Error Message */}
                  {error && (
                    <div className="rounded-xl border border-red-300 bg-red-100 p-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="hover-lift-sm mt-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <WhatHappensNext />
    </>
  );
}

function Info({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest text-white/60">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </li>
  );
}
