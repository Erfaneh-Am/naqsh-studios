import { motion } from "framer-motion";
import logoImg from "@assets/ChatGPT_Image_May_23,_2026,_10_56_08_PM_1781333693722.png";

export default function ComingSoon() {
  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center bg-foreground text-background px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-transparent to-foreground/70" />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={logoImg}
          alt="Naqsh Studios"
          className="h-[28rem] md:h-[36rem] w-auto object-contain brightness-0 invert drop-shadow-lg mb-10"
        />

        <span className="font-smallcaps text-accent tracking-[0.35em] text-base md:text-lg uppercase mb-6">
          Coming Soon
        </span>

        <h1 className="text-3xl md:text-4xl font-serif font-light tracking-wide text-background mb-4">
          Where Silence <span className="text-accent/90 italic">Speaks in Wood</span>
        </h1>

        <p className="text-sm md:text-base font-sans font-light tracking-[0.1em] text-background/70 max-w-md leading-relaxed">
          Our storefront is being refined. Please check back soon for handcrafted
          Persian-inspired wood art.
        </p>

        <div className="w-12 h-px bg-accent/50 mt-10" />
      </motion.div>
    </div>
  );
}
