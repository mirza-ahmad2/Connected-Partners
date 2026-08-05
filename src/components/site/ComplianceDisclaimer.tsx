import { Info } from "lucide-react";
import { SITE_NAME } from "@/lib/site-config";

interface Props {
  variant?: "inline" | "block";
}

export function ComplianceDisclaimer({ variant = "block" }: Props) {
  if (variant === "inline") {
    return (
      <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
        <Info size={14} className="mt-0.5 flex-none text-accent" aria-hidden="true" />
        <span>
          {SITE_NAME} provides advisory services. Outcomes depend on
          individual circumstances; we do not guarantee specific results.
        </span>
      </p>
    );
  }
  return (
    <div className="card-surface rounded-md p-6 md:p-8">
      <div className="flex items-start gap-4">
        <Info size={18} className="mt-1 flex-none text-accent" aria-hidden="true" />
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.22em] text-accent">
            Advisory Notice
          </p>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {SITE_NAME} provides financial advisory services. Outcomes
            depend on individual circumstances; we do not guarantee specific
            debt resolution, credit repair, or financial results. Consult a
            licensed professional in your jurisdiction before making financial
            decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
