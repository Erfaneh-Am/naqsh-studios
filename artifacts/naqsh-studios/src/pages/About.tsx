import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-smallcaps text-accent tracking-[0.2em] text-sm uppercase block mb-4">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-light tracking-wide text-foreground">
            Craftsmanship
          </h1>
        </motion.div>
        
        <div className="prose prose-lg mx-auto text-muted-foreground font-serif leading-relaxed">
          <p>
            Naqsh Studios was born from a deep reverence for Persian architectural geometry and a conviction that handcraft belongs in contemporary interiors. Every piece is designed to live with you — to age, to catch light differently at different hours, to carry meaning.
          </p>
          <p>
            Our process is unhurried. Each layer is considered. Each shadow is intentional.
          </p>
        </div>
      </div>
    </div>
  );
}
