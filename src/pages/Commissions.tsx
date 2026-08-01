import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { STANDARD_SIZES, DETAILED_SIZES, pieces } from "@/data/pieces";
import { submitForm } from "@/lib/formsubmit";

const STEPS = [
  {
    n: "I",
    title: "Tell me about the space",
    body: "The wall, the light it gets, the colors already in the room, and the feeling you want the piece to carry.",
  },
  {
    n: "II",
    title: "We settle the design",
    body: "Any existing work can be scaled, recolored, or reworked for your wall, or we can start from something new.",
  },
  {
    n: "III",
    title: "I make it",
    body: "Each piece is cut, layered, painted, and finished by hand in my studio in San Diego.",
  },
  {
    n: "IV",
    title: "It arrives ready to hang",
    body: "Framed and finished, with everything you need to put it on the wall.",
  },
];

const tierName = (sizes: typeof STANDARD_SIZES) =>
  pieces.filter((p) => p.sizes === sizes).map((p) => p.name).join(" · ");

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
            Made for your wall
          </h1>
          <p className="text-lg font-sans font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every piece I make is made to order. Any of the works in the collection can be
            scaled, recolored, or reworked for a particular wall, and I take on new
            designs as well. Tell me the space, the light, and the feeling you are after,
            and I will take it from there.
          </p>
        </motion.div>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12 mb-24">
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

        {/* Sizes and pricing */}
        <div className="border-t border-accent/20 pt-14 mb-24">
          <span className="font-smallcaps text-accent tracking-[0.25em] text-sm uppercase block mb-8">
            Sizes &amp; Pricing
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
            {[STANDARD_SIZES, DETAILED_SIZES].map((tier, i) => (
              <div key={i}>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
                  {tierName(tier)}
                </p>
                <ul>
                  {tier.map((s) => (
                    <li
                      key={s.size}
                      className="flex justify-between items-baseline border-b border-border py-3"
                    >
                      <span className="font-serif text-lg text-foreground">{s.size}</span>
                      <span className="font-serif text-lg text-foreground">{s.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="font-sans font-light text-muted-foreground mt-8">
            Working outside these two sizes is welcome. Tell me the dimensions in the form
            below and I will quote it.
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
              <input
                name="size"
                placeholder="Size you have in mind (or the wall dimensions)"
                className={field}
              />
              <input
                name="space"
                placeholder="The room and its light"
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
