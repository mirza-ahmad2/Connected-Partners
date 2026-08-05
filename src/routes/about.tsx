import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Cpu, HeartHandshake } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { ComplianceDisclaimer } from "@/components/site/ComplianceDisclaimer";
import { SectionReveal } from "@/components/site/SectionReveal";
import { buildPageHead } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site-config";
import heroAbout from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    buildPageHead({
      title: `About — ${SITE_NAME} & Khenan Kheith`,
      description:
        "Founded by Khenan Kheith — angel investor, entrepreneur, and social impact consultant — Connected Partners Real Estate merges advisory finance, technology, and impact across the US, UAE, and India.",
      path: "/about",
    }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, t: "Transparency", d: "Clear scope, clear framework, clear limits of what advisory can and cannot promise." },
  { icon: Compass, t: "Advisory-first", d: "We frame the options; the decisions remain with the individuals and businesses we serve." },
  { icon: Cpu, t: "Technology-supported", d: "Analytical tooling accelerates the diligence — never the recommendation itself." },
  { icon: HeartHandshake, t: "Accessibility", d: "The Pro-Bono Foundation extends structured guidance beyond ability to pay." },
];

function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About the firm"
        title={<>A practice built at the intersection of finance, technology, and impact.</>}
        subtitle={`${SITE_NAME} was founded by Khenan Kheith to bring measured, jurisdiction-aware financial advisory to the people and businesses most often underserved by it.`}
        image={heroAbout}
      />

      <section className="container-site py-24 md:py-32" aria-labelledby="founder-heading">
        <div className="grid gap-10 md:grid-cols-2 md:items-stretch md:gap-16 lg:gap-20">
          <SectionReveal className="h-full">
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full overflow-hidden rounded-md border border-border bg-surface/60 shadow-xl max-md:aspect-[4/5]"
            >
              <img
                src="/founder-khenan.png"
                alt="Professional portrait of Khenan Kheith, Founder and Chief Executive of Connected Partners Real Estate, wearing a red blazer against a neutral background"
                width={480}
                height={600}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top max-md:aspect-[4/5]"
              />
            </motion.figure>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-accent">Founder</p>
              <h2 id="founder-heading" className="font-display text-3xl leading-tight md:text-4xl">
                Khenan Kheith
              </h2>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Founder &amp; Chief Executive
              </p>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                <p>
                  Khenan Kheith is an angel investor, entrepreneur, and social
                  impact consultant working across the United States, the United
                  Arab Emirates, and India.
                </p>
                <p>
                  {SITE_NAME} was founded to translate that perspective into
                  a disciplined advisory practice — treating debt and restructuring
                  conversations with the seriousness they deserve.
                </p>
                <p>
                  Alongside the advisory practice, Khenan leads AssetLQ and
                  stewards the Pro-Bono Foundation that extends structured
                  guidance to those unable to access professional advisory support.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="border-t border-border bg-surface-2/40" aria-labelledby="values-heading">
        <div className="container-site py-24 md:py-28">
          <SectionReveal>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent">Operating values</p>
            <h2 id="values-heading" className="max-w-2xl font-display text-3xl leading-tight md:text-5xl">
              Four principles that shape every engagement.
            </h2>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="container-site py-24 md:py-32" aria-labelledby="assetlq-heading">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <SectionReveal>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent">Related venture</p>
              <h2 id="assetlq-heading" className="font-display text-3xl leading-tight md:text-5xl">
                AssetLQ
              </h2>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                AssetLQ is a curated network focused on distressed real estate
                and special-situation transactions, connecting qualified
                investors, institutional intermediaries, advisors, and brokers.
              </p>
              <p>
                Access is application- and mandate-based; AssetLQ is not open to
                the general public. Investor enquiries can be routed through the
                standard consultation channel.
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
