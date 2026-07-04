import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center bg-background text-foreground px-6 py-32 overflow-hidden">
      {/* Faint geometric watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] text-foreground pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[36rem] h-[36rem]">
          <polygon points="50,3 90,25 90,75 50,97 10,75 10,25" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <polygon points="50,15 78,32 78,68 50,85 22,68 22,32" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <polygon points="50,28 66,38 66,62 50,72 34,62 34,38" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M50 8 L62 38 L92 50 L62 62 L50 92 L38 62 L8 50 L38 38 Z" stroke="currentColor" strokeWidth="0.4" fill="none" />
        </svg>
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <span className="font-smallcaps text-accent tracking-[0.35em] text-sm md:text-base uppercase mb-6">
          In the Making
        </span>

        <h1 className="text-4xl md:text-6xl font-serif font-light tracking-wide leading-[1.1] text-foreground mb-8">
          Something beautiful<br />
          <span className="text-accent/90 italic">is taking shape</span>
        </h1>

        <p className="text-base md:text-lg font-sans font-light tracking-[0.05em] text-muted-foreground leading-relaxed mb-4 max-w-xl">
          This collection is still on the workbench. New handcrafted pieces —
          layered, carved, and shaped by heritage — are being made and will be
          added here soon.
        </p>

        <p className="text-base md:text-lg font-sans font-light tracking-[0.05em] text-muted-foreground leading-relaxed mb-12 max-w-xl">
          Check back soon to see what emerges from the wood.
        </p>

        <div className="w-12 h-px bg-accent/50 mb-12" />

        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <Button
            asChild
            variant="outline"
            className="rounded-none border border-accent text-accent hover:bg-accent hover:text-accent-foreground uppercase tracking-widest text-sm h-14 px-10"
          >
            <Link href="/collections">
              Explore Wall Sculptures
            </Link>
          </Button>

          <Link
            href="/"
            className="group flex items-center text-sm uppercase tracking-widest font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
