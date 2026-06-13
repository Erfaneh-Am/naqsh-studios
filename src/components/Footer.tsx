import { Link } from "wouter";
import { FaInstagram, FaTiktok, FaPinterest, FaEtsy } from "react-icons/fa";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/naqshstudios.art/", Icon: FaInstagram },
  { label: "TikTok", href: "https://www.tiktok.com/@naqshstudios", Icon: FaTiktok },
  { label: "Pinterest", href: "https://www.pinterest.com/naqshstudiosart/", Icon: FaPinterest },
  { label: "Etsy", href: "https://www.etsy.com/shop/NaqshStudiosArt", Icon: FaEtsy },
];

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

        <div className="flex-1 flex justify-end items-center space-x-5 text-muted-foreground">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-accent transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground tracking-wider">
        © 2026 Naqsh Studios. All rights reserved.
      </div>
    </footer>
  );
}
