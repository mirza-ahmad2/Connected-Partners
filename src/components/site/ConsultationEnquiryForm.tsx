import { useState } from "react";
import { Check, Send } from "lucide-react";

const situations = [
  "Personal Debt Advisory",
  "Business Restructuring",
  "Investor — AssetLQ Enquiry",
  "Pro-Bono Foundation Enquiry",
  "Other",
];

export function ConsultationEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-surface rounded-md p-10 text-center" role="status" aria-live="polite">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-accent text-accent">
          <Check size={20} aria-hidden="true" />
        </div>
        <h3 className="font-display text-2xl text-foreground">Enquiry received.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          A member of our advisory team will respond confidentially within two
          business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6" aria-label="Consultation enquiry form">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full Name" htmlFor="full-name" required>
          <input
            id="full-name"
            type="text"
            name="fullName"
            required
            autoComplete="name"
            className="input-el"
            placeholder="Your name"
          />
        </Field>
        <Field label="Country" htmlFor="country" required>
          <input
            id="country"
            type="text"
            name="country"
            required
            autoComplete="country-name"
            className="input-el"
            placeholder="United States, UAE, India…"
          />
        </Field>
      </div>

      <Field label="Email" htmlFor="email" required>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className="input-el"
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Situation Type" htmlFor="situation" required>
        <select id="situation" name="situation" required className="input-el appearance-none">
          <option value="">Select an option</option>
          {situations.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      <Field label="How can we help?" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input-el resize-none"
          placeholder="Share a general overview of your situation. Please do not include account numbers, government IDs, or other sensitive financial details."
        />
      </Field>

      <p className="text-xs text-muted-foreground">
        Please share only general context. Do not submit account numbers,
        social security numbers, or other sensitive financial details through
        this form.
      </p>

      <button type="submit" className="btn-primary w-fit">
        Request Consultation
        <Send size={14} aria-hidden="true" />
      </button>

      <style>{`
        .input-el {
          width: 100%;
          background: rgba(28, 42, 62, 0.5);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 0.85rem 1rem;
          color: var(--foreground);
          font-size: 0.95rem;
          transition: border-color .25s, background .25s, box-shadow .25s;
        }
        .input-el::placeholder { color: var(--muted-foreground); }
        .input-el:focus {
          outline: none;
          border-color: var(--accent);
          background: rgba(28, 42, 62, 0.8);
          box-shadow: 0 0 0 3px rgba(184, 147, 90, 0.12);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label} {required && <span className="text-accent" aria-hidden="true">*</span>}
        {required && <span className="sr-only"> (required)</span>}
      </span>
      {children}
    </label>
  );
}
