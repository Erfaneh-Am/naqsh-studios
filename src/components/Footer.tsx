import { Link } from "wouter";
import { Instagram, PinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-accent/20 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex-1">
          <Link href="/" className="font-serif text-xl tracking-widest hover:text-accent transition-colors">
            NAQSH STUDIOS
          </Link>
        </div>
        
        <nav className="flex-1 flex justify-center space-x-6 text-sm uppercase tracking-widest text-muted-foreground">
          <Link href="/collections" className="hover:text-foreground transition-colors">
            Collections
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            Our Story
          </Link>
          <Link href="/" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex-1 flex justify-end items-center space-x-4 text-muted-foreground">
          <a href="#" className="hover:text-accent transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <PinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground tracking-wider">
        © 2026 Naqsh Studios. All rights reserved.
      </div>
    </footer>
  );
}
