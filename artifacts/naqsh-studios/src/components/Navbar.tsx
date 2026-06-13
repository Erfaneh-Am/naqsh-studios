import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/ChatGPT_Image_May_23,_2026,_10_56_08_PM_1781333693722.png";

const categories = [
  {
    category: "Wall Sculptures",
    desc: "Dimensional wooden artworks for your walls",
    collections: ["Architecture Collection", "Poetry Collection", "Roots Collection"]
  },
  {
    category: "Lamps",
    desc: "Light sculpted by hand and heritage",
    collections: ["Ambient Series", "Pendant Collection"]
  },
  {
    category: "Mirrors",
    desc: "Reflections framed in crafted wood",
    collections: ["Arch Series", "Geometric Frames"]
  },
  {
    category: "Clocks",
    desc: "Time rendered as a decorative object",
    collections: ["Wall Clocks", "Table Clocks"]
  },
  {
    category: "Home Decors",
    desc: "Objects that complete a considered space",
    collections: ["Tabletop Objects", "Shelf Sculptures"]
  }
];

export default function Navbar() {
  const [location] = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
        transparent ? "bg-transparent text-white" : "bg-background/95 backdrop-blur-md text-foreground border-b border-border/40"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex-1">
          <Link href="/" className="block" data-testid="link-logo">
            <img
              src={logoImg}
              alt="Naqsh Studios"
              className={`h-14 w-auto object-contain transition-all duration-300 ${transparent ? "brightness-0 invert" : ""}`}
            />
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8 text-sm uppercase tracking-[0.2em] font-medium">
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button
              className="flex items-center gap-1.5 hover:text-accent transition-colors py-2"
              data-testid="nav-craftsmanship"
            >
              Craftsmanship
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="fixed left-0 right-0 top-20 z-40"
                  style={{ pointerEvents: "auto" }}
                >
                  <div
                    className={`w-full border-t border-accent/20 shadow-2xl ${
                      transparent ? "bg-foreground/95 backdrop-blur-md" : "bg-background/98 backdrop-blur-md"
                    }`}
                  >
                    <div className="max-w-7xl mx-auto px-6 py-10">
                      <div className="grid grid-cols-5 gap-8">
                        {categories.map((cat, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.2 }}
                            className="group"
                            data-testid={`dropdown-category-${i}`}
                          >
                            <Link href="/collections" className="block">
                              <div className="w-6 h-px bg-accent mb-4" />
                              <h3
                                className={`font-serif text-base mb-1 group-hover:text-accent transition-colors ${
                                  transparent ? "text-background" : "text-foreground"
                                }`}
                              >
                                {cat.category}
                              </h3>
                              <p
                                className={`font-sans text-xs font-light mb-4 leading-relaxed ${
                                  transparent ? "text-background/60" : "text-muted-foreground"
                                }`}
                              >
                                {cat.desc}
                              </p>
                              <ul className="space-y-2">
                                <li
                                  className={`text-[10px] font-sans uppercase tracking-[0.2em] mb-1 ${
                                    transparent ? "text-accent/80" : "text-accent"
                                  }`}
                                >
                                  Collections
                                </li>
                                {cat.collections.map((col, j) => (
                                  <li
                                    key={j}
                                    className={`flex items-center gap-2 text-[11px] font-sans font-light tracking-wide transition-colors cursor-pointer hover:text-accent ${
                                      transparent ? "text-background/70" : "text-muted-foreground"
                                    }`}
                                  >
                                    <span className="w-2.5 h-px bg-accent/40 inline-block flex-shrink-0" />
                                    {col}
                                  </li>
                                ))}
                              </ul>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="hover:text-accent transition-colors" data-testid="nav-about">
            About
          </Link>
          <Link href="/" className="hover:text-accent transition-colors" data-testid="nav-contact">
            Contact
          </Link>
        </nav>

        <div className="flex-1 flex justify-end items-center space-x-6">
          <button className="hover:text-accent transition-colors" data-testid="button-cart">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <Button
            variant="outline"
            className={`rounded-none border border-accent text-accent hover:bg-accent hover:text-accent-foreground uppercase tracking-widest text-xs h-10 px-6 ${
              transparent ? "border-white/50 text-white hover:bg-white hover:text-black" : ""
            }`}
            data-testid="button-inquire"
          >
            Inquire
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
