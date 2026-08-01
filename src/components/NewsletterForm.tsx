import { useState } from "react";
import { Button } from "@/components/ui/button";
import { submitForm } from "@/lib/formsubmit";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    const result = await submitForm(
      { email, form: "Newsletter signup" },
      "New newsletter signup - Naqsh Studios",
    );
    if (result.ok) {
      setState("done");
      setEmail("");
    } else {
      setError(result.message);
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p className="font-serif text-2xl text-foreground" data-testid="newsletter-success">
        Thank you. You are on the list.
      </p>
    );
  }

  return (
    <div>
      <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="YOUR EMAIL ADDRESS"
          className="flex-grow bg-card border border-border px-6 h-14 text-sm tracking-widest uppercase focus:outline-none focus:border-accent transition-colors font-light placeholder:text-muted-foreground/60"
          required
        />
        <Button
          type="submit"
          disabled={state === "sending"}
          className="rounded-none bg-primary text-primary-foreground hover:bg-foreground uppercase tracking-widest text-sm h-14 px-10 disabled:opacity-60"
        >
          {state === "sending" ? "Joining…" : "Join"}
        </Button>
      </form>
      {state === "error" && (
        <p className="mt-4 text-sm font-light text-destructive" data-testid="newsletter-error">
          {error}
        </p>
      )}
    </div>
  );
}
