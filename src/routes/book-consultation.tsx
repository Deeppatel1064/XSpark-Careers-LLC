import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { useState } from "react";
import { User, Phone, FileText, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book Your Free Consultation — XSpark Careers" },
      { name: "description", content: "Tell us about yourself and we'll match you with the right opportunity. Free, no-commitment consultation with XSpark Careers." },
      { property: "og:title", content: "Book Your Free Consultation — XSpark Careers" },
      { property: "og:description", content: "Tell us about yourself and we'll match you with the right opportunity." },
      { property: "og:url", content: "/book-consultation" },
    ],
    links: [{ rel: "canonical", href: "/book-consultation" }],
  }),
  component: RouteComponent,
});

const VISA_STATUS_OPTIONS = [
  "US Citizen",
  "Green Card Holder",
  "H1B Visa",
  "OPT / CPT",
  "TN Visa",
  "Require Sponsorship",
  "Other",
];

function RouteComponent() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    visaStatus: "",
    message: "",
  });
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
      phone: form.phone,
      visa_status: form.visaStatus,
      message: form.message,

      subject: "New Free Consultation Request",

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
          phone: "",
          visaStatus: "",
          message: "",
        });
      } else {
        setError(result.message || "Failed to send your request.");
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
        eyebrow="Free · No Commitment"
        title={<>Book Your <span className="text-gradient">Free Consultation</span></>}
        description="Tell us about yourself and we'll match you with the right opportunity."
      />

      <section className="container-x py-16">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-10">
              {sent ? (
                <div className="rounded-2xl border border-emerald/30 bg-emerald/10 p-8 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-emerald" />
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy">Request received!</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thanks for reaching out. A senior consultant will contact you shortly to schedule your free consultation.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Free · No Commitment
                  </div>
                  <h2 className="font-display text-2xl font-bold text-navy">Book Your Free Consultation</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tell us about yourself and we'll match you with the right opportunity.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                    />

                    <label className="text-sm font-medium text-navy">
                      Full Name
                      <div className="relative mt-1">
                        <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. John Smith"
                          className="mt-1 w-full rounded-xl border border-input bg-background py-3 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </label>

                    <label className="text-sm font-medium text-navy">
                      Contact Number
                      <div className="relative mt-1">
                        <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="e.g. +1 (555) 000-0000"
                          className="mt-1 w-full rounded-xl border border-input bg-background py-3 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </label>

                    <label className="text-sm font-medium text-navy">
                      Visa / Work Status
                      <div className="relative mt-1">
                        <FileText className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <select
                          required
                          value={form.visaStatus}
                          onChange={(e) => setForm({ ...form, visaStatus: e.target.value })}
                          className="mt-1 w-full appearance-none rounded-xl border border-input bg-background py-3 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="" disabled>
                            Select your status
                          </option>
                          {VISA_STATUS_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </label>

                    <label className="text-sm font-medium text-navy">
                      Message <span className="font-normal text-muted-foreground">(optional)</span>
                      <div className="relative mt-1">
                        <MessageSquare className="pointer-events-none absolute left-4 top-3 h-4 w-4 text-muted-foreground" />
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your goals, experience, or any questions..."
                          className="mt-1 w-full rounded-xl border border-input bg-background py-3 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </label>

                    {error && (
                      <div className="rounded-xl border border-red-300 bg-red-100 p-3 text-sm text-red-700">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="hover-lift-sm mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Submit Request"}
                      {!loading && <ArrowRight className="h-4 w-4" />}
                    </button>

                    <p className="text-center text-xs text-muted-foreground">
                      Your data is secure and will never be shared with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
