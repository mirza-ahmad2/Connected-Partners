import { createFileRoute } from "@tanstack/react-router";
import { Scale, LineChart, Cpu } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { ServicePillarCard } from "@/components/site/ServicePillarCard";
import { ComplianceDisclaimer } from "@/components/site/ComplianceDisclaimer";
import { SectionReveal } from "@/components/site/SectionReveal";
import { buildPageHead } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site-config";
import heroServices from "@/assets/hero-services.jpg";

export const Route = createFileRoute("/services")({
  head: () =>
    buildPageHead({
      title: `Services — ${SITE_NAME}`,
      description:
        "Debt resolution & restructuring, credit & financial advisory, and AI-powered decision systems — delivered as advisory engagements, not outcome guarantees.",
      path: "/services",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Practice areas"
        title={<>Advisory disciplines, delivered with discretion.</>}
        subtitle="Every engagement begins with listening. From there, we structure the options — clearly, and within the framework of your jurisdiction."
        image={heroServices}
        ctaLabel="Schedule a Consultation"
        ctaTo="/contact"
      />

      <section className="container-site py-24 md:py-32" aria-labelledby="services-pillars">
        <h2 id="services-pillars" className="sr-only">Service pillars</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <ServicePillarCard
            index="01"
            icon={Scale}
            title="Debt Resolution & Restructuring"
            description="A structured evaluation of your liability position, followed by advisory-led scenarios for renegotiation, restructuring, or ordered wind-down."
            points={[
              "Liability & obligation mapping",
              "Cash-flow scenario modelling",
              "Lender engagement strategy",
              "Jurisdiction-aware process design",
            ]}
          />
          <ServicePillarCard
            index="02"
            icon={LineChart}
            title="Credit & Financial Advisory"
            description="Consultative support for individuals and businesses working through debt, default, or restructuring phases. We articulate the options — you make the decisions."
            points={[
              "Position and options review",
              "Credit posture and reporting guidance",
              "Long-horizon financial planning",
              "Coordination with local licensed counsel",
            ]}
          />
          <ServicePillarCard
            index="03"
            icon={Cpu}
            title="AI-Powered Decision Systems"
            description="Analytical tooling that structures the numbers behind each engagement. Human advisors interpret and recommend; technology accelerates the diligence."
            points={[
              "Automated liability & cash-flow modelling",
              "Scenario comparison dashboards",
              "Continuous position monitoring",
              "Advisor-reviewed recommendations",
            ]}
          />
        </div>
      </section>

      <section className="border-t border-border bg-surface-2/40" aria-labelledby="engagement-flow">
        <div className="container-site py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-24">
            <SectionReveal>
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent">
                  Engagement flow
                </p>
                <h2 id="engagement-flow" className="font-display text-3xl leading-tight md:text-5xl">
                  How we work.
                </h2>
              </div>
            </SectionReveal>
            <ol className="space-y-10">
              {[
                {
                  n: "01",
                  t: "Confidential intake",
                  d: "A first conversation to understand context, jurisdiction, and objectives. No sensitive account data required.",
                },
                {
                  n: "02",
                  t: "Structured diligence",
                  d: "Position mapping, scenario modelling, and identification of the option set available under applicable regulation.",
                },
                {
                  n: "03",
                  t: "Advisory framework",
                  d: "A written framework outlining paths forward, associated trade-offs, and where licensed local counsel should be engaged.",
                },
                {
                  n: "04",
                  t: "Ongoing support",
                  d: "Optional continued advisory support as decisions are executed by you or your licensed representatives.",
                },
              ].map((s, i) => (
                <SectionReveal key={s.n} delay={i * 0.08}>
                  <li className="grid items-start gap-3 border-t border-border pt-8 first:border-t-0 first:pt-0 md:grid-cols-[auto_1fr] md:gap-8">
                    <span className="font-display text-sm tracking-[0.22em] text-accent">{s.n}</span>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl">{s.t}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                    </div>
                  </li>
                </SectionReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container-site py-24 md:py-28">
        <ComplianceDisclaimer />
      </section>
    </>
  );
}
