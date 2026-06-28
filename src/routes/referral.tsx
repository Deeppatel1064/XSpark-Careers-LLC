import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { useState } from "react";
import { Award, Trophy, Crown, Gem } from "lucide-react";

export const Route = createFileRoute("/referral")({
  head: () => ({
    meta: [
      { title: "Referral Program — Earn With XSpark Careers" },
      { name: "description", content: "Refer friends, earn rewards. Bronze, Silver, Gold and Platinum tiers with our gamified referral program." },
      { property: "og:title", content: "Referral Program — XSpark Careers" },
      { property: "og:description", content: "Refer talent. Earn rewards. Unlock tiers." },
      { property: "og:url", content: "/referral" },
    ],
    links: [{ rel: "canonical", href: "/referral" }],
  }),
  component: ReferralPage,
});

const tiers = [
  { icon: Award, name: "Bronze", referrals: "1–4", reward: "$100 / placement", color: "from-amber-300 to-amber-600" },
  { icon: Trophy, name: "Silver", referrals: "5–9", reward: "$200 / placement", color: "from-slate-300 to-slate-500" },
  { icon: Crown, name: "Gold", referrals: "10–24", reward: "$400 / placement", color: "from-yellow-300 to-yellow-600" },
  { icon: Gem, name: "Platinum", referrals: "25+", reward: "$750 / placement + bonus", color: "from-sky-300 to-indigo-500" },
];

function tierFor(n: number) {
  if (n >= 25) return { name: "Platinum", per: 750, bonus: 2000 };
  if (n >= 10) return { name: "Gold", per: 400, bonus: 0 };
  if (n >= 5) return { name: "Silver", per: 200, bonus: 0 };
  return { name: "Bronze", per: 100, bonus: 0 };
}

function ReferralPage() {
  const [count, setCount] = useState(6);
  const t = tierFor(count);
  const earnings = count * t.per + t.bonus;
  const progress = Math.min(100, (count / 25) * 100);

  return (
    <>
      <PageHero
        eyebrow="Referral Program"
        title={<>Refer talent. <span className="text-gradient">Unlock rewards.</span></>}
        description="A gamified referral program with four tiers, escalating payouts, and a Platinum-tier bonus pool."
      />

      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.07}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 hover-lift">
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${tier.color} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-50`} />
                <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${tier.color} text-white shadow-glow`}>
                  <tier.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{tier.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{tier.referrals} referrals</p>
                <p className="mt-3 text-2xl font-bold text-gradient-dark">{tier.reward}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Earnings Calculator</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">See what you could earn</h2>
              <p className="mt-3 text-muted-foreground">Move the slider to estimate annual earnings based on successful placements.</p>

              <div className="mt-8">
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-semibold text-navy">Successful referrals / year</label>
                  <span className="font-display text-2xl font-bold text-primary">{count}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={40}
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value))}
                  className="mt-3 w-full accent-primary"
                />
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>0</span><span>10</span><span>20</span><span>30</span><span>40</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span>Tier progress</span><span>{t.name}</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full gradient-primary transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl gradient-primary p-8 text-primary-foreground shadow-elegant">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald/40 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Estimated earnings</p>
              <p className="mt-3 font-display text-5xl font-bold md:text-6xl">${earnings.toLocaleString()}</p>
              <p className="mt-2 text-sm text-white/80">at {t.name} tier · ${t.per}/placement{t.bonus ? ` + $${t.bonus} bonus` : ""}</p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
                <div className="rounded-xl bg-white/10 p-3"><p className="text-white/70">Referrals</p><p className="mt-1 text-lg font-bold">{count}</p></div>
                <div className="rounded-xl bg-white/10 p-3"><p className="text-white/70">Per hire</p><p className="mt-1 text-lg font-bold">${t.per}</p></div>
                <div className="rounded-xl bg-white/10 p-3"><p className="text-white/70">Tier</p><p className="mt-1 text-lg font-bold">{t.name}</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
