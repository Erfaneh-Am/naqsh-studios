import { motion } from "framer-motion";

export default function Collections() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-smallcaps text-accent tracking-[0.2em] text-sm uppercase block mb-4">
            Full Catalog
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-light tracking-wide text-foreground">
            The Collections
          </h1>
        </motion.div>
        
        <div className="flex justify-center items-center h-64 text-muted-foreground font-serif text-xl italic">
          More pieces coming soon.
        </div>
      </div>
    </div>
  );
}
