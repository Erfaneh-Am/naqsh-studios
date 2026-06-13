import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PieceGrid from "@/components/PieceGrid";
import { pieces } from "@/data/pieces";
import arcadeImg from "@assets/arcade_1781333629648.png";
import delImg from "@assets/EF6BD3BA-F69A-4E6D-919D-359F3307C5A5_1781372629100.png";
import studioImg from "@assets/ChatGPT_Image_May_23,_2026,_11_17_58_PM_1781333693723.png";
import logoDark from "@assets/logo-dark.png";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[100dvh] w-full flex items-center pt-36 pb-20 bg-foreground text-background">
        <div className="absolute inset-0 z-0">
          <img 
            src={delImg}
            alt="Layered wooden wall art — Del, Poetry Collection" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-transparent to-foreground/70" />
        </div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] tracking-widest mb-0 text-background"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Where Silence<br />
            <span className="text-accent/90 italic">Speaks in Wood</span>
          </motion.h1>

          <motion.div
            className="-my-12 md:-my-16"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.5 }}
          >
            {/* <img
              src={logoDark}
              alt="Naqsh Studios"
              className="h-[26rem] md:h-[32rem] w-auto object-contain drop-shadow-lg"
            />
          </motion.div>

          <motion.p
            className="text-sm md:text-base font-sans font-light tracking-[0.1em] text-background/70 max-w-xl -mt-8 md:-mt-12 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }} */}
          >
            Contemporary wooden artworks inspired by heritage,<br />craftsmanship, and meaningful design.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <Button
              variant="outline"
              className="rounded-none border border-accent text-accent hover:bg-accent hover:text-foreground uppercase tracking-widest text-sm h-14 px-10"
              data-testid="button-shop-collection"
            >
              Shop Collection
            </Button>
            <Link href="/about" className="group flex items-center text-sm uppercase tracking-widest font-medium text-background/70 hover:text-accent transition-colors" data-testid="link-our-story">
              Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-px bg-accent/40" />
      </section>

      {/* 3. Featured Collections Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="font-smallcaps text-accent tracking-[0.25em] text-xl md:text-2xl font-medium block mb-6">
            Collections
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">
            Handcrafted for spaces that demand presence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Card 1 - Large: Wall Sculptures */}
          <Link href="/collections" className="group block col-span-1 md:col-span-8 relative overflow-hidden h-[600px] bg-card" data-testid="card-collection-wall-sculptures">
            <img src={arcadeImg} alt="Wall Sculptures — Architecture Collection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full text-white">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-white/50 mb-2 block">Featured</span>
              <h3 className="font-serif text-4xl mb-2 transition-transform duration-500 group-hover:-translate-y-2">Wall Sculptures</h3>
              <p className="font-sans font-light tracking-wide text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Layered dimensional artworks for spaces that demand presence</p>
              <div className="w-0 h-px bg-accent mt-4 group-hover:w-12 transition-all duration-500 delay-200" />
            </div>
          </Link>

          {/* Card 2: Lamps */}
          <Link href="/collections" className="group block col-span-1 md:col-span-4 relative overflow-hidden h-[600px] bg-primary" data-testid="card-collection-lamps">
            <div className="absolute inset-0 opacity-15">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1"/>
                <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1"/>
                <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1"/>
                <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="43" y1="43" x2="157" y2="157" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="157" y1="43" x2="43" y2="157" stroke="currentColor" strokeWidth="0.5"/>
              </svg>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-background">
              <h3 className="font-serif text-3xl mb-2 transition-transform duration-500 group-hover:-translate-y-2">Lamps</h3>
              <p className="font-sans font-light tracking-wide text-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Light sculpted by hand, shaped by heritage</p>
              <div className="w-0 h-px bg-accent mt-4 group-hover:w-12 transition-all duration-500 delay-200" />
            </div>
          </Link>

          {/* Card 3: Mirrors */}
          <Link href="/collections" className="group block col-span-1 md:col-span-4 relative overflow-hidden h-[400px] bg-card" data-testid="card-collection-mirrors">
            <div className="absolute inset-0 bg-foreground/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-40 opacity-20">
                <rect x="10" y="10" width="100" height="140" rx="50" stroke="currentColor" strokeWidth="2"/>
                <rect x="20" y="20" width="80" height="120" rx="40" stroke="currentColor" strokeWidth="1"/>
                <path d="M60 35 L70 50 L60 65 L50 50 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full text-white">
              <h3 className="font-serif text-3xl mb-2 transition-transform duration-500 group-hover:-translate-y-2">Mirrors</h3>
              <p className="font-sans font-light tracking-wide text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Reflections framed in crafted wood</p>
              <div className="w-0 h-px bg-accent mt-4 group-hover:w-12 transition-all duration-500 delay-200" />
            </div>
          </Link>

          {/* Card 4: Clocks */}
          <Link href="/collections" className="group block col-span-1 md:col-span-4 relative overflow-hidden h-[400px] bg-muted" data-testid="card-collection-clocks">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-36 opacity-15">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="50" y1="20" x2="50" y2="35" stroke="currentColor" strokeWidth="2"/>
                <line x1="50" y1="50" x2="65" y2="55" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="50" cy="50" r="2" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full text-white">
              <h3 className="font-serif text-3xl mb-2 transition-transform duration-500 group-hover:-translate-y-2">Clocks</h3>
              <p className="font-sans font-light tracking-wide text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Time as an art form — wall and table</p>
              <div className="w-0 h-px bg-accent mt-4 group-hover:w-12 transition-all duration-500 delay-200" />
            </div>
          </Link>

          {/* Card 5 & 6: Home Decors + Custom Commissions */}
          <div className="col-span-1 md:col-span-4 grid grid-rows-2 gap-6 md:gap-8 h-[400px]">
            <Link href="/collections" className="group block relative overflow-hidden bg-foreground p-6 flex flex-col justify-end" data-testid="card-collection-home-decors">
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <polygon points="50,35 65,42.5 65,57.5 50,65 35,57.5 35,42.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-background mb-1">Home Decors</h3>
              <p className="font-sans text-sm font-light text-background/70">Objects that complete a space</p>
              <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <Link href="/collections" className="group block relative overflow-hidden bg-muted/60 border border-accent/20 p-6 flex flex-col justify-end" data-testid="card-collection-custom">
              <h3 className="font-serif text-2xl text-foreground mb-1">Custom Commissions</h3>
              <p className="font-sans text-sm font-light text-foreground/60">Artworks made for your space</p>
              <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-accent/20" />

      {/* 4. Signature Pieces */}
      <section className="py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl font-serif font-light text-foreground mb-6">
              Signature Pieces
            </h2>
            <p className="text-lg font-sans font-light tracking-wide text-muted-foreground">
              Each piece carries a story of craft and intention
            </p>
          </motion.div>

          <PieceGrid pieces={pieces} />
        </div>
      </section>

      {/* 6. About / Founder Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 w-full"
          >
            <div className="relative w-full overflow-hidden">
              <img src={studioImg} alt="Naqsh Studios — The hands behind the work" className="w-full h-auto object-contain" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1"
          >
            <span className="font-smallcaps text-accent tracking-[0.25em] text-xl md:text-2xl font-medium block mb-6">
              The Studio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-8 leading-tight">
              Art rooted in heritage,<br />crafted for today.
            </h2>
            <p className="text-lg font-sans font-light text-muted-foreground mb-6 leading-relaxed max-w-lg">
              At Naqsh Studios, we believe art should do more than fill a wall. It should tell a story, evoke a feeling, and create a lasting connection.
            </p>
            <p className="text-lg font-sans font-light text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Inspired by the poetry, architecture, and cultural heritage of the Middle East, we create handcrafted wooden artworks that bridge tradition and contemporary design. Each piece is thoughtfully composed from layered wood and shaped by themes of identity, belonging, nature, and human experience — designed to bring depth, warmth, and meaning into the spaces where life unfolds.
            </p>
            <Link href="/about" className="inline-flex items-center text-sm uppercase tracking-widest font-medium text-foreground hover:text-accent transition-colors">
              Meet the Studio <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 8. Custom Work Section */}
      <section className="py-32 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-smallcaps text-accent tracking-[0.25em] text-xl md:text-2xl font-medium block mb-8">
              Bespoke
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 leading-tight">
              Every space is unique.<br />Your artwork should be too.
            </h2>
            <p className="text-lg font-sans font-light tracking-wide text-background/70 max-w-2xl mx-auto mb-16 leading-relaxed">
              We collaborate with interior designers, architects, and collectors to create pieces that are shaped by the space they will inhabit.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-12 mb-16">
              <div className="flex flex-col items-center">
                <div className="w-px h-12 bg-accent/40 mb-4" />
                <h3 className="font-serif text-2xl mb-2">Interior Designer<br/>Collaborations</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-px h-12 bg-accent/40 mb-4" />
                <h3 className="font-serif text-2xl mb-2">Personalized<br/>Artworks</h3>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="rounded-none border border-accent text-accent hover:bg-accent hover:text-foreground uppercase tracking-widest text-sm h-14 px-10 bg-transparent"
            >
              Start a Commission
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The piece transformed our living room. The depth of the layers catches morning light in a way I've never seen in wall art.",
                author: "Sophie L.",
                role: "Interior Designer"
              },
              {
                quote: "Naqsh Studios created a custom calligraphy piece for my study. It's the most meaningful object in our home.",
                author: "James R.",
                role: "Collector"
              },
              {
                quote: "We commissioned a lobby installation and our clients ask about it every single visit.",
                author: "Layla M.",
                role: "Architect"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-card p-10 flex flex-col h-full relative"
              >
                <div className="font-serif text-6xl text-accent/30 absolute top-6 left-6 leading-none">"</div>
                <p className="font-serif text-xl leading-relaxed text-foreground mb-8 relative z-10 pt-4 flex-grow">
                  {testimonial.quote}
                </p>
                <div className="mt-auto">
                  <p className="font-smallcaps tracking-widest text-foreground">{testimonial.author}</p>
                  <p className="text-sm font-light text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Newsletter */}
      <section className="py-32 px-6 border-t border-accent/20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
              Be First to See
            </h2>
            <p className="text-lg font-sans font-light tracking-wide text-muted-foreground mb-12">
              Exclusive releases. Limited collections. New artwork announcements.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="flex-grow bg-card border border-border px-6 h-14 text-sm tracking-widest uppercase focus:outline-none focus:border-accent transition-colors font-light placeholder:text-muted-foreground/60"
                required
              />
              <Button 
                type="submit"
                className="rounded-none bg-primary text-primary-foreground hover:bg-foreground uppercase tracking-widest text-sm h-14 px-10"
              >
                Join
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
