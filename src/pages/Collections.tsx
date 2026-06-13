import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import PieceGrid from "@/components/PieceGrid";
import { pieces, collectionNames, slugify, deslugify } from "@/data/pieces";

export default function Collections() {
  const [, params] = useRoute("/collections/:slug");
  const slug = params?.slug;

  const activeCollection = slug
    ? collectionNames.find((name) => slugify(name) === slug) ?? null
    : null;

  // A slug that matches no real collection (e.g. an upcoming product line) →
  // show that collection's name with an empty "coming soon" state, not the full catalog.
  const unmatchedSlug = slug && !activeCollection ? deslugify(slug) : null;

  const shown = activeCollection
    ? pieces.filter((p) => p.collection === activeCollection)
    : slug
      ? []
      : pieces;

  const heading = activeCollection ?? unmatchedSlug ?? "The Collections";
  const eyebrow = slug ? "Collection" : "Full Catalog";

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-smallcaps text-accent tracking-[0.2em] text-sm uppercase block mb-4">
            {eyebrow}
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-light tracking-wide text-foreground">
            {heading}
          </h1>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <Link
            href="/collections"
            className={`px-5 py-2 text-xs uppercase tracking-[0.2em] border transition-colors ${
              !activeCollection
                ? "border-accent text-accent"
                : "border-border text-muted-foreground hover:border-accent hover:text-accent"
            }`}
          >
            All
          </Link>
          {collectionNames.map((name) => {
            const isActive = name === activeCollection;
            return (
              <Link
                key={name}
                href={`/collections/${slugify(name)}`}
                className={`px-5 py-2 text-xs uppercase tracking-[0.2em] border transition-colors ${
                  isActive
                    ? "border-accent text-accent"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {name.replace(/ Collection$/, "")}
              </Link>
            );
          })}
        </div>

        {shown.length > 0 ? (
          <PieceGrid pieces={shown} />
        ) : (
          <div className="flex justify-center items-center h-64 text-muted-foreground font-serif text-xl italic">
            More pieces coming soon.
          </div>
        )}
      </div>
    </div>
  );
}
