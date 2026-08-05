import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, ShieldCheck, Users, BookOpen } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { ComplianceDisclaimer } from "@/components/site/ComplianceDisclaimer";
import { SectionReveal } from "@/components/site/SectionReveal";
import { buildPageHead } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site-config";
import heroImpact from "@/assets/hero-impact.jpg";

export const Route = createFileRoute("/impact")({
  head: () =>
    buildPageHead({
      title: `Social Impact — ${SITE_NAME} Pro-Bono Foundation`,
      description:
        "The Connected Partners Real Estate Pro-Bono Foundation offers structured financial guidance to individuals who cannot access professional advisory services.",
      path: "/impact",
    }),
  component: ImpactPage,
});

const values = [
  { icon: HeartHandshake, t: "Access", d: "Guidance offered irrespective of ability to pay for professional services." },
  { icon: ShieldCheck, t: "Confidentiality", d: "Every application is reviewed with the same discretion as our fee-based advisory work." },
  { icon: Users, t: "Human-first", d: "Conversations, not questionnaires. People, not case numbers." },
  { icon: BookOpen, t: "Education", d: "We frame the options and the trade-offs — decisions remain with the individual." },
];

function ImpactPage() {
  return (
    <>
      <Hero
        eyebrow="The Pro-Bono Foundation"
        title={<>Advisory access, without a financial barrier.</>}
        subtitle="Structured financial guidance for individuals who cannot access professional advisory services — offered confidentially, on an application basis."
        image={heroImpact}
        ctaLabel="Apply for Guidance"
        ctaTo="/contact"
      />

      <section className="container-site py-24 md:py-32" aria-labelledby="mission-heading">
        <SectionReveal>
          <div className="max-w-3xl">
            <p className="mb-6 text-xs uppercase tracking-[0.28em] text-accent">Mission</p>
            <h2 id="mission-heading" className="font-display text-3xl leading-tight md:text-5xl">
              Financial complexity should not compound because of income.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              The Pro-Bono Foundation extends {SITE_NAME}&apos;s advisory
              practice to individuals whose circumstances place professional
              guidance out of reach. We do not offer legal representation or
              guaranteed outcomes — we offer a structured conversation, a clearer
              picture of the options in your jurisdiction, and a framework for the
              next step.
            </p>
          </div>
        </SectionReveal>
      </section>

      <section className="border-t border-border bg-surface-2/40" aria-labelledby="impact-values">
        <div className="container-site py-24 md:py-28">
          <h2 id="impact-values" className="sr-only">Foundation values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <SectionReveal key={v.t} delay={i * 0.08}>
                <article className="card-surface h-full rounded-md p-8">
                  <v.icon size={22} className="text-accent" strokeWidth={1.4} aria-hidden="true" />
                  <h3 className="mt-6 font-display text-xl">{v.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-24 md:py-32" aria-labelledby="eligibility-heading">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <SectionReveal>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent">Eligibility</p>
              <h2 id="eligibility-heading" className="font-display text-3xl leading-tight md:text-5xl">
                Who we can help.
              </h2>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                The Foundation reviews applications from individuals across the
                United States, UAE, and India who are navigating personal debt,
                credit stress, or an impending restructuring event, and who
                cannot reasonably access professional financial advisory support.
              </p>
              <p>
                We assess each application on context rather than criteria alone.
                Where we cannot help directly, we will do our best to point toward
                a licensed or regulated resource in your jurisdiction.
              </p>
            </div>
          </SectionReveal>
        </div>
        <div className="mt-16">
          <ComplianceDisclaimer />
        </div>
      </section>
    </>
  );
}
