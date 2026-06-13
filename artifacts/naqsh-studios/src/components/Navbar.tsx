import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const isHome = location === "/";
  const transparent = isHome && !isScrolled;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        transparent ? "bg-transparent text-white" : "bg-background/90 backdrop-blur-md text-foreground border-b border-border/40"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex-1">
          <Link href="/" className="font-serif text-2xl tracking-widest hover:text-accent transition-colors">
            NAQSH
          </Link>
        </div>
        
        <nav className="hidden md:flex flex-1 justify-center space-x-8 text-sm uppercase tracking-[0.2em] font-medium">
          <Link href="/collections" className="hover:text-accent transition-colors">
            Collections
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors">
            Craftsmanship
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex-1 flex justify-end items-center space-x-6">
          <button className="hover:text-accent transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <Button 
            variant="outline" 
            className={`rounded-none border border-accent text-accent hover:bg-accent hover:text-accent-foreground uppercase tracking-widest text-xs h-10 px-6 ${
              transparent ? "border-white/50 text-white hover:bg-white hover:text-black" : ""
            }`}
          >
            Inquire
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
