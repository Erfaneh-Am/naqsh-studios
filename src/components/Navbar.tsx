import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { slugify } from "@/data/pieces";
import logoImg from "@assets/ChatGPT_Image_May_23,_2026,_10_56_08_PM_1781333693722.png";
import logoDark from "@assets/logo-dark.png";

// href = where the category header (and its sub-links) point.
// realCollections = sub-links resolve to their own /collections/:slug page
// (only Wall Sculptures has live pieces). Otherwise every link in the group
// goes to the category's href: the coming-soon page for lines still in the
// making, or the full catalog for the ones that are ready.
const categories = [
  {
    category: "Wall Sculptures",
    desc: "Dimensional wooden artworks for your walls",
    href: "/collections",
    realCollections: true,
    collections: ["Architecture Collection", "Poetry Collection", "Roots Collection"]
  },
  {
    category: "Lamps",
    desc: "Light sculpted by hand and heritage",
    href: "/coming-soon",
    realCollections: false,
    collections: ["Ambient Series", "Pendant Collection"]
  },
  {
    category: "Clocks",
    desc: "Time rendered as a decorative object",
    href: "/coming-soon",
    realCollections: false,
    collections: ["Wall Clocks", "Table Clocks"]
  },
  {
    category: "Home Decors",
    desc: "Objects that complete a considered space",
    href: "/collections",
    realCollections: false,
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent text-white" : "bg-background/95 backdrop-blur-md text-foreground border-b border-border/40"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${transparent ? "h-44" : "h-16"}`}>
        <div className="flex-1">
          <Link href="/" className="block" data-testid="link-logo">
            <img
              src={transparent ? logoDark : logoImg}
              alt="Naqsh Studios"
              className={`w-auto object-contain transition-all duration-300 ${transparent ? "h-40" : "h-12"}`}
            />
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8 text-sm normal-case tracking-[0.2em] font-medium">
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
                  className={`fixed left-0 right-0 z-40 transition-all duration-300 ${transparent ? "top-44" : "top-16"}`}
                  style={{ pointerEvents: "auto" }}
                >
                  <div
                    className={`w-full border-t border-accent/20 shadow-2xl ${
                      transparent ? "bg-foreground/95 backdrop-blur-md" : "bg-background/98 backdrop-blur-md"
                    }`}
                  >
                    <div className="max-w-7xl mx-auto px-6 py-10">
                      <div className="grid grid-cols-4 gap-8">
                        {categories.map((cat, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.2 }}
                            className="group"
                            data-testid={`dropdown-category-${i}`}
                          >
                            <Link
                              href={cat.href}
                              className="block"
                              onClick={() => setShowDropdown(false)}
                            >
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
                            </Link>
                            <ul className="space-y-2">
                              <li
                                className={`text-[10px] font-sans uppercase tracking-[0.2em] mb-1 ${
                                  transparent ? "text-accent/80" : "text-accent"
                                }`}
                              >
                                Collections
                              </li>
                              {cat.collections.map((col, j) => (
                                <li key={j}>
                                  <Link
                                    href={cat.realCollections ? `/collections/${slugify(col)}` : cat.href}
                                    onClick={() => setShowDropdown(false)}
                                    className={`flex items-center gap-2 text-[11px] font-sans font-light tracking-wide transition-colors cursor-pointer hover:text-accent ${
                                      transparent ? "text-background/70" : "text-muted-foreground"
                                    }`}
                                  >
                                    <span className="w-2.5 h-px bg-accent/40 inline-block flex-shrink-0" />
                                    {col}
                                  </Link>
                                </li>
                              ))}
                            </ul>
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
          <Button
            asChild
            variant="outline"
            className={`rounded-none border border-accent text-accent hover:bg-accent hover:text-accent-foreground uppercase tracking-widest text-xs h-10 px-6 ${
              transparent ? "border-white/50 text-white hover:bg-white hover:text-black" : ""
            }`}
            data-testid="button-inquire"
          >
            <a href="mailto:erin@naqsh-studios.com?subject=Inquiry%20-%20Naqsh%20Studios">
              Inquire
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
