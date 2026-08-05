import { motion } from "framer-motion";
import heroHome from "@/assets/hero-home.jpg";

/**
 * Signature hero scene for the homepage.
 * Uses a high-res abstract network image with subtle motion — calm and stable,
 * never urgent. Lightweight on mobile (single static image, no WebGL).
 */
export function HeroScene() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.img
        src={heroHome}
        alt=""
        width={1920}
        height={1200}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 0.61, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* soft gold pulse */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(184,147,90,0.15),transparent_60%)]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      {/* subtle grid */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#B8935A" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
    </div>
  );
}
