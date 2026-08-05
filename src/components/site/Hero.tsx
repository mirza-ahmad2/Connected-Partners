import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface HeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaTo?: string;
  children?: ReactNode;
  fullBleed?: boolean;
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "Page hero background",
  ctaLabel,
  ctaTo,
  children,
  fullBleed,
}: HeroProps) {
  return (
    <section className="relative isolate w-full overflow-hidden" aria-labelledby="page-hero-heading">
      {image && (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
            width={1920}
            height={1200}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/60 to-background" />
        </div>
      )}
      {!image && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-2 via-background to-background" aria-hidden="true" />
      )}

      <div
        className={
          fullBleed
            ? "flex min-h-[92vh] items-center justify-center px-6 pt-28"
            : "flex min-h-[68vh] items-center justify-center px-6 pb-16 pt-28"
        }
      >
        <div className="max-w-3xl text-center">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 text-xs uppercase tracking-[0.28em] text-accent"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            id="page-hero-heading"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="font-display text-4xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
          {ctaLabel && ctaTo && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="mt-10 flex justify-center"
            >
              <Link to={ctaTo} className="btn-primary group">
                {ctaLabel}
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
