import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import studioImg from "@assets/artist-portrait.jpg";

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-smallcaps text-accent tracking-[0.2em] text-sm uppercase block mb-4">
            About the Artist
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-light tracking-wide text-foreground">
            The Hands Behind the Work
          </h1>
        </motion.div>

        {/* Portrait + Biography */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-2/5 flex-shrink-0"
          >
            <div className="relative w-full overflow-hidden">
              <img
                src={studioImg}
                alt="Erin Amoueyan, founder of Naqsh Studios"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="flex-1"
          >
            <h2 className="font-smallcaps text-accent tracking-[0.2em] text-lg uppercase mb-2">
              Biography
            </h2>
            <p className="font-serif text-2xl font-light text-foreground mb-8 leading-snug">
              A lifelong love, no longer kept on the side.
            </p>

            <div className="space-y-6 font-serif text-lg font-light text-muted-foreground leading-relaxed">
              <p>
                I have always been an artist. For years it lived alongside
                everything else, a second life I made room for after work, in
                classes, at the easel. I studied painting for many years under{" "}
                <a
                  href="https://www.instagram.com/rahimmowlaeian.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline decoration-accent/40 underline-offset-4 hover:text-accent transition-colors"
                >
                  Rahim Mowlaeian
                </a>
                , and art stayed the constant I kept returning to, no matter
                what else life asked of me.
              </p>
              <p>
                Then engineering took over. Immigrating to the United States and
                pursuing a PhD, I set the brushes down for a few years. There
                simply wasn't room, but the pull never left. In the quiet of the
                pandemic I came back, painting again, and this time reaching for
                wood.
              </p>
              <p>
                My work shifted too, from engineering into data science and
                machine learning, yet the making never stopped. In the last two
                years, woodworking became its center. I found a way to bring
                painting and wood together, layering color, geometry, and the
                heritage I grew up with into pieces that hold light and shadow. I
                am proud to be part of the{" "}
                <a
                  href="https://sdfwa.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline decoration-accent/40 underline-offset-4 hover:text-accent transition-colors"
                >
                  San Diego Fine Woodworkers Association
                </a>
                , a community of over a thousand makers whose shared craft keeps
                pushing me forward. Naqsh Studios is where it finally comes
                together: the engineer's precision, the painter's eye, and a love
                I no longer keep on the side.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Studio coda + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center border-t border-accent/20 pt-16"
        >
          <p className="font-serif text-lg font-light text-muted-foreground leading-relaxed mb-10">
            Naqsh Studios was born from a deep reverence for architectural
            geometry and a conviction that handcraft belongs in contemporary
            interiors. Every piece is designed to live with you, to
            age, to catch light differently at different hours, to carry meaning.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center text-sm uppercase tracking-widest font-medium text-foreground hover:text-accent transition-colors"
          >
            Explore the Collections
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
