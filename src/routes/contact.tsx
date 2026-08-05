import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { ConsultationEnquiryForm } from "@/components/site/ConsultationEnquiryForm";
import { ComplianceDisclaimer } from "@/components/site/ComplianceDisclaimer";
import { SectionReveal } from "@/components/site/SectionReveal";
import { buildPageHead } from "@/lib/seo";
import { SITE_NAME, CONTACT_EMAIL, CONTACT_EMAIL_SECONDARY, LINKEDIN_URL } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildPageHead({
      title: `Contact — Schedule a Confidential Consultation | ${SITE_NAME}`,
      description:
        "Schedule a confidential consultation with Connected Partners Real Estate. Advisory guidance for debt, restructuring, and credit — across the US, UAE, and India.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Confidential intake"
        title={
          <>
            <span className="md:whitespace-nowrap">Schedule a Confidential</span>
            <br />
            Consultation.
          </>
        }
        subtitle="Share a general overview of your situation. A member of the advisory team will respond within two business days."
      />

      <section className="container-site pb-24 md:pb-32">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <SectionReveal>
            <div>
              <div className="mb-8">
                <ComplianceDisclaimer variant="inline" />
              </div>
              <ConsultationEnquiryForm />
            </div>
          </SectionReveal>

          <aside className="space-y-10" aria-label="Contact information">
            <SectionReveal delay={0.1}>
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent">Direct contact</p>
                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail size={16} className="mt-0.5 text-accent" aria-hidden="true" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">General enquiries</p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-foreground transition-colors hover:text-accent"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={16} className="mt-0.5 text-accent" aria-hidden="true" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${CONTACT_EMAIL_SECONDARY}`}
                        className="text-foreground transition-colors hover:text-accent"
                      >
                        {CONTACT_EMAIL_SECONDARY}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Linkedin size={16} className="mt-0.5 text-accent" aria-hidden="true" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">LinkedIn</p>
                      <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-foreground transition-colors hover:text-accent"
                      >
                        Connect with the founder
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent">Jurisdictions</p>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3"><MapPin size={14} className="text-accent" aria-hidden="true" /> United States</li>
                  <li className="flex items-center gap-3"><MapPin size={14} className="text-accent" aria-hidden="true" /> United Arab Emirates</li>
                  <li className="flex items-center gap-3"><MapPin size={14} className="text-accent" aria-hidden="true" /> India</li>
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="card-surface rounded-md p-6">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">A note on privacy</p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Please do not include account numbers, government identifiers,
                  or other sensitive financial details in this form. We&apos;ll
                  request only what&apos;s needed, through secure channels, once
                  an engagement begins.
                </p>
              </div>
            </SectionReveal>
          </aside>
        </div>
      </section>
    </>
  );
}
