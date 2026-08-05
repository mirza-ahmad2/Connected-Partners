import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { SITE_NAME } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-surface-2/60" role="contentinfo">
      <div className="container-site py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="group inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={logo}
                alt={`${SITE_NAME} logo`}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover shadow-md ring-1 ring-border transition-shadow duration-300 group-hover:ring-accent/40"
              />
              <div>
                <span className="font-display text-xl leading-tight">Connected Partners</span>
                <span className="block font-display text-sm text-accent">Real Estate</span>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Debt management, financial restructuring, and credit advisory —
              guiding individuals and businesses across the United States, UAE,
              and India.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-accent">
              Navigate
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/impact" className="footer-link">Social Impact</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-accent">
              Offices
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>United States</li>
              <li>United Arab Emirates</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="hairline my-12" />

        <p className="max-w-4xl text-xs leading-relaxed text-muted-foreground">
          {SITE_NAME} provides financial advisory services. This is not a
          guarantee of debt resolution, credit repair, or specific financial
          outcomes. Consult a licensed professional in your jurisdiction before
          making financial decisions.
        </p>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent underline-offset-4 transition-colors hover:underline"
            >
              The Innovations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
