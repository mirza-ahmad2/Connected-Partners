import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Scale, LineChart, Cpu, ArrowUpRight, HeartHandshake } from "lucide-react";
import { HeroScene } from "@/components/site/HeroScene";
import { ComplianceDisclaimer } from "@/components/site/ComplianceDisclaimer";
import { ServicePillarCard } from "@/components/site/ServicePillarCard";
import { SectionReveal } from "@/components/site/SectionReveal";
import { buildPageHead } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site-config";
import heroImpact from "@/assets/hero-impact.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageHead({
      title: `${SITE_NAME} — Advisory-Led Debt & Financial Restructuring`,
      description:
        "Debt management, restructuring, and credit advisory across the US, UAE, and India. Confidential, advisory-led guidance from Connected Partners Real Estate.",
      path: "/",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section
        className="relative isolate flex min-h-[100vh] w-full items-center justify-center overflow-hidden"
        aria-labelledby="home-hero-heading"
      >
        <HeroScene />
        <div className="relative z-10 px-6 pb-16 pt-28 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 text-xs uppercase tracking-[0.32em] text-accent"
          >
            United States · UAE · India
          </motion.p>
          <motion.h1
            id="home-hero-heading"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mx-auto max-w-4xl font-display text-4xl leading-[1.03] md:text-6xl lg:text-7xl"
          >
            Financial Clarity,
            <br />
            <span className="text-accent">Advisory-Led.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Debt management, restructuring, and credit advisory across the US,
            UAE, and India — guided by strategy, not pressure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary">
              Schedule a Confidential Consultation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-foreground transition-colors hover:text-accent"
            >
              Our services <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="about" className="container-site scroll-mt-28 py-28 md:py-36">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16 lg:gap-24">
          <SectionReveal>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-accent">
                About {SITE_NAME}
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-8 overflow-hidden rounded-md border border-border shadow-xl"
              >
                <img
                  src="/real-estate-about.jpg"
                  alt="Modern real estate property representing Connected Partners Real Estate advisory services"
                  width={640}
                  height={480}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              A measured, advisory-first approach to complex financial decisions.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Founded by Khenan Kheith, {SITE_NAME} sits at the
              intersection of finance, technology, and social impact. We work
              alongside individuals and businesses navigating debt,
              restructuring, and credit challenges — bringing structured
              analysis, discretion, and jurisdiction-aware guidance to every
              engagement.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-accent underline-offset-4 transition-colors hover:underline"
            >
              Learn more about us <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 border-t border-border bg-surface-2/40">
        <div className="container-site py-24 md:py-32">
          <SectionReveal>
            <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent">
                  Practice areas
                </p>
                <h2 className="max-w-2xl font-display text-3xl leading-tight md:text-5xl">
                  Three disciplines, one advisory framework.
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-foreground transition-colors hover:text-accent"
              >
                Explore services <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <ServicePillarCard
              index="01"
              icon={Scale}
              title="Debt Resolution & Restructuring"
              description="Strategic evaluation of liability positions, cash-flow optimization frameworks, and structured lender-negotiation approaches — grounded in your jurisdiction's regulatory landscape."
            />
            <ServicePillarCard
              index="02"
              icon={LineChart}
              title="Credit & Financial Advisory"
              description="Consultative guidance for businesses and individuals navigating debt, default, or restructuring phases. We build clarity around options — not promises around outcomes."
            />
            <ServicePillarCard
              index="03"
              icon={Cpu}
              title="AI-Powered Decision Systems"
              description="Technology-supported analysis to inform financial decisions. Data structures the conversation; advisors interpret it. Every recommendation remains human-led."
            />
          </div>

          <div className="mt-16">
            <ComplianceDisclaimer variant="inline" />
          </div>
        </div>
      </section>

      <section id="impact" className="container-site scroll-mt-28 py-28 md:py-36">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-24">
          <SectionReveal>
            <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-accent">
              <HeartHandshake size={14} aria-hidden="true" /> Pro-Bono Foundation
            </p>
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              Access to guidance, regardless of means.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              The {SITE_NAME} Pro-Bono Foundation offers structured
              financial guidance to individuals who cannot access professional
              advisory services. Application-based, entirely confidential.
            </p>
            <Link
              to="/impact"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-accent underline-offset-4 transition-colors hover:underline"
            >
              Learn about the foundation <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[4/3] overflow-hidden rounded-md border border-border shadow-xl"
            >
              <img
                src={heroImpact}
                alt="Warm morning light over a notebook and pen representing financial guidance"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </motion.div>
          </SectionReveal>
        </div>
      </section>

      <section id="contact-cta" className="scroll-mt-28 border-t border-border">
        <div className="container-site py-28 text-center md:py-36">
          <SectionReveal>
            <h2 className="mx-auto max-w-3xl font-display text-3xl leading-tight md:text-5xl">
              Begin with a confidential conversation.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
              We&apos;ll listen first. From there, we&apos;ll frame the options
              available to you within your jurisdiction.
            </p>
            <Link to="/contact" className="btn-primary mt-10">
              Schedule a Confidential Consultation
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
