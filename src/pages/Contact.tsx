import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaTiktok, FaPinterest, FaEtsy } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const EMAIL = "erin@naqsh-studios.com";
const INQUIRE_MAILTO = `mailto:${EMAIL}?subject=Inquiry%20-%20Naqsh%20Studios`;

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/naqshstudios.art/", Icon: FaInstagram },
  { label: "TikTok", href: "https://www.tiktok.com/@naqshstudios", Icon: FaTiktok },
  { label: "Pinterest", href: "https://www.pinterest.com/naqshstudiosart/", Icon: FaPinterest },
  { label: "Etsy", href: "https://www.etsy.com/shop/NaqshStudiosArt", Icon: FaEtsy },
];

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="font-smallcaps text-accent tracking-[0.2em] text-sm uppercase block mb-4">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-light tracking-wide text-foreground mb-6">
            Let's Talk
          </h1>
          <p className="font-serif text-lg font-light text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Whether you have a question about a piece, want to commission
            something for your own space, or simply want to say hello, I would
            love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col items-center gap-10 border-t border-accent/20 pt-14"
        >
          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <Mail className="w-6 h-6 text-accent mb-3" />
            <span className="font-smallcaps text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
              Email
            </span>
            <a
              href={INQUIRE_MAILTO}
              className="font-serif text-lg text-foreground hover:text-accent transition-colors"
            >
              {EMAIL}
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-center">
            <MapPin className="w-6 h-6 text-accent mb-3" />
            <span className="font-smallcaps text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
              Studio
            </span>
            <span className="font-serif text-lg text-foreground">
              San Diego, California
            </span>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center text-center">
            <span className="font-smallcaps text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Follow Along
            </span>
            <div className="flex items-center gap-6 text-muted-foreground">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-accent transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <Button
            asChild
            variant="outline"
            className="mt-4 rounded-none border border-accent text-accent hover:bg-accent hover:text-accent-foreground uppercase tracking-widest text-sm h-14 px-10"
          >
            <a href={INQUIRE_MAILTO}>Send a Message</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
