import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { submitForm } from "@/lib/formsubmit";

const STEPS = [
  {
    n: "I",
    title: "Tell me what you have in mind",
    body: "The kind of piece, the space it will live in, the light it gets, the colors already around it, and the feeling you want it to carry.",
  },
  {
    n: "II",
    title: "We settle the design",
    body: "Any existing piece can be scaled, recolored, or reworked for your space, or we can start from something entirely new.",
  },
  {
    n: "III",
    title: "I make it",
    body: "Cut, layered, painted, and finished by hand in my studio in San Diego.",
  },
  {
    n: "IV",
    title: "It arrives finished",
    body: "Complete and ready to live in your space.",
  },
];

const PIECE_TYPES = [
  "Wall piece",
  "Lamp",
  "Clock",
  "Something for the home",
  "Not sure yet",
];

export default function Commissions() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError("");
    const data = new FormData(e.currentTarget);
    const result = await submitForm(
      {
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        type: String(data.get("type") || ""),
        size: String(data.get("size") || ""),
        space: String(data.get("space") || ""),
        message: String(data.get("message") || ""),
      },
      "New commission inquiry - Naqsh Studios",
    );
    setSending(false);
    if (result.ok) setSent(true);
    else setError(result.message);
  }

  const field =
    "w-full bg-card border border-border px-5 h-14 text-sm font-light focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/60";

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-smallcaps text-accent tracking-[0.3em] text-sm uppercase block mb-6">
            Custom Commissions
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-foreground leading-tight mb-8">
            Made for your space
          </h1>
          <p className="text-lg font-sans font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Everything I make is made to order. A wall piece, a lamp, a clock, an object
            for the home, or something that does not exist yet. Any existing design can be
            scaled, recolored, or reworked for your space, and I take on new ideas as
            well. Tell me the space, the light, and the feeling you are after, and I will
            take it from there.
          </p>
        </motion.div>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12 mb-20">
          {STEPS.map((step) => (
            <div key={step.n}>
              <span className="font-serif text-accent text-xl block mb-3">{step.n}</span>
              <h3 className="font-serif text-2xl text-foreground mb-3">{step.title}</h3>
              <p className="font-sans font-light text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-accent/20 pt-10 mb-20">
          <p className="font-sans font-light text-muted-foreground leading-relaxed max-w-2xl">
            Because every commission is different in size, material, and detail, each one
            is quoted on its own. Send me what you are imagining and I will come back to
            you with a price. If you would like a sense of where my work sits, the{" "}
            <Link href="/collections" className="text-foreground hover:text-accent transition-colors">
              collection
            </Link>{" "}
            lists sizes and prices for the pieces available now.
          </p>
        </div>

        {/* Inquiry form */}
        <div className="border-t border-accent/20 pt-14">
          <span className="font-smallcaps text-accent tracking-[0.25em] text-sm uppercase block mb-4">
            Start a Commission
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-10">
            Tell me about your space
          </h2>

          {sent ? (
            <div data-testid="commission-success">
              <p className="font-serif text-2xl text-foreground mb-4">
                Thank you. Your inquiry is on its way.
              </p>
              <p className="font-sans font-light text-muted-foreground mb-8">
                I read every message myself and will get back to you soon.
              </p>
              <Button
                asChild
                variant="outline"
                className="rounded-none border border-accent text-accent hover:bg-accent hover:text-accent-foreground uppercase tracking-widest text-sm h-14 px-10"
              >
                <Link href="/collections">See the Collection</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input name="name" placeholder="Your name" className={field} required />
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className={field}
                  required
                />
              </div>
              <select
                name="type"
                defaultValue=""
                className={`${field} text-muted-foreground/60 focus:text-foreground [&:valid]:text-foreground`}
                required
              >
                <option value="" disabled>
                  What kind of piece?
                </option>
                {PIECE_TYPES.map((t) => (
                  <option key={t} value={t} className="text-foreground">
                    {t}
                  </option>
                ))}
              </select>
              <input
                name="size"
                placeholder="Size or dimensions you have in mind"
                className={field}
              />
              <input
                name="space"
                placeholder="The space it will live in and its light"
                className={field}
              />
              <textarea
                name="message"
                rows={6}
                placeholder="What you are imagining: colors, feeling, a piece of mine you like, anything at all"
                className="w-full bg-card border border-border px-5 py-4 text-sm font-light focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/60"
                required
              />
              {error && (
                <p className="text-sm font-light text-destructive" data-testid="commission-error">
                  {error}
                </p>
              )}
              <Button
                type="submit"
                disabled={sending}
                className="self-start rounded-none bg-primary text-primary-foreground hover:bg-foreground uppercase tracking-widest text-sm h-14 px-10 disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send Inquiry"}
              </Button>
              <p className="text-sm font-light text-muted-foreground">
                Prefer email? Write to{" "}
                <a
                  href="mailto:erin@naqsh-studios.com?subject=Commission%20Inquiry%20-%20Naqsh%20Studios"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  erin@naqsh-studios.com
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
