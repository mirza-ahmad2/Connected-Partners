import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE_NAME } from "@/lib/site-config";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/impact", label: "Social Impact" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-md"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container-site flex h-20 items-center justify-between">
        <Link
          to="/"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          aria-label={`${SITE_NAME} — Home`}
        >
          <img
            src={logo}
            alt={`${SITE_NAME} logo`}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover shadow-md ring-1 ring-border transition-shadow duration-300 group-hover:shadow-lg group-hover:ring-accent/40"
          />
          <span className="hidden font-display text-sm leading-tight tracking-tight text-foreground sm:block lg:text-base">
            Connected Partners
            <span className="block text-xs text-accent lg:text-sm">Real Estate</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:gap-10 md:flex" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-accent"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="btn-outline hidden md:inline-flex"
        >
          Consultation
        </Link>

        <button
          type="button"
          className="rounded-sm p-2 text-foreground transition-colors hover:bg-surface md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container-site flex flex-col gap-1 py-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 justify-center"
            >
              Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
