import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logoImg from "@assets/ChatGPT_Image_May_23,_2026,_10_56_08_PM_1781333693722.png";
import logoDark from "@assets/logo-dark.png";

const INQUIRE_MAILTO =
  "mailto:erin@naqsh-studios.com?subject=Inquiry%20-%20Naqsh%20Studios";

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        transparent
          ? "bg-transparent text-white"
          : "bg-background/95 backdrop-blur-md text-foreground border-b border-border/40"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          transparent ? "h-44" : "h-16"
        }`}
      >
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="block" data-testid="link-logo">
            <img
              src={transparent ? logoDark : logoImg}
              alt="Naqsh Studios"
              className={`w-auto object-contain transition-all duration-300 ${
                transparent ? "h-40" : "h-12"
              }`}
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-10 text-sm normal-case tracking-[0.2em] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors py-2"
              data-testid={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: Inquire (desktop) + hamburger (mobile) */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Button
            asChild
            variant="outline"
            className={`hidden md:inline-flex rounded-none border border-accent text-accent hover:bg-accent hover:text-accent-foreground uppercase tracking-widest text-xs h-10 px-6 ${
              transparent ? "border-white/50 text-white hover:bg-white hover:text-black" : ""
            }`}
            data-testid="button-inquire"
          >
            <a href={INQUIRE_MAILTO}>Inquire</a>
          </Button>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 -mr-2 hover:text-accent transition-colors"
                aria-label="Open menu"
                data-testid="button-menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background text-foreground border-l border-accent/20 w-4/5 max-w-xs flex flex-col"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <img
                src={logoImg}
                alt="Naqsh Studios"
                className="h-12 w-auto object-contain mb-10 mt-2"
              />
              <nav className="flex flex-col space-y-6 text-lg font-serif tracking-wide">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <Button
                asChild
                variant="outline"
                className="mt-10 rounded-none border border-accent text-accent hover:bg-accent hover:text-accent-foreground uppercase tracking-widest text-xs h-11"
              >
                <a href={INQUIRE_MAILTO}>Inquire</a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
