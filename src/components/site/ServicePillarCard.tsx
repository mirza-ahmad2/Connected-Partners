import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Props {
  index: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points?: string[];
}

export function ServicePillarCard({ index, icon: Icon, title, description, points }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
      className="card-surface group relative flex h-full flex-col rounded-md p-8 md:p-10"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="font-display text-xs uppercase tracking-[0.24em] text-accent">
          {index}
        </span>
        <Icon
          size={22}
          className="text-accent transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.4}
          aria-hidden="true"
        />
      </div>
      <h3 className="font-display text-2xl leading-tight text-foreground md:text-3xl">
        {title}
      </h3>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {points && points.length > 0 && (
        <ul className="mt-8 space-y-3 border-t border-border pt-6">
          {points.map((p) => (
            <li key={p} className="flex gap-3 text-sm text-muted-foreground">
              <span className="mt-2 h-px w-4 flex-none bg-accent/60" aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}
