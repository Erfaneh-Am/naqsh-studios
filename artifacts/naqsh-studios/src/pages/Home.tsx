import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-[100dvh] w-full flex items-center bg-foreground text-background">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Layered wooden geometric wall art" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, staggerChildren: 0.2 }}
            className="max-w-3xl"
          >
            <motion.h1 
              className="text-7xl md:text-8xl lg:text-9xl font-serif font-light leading-[0.9] tracking-widest mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Where Silence<br />
              <span className="text-accent/90 italic">Speaks in Wood</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl font-sans font-light tracking-wide text-background/80 max-w-xl mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Contemporary wooden artworks inspired by heritage, craftsmanship, and meaningful design.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <Button 
                variant="outline" 
                className="rounded-none border border-accent text-accent hover:bg-accent hover:text-foreground uppercase tracking-widest text-sm h-14 px-8"
              >
                Shop Collection
              </Button>
              <Link href="/about" className="group flex items-center text-sm uppercase tracking-widest font-medium text-background/90 hover:text-accent transition-colors">
                Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
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
          <span className="font-smallcaps text-accent tracking-[0.3em] text-sm block mb-6">
            Collections
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">
            Handcrafted for spaces that demand presence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Card 1 - Large */}
          <Link href="/collections" className="group block col-span-1 md:col-span-8 relative overflow-hidden h-[600px] bg-card">
            <img src="/images/collection-1.png" alt="Wall Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full text-white">
              <h3 className="font-serif text-3xl mb-2 transition-transform duration-500 group-hover:-translate-y-2">Wall Art</h3>
              <p className="font-sans font-light tracking-wide text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Layered geometric sculptures for your walls</p>
              <div className="w-0 h-px bg-accent mt-4 group-hover:w-12 transition-all duration-500 delay-200" />
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/collections" className="group block col-span-1 md:col-span-4 relative overflow-hidden h-[600px] bg-card">
            <img src="/images/collection-2.png" alt="Mirrors" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full text-white">
              <h3 className="font-serif text-3xl mb-2 transition-transform duration-500 group-hover:-translate-y-2">Mirrors</h3>
              <p className="font-sans font-light tracking-wide text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Reflections framed in crafted wood</p>
              <div className="w-0 h-px bg-accent mt-4 group-hover:w-12 transition-all duration-500 delay-200" />
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/collections" className="group block col-span-1 md:col-span-4 relative overflow-hidden h-[400px] bg-card">
            <img src="/images/collection-3.png" alt="Wall Clocks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full text-white">
              <h3 className="font-serif text-3xl mb-2 transition-transform duration-500 group-hover:-translate-y-2">Wall Clocks</h3>
              <p className="font-sans font-light tracking-wide text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Time as an art form</p>
              <div className="w-0 h-px bg-accent mt-4 group-hover:w-12 transition-all duration-500 delay-200" />
            </div>
          </Link>

          {/* Card 4 */}
          <Link href="/collections" className="group block col-span-1 md:col-span-4 relative overflow-hidden h-[400px] bg-card">
            <img src="/images/collection-4.png" alt="Table Clocks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full text-white">
              <h3 className="font-serif text-3xl mb-2 transition-transform duration-500 group-hover:-translate-y-2">Table Clocks</h3>
              <p className="font-sans font-light tracking-wide text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Desk companions of quiet distinction</p>
              <div className="w-0 h-px bg-accent mt-4 group-hover:w-12 transition-all duration-500 delay-200" />
            </div>
          </Link>

          {/* Card 5 & 6 (Abstract/Pattern) */}
          <div className="col-span-1 md:col-span-4 grid grid-rows-2 gap-6 md:gap-8 h-[400px]">
            <Link href="/collections" className="group block relative overflow-hidden bg-primary p-6 flex flex-col justify-end">
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L100 50L50 100L0 50L50 0Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M50 20L80 50L50 80L20 50L50 20Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-background mb-1">Lamp Stands</h3>
              <p className="font-sans text-sm font-light text-background/80">Light shaped by hand</p>
            </Link>
            
            <Link href="/collections" className="group block relative overflow-hidden bg-muted p-6 flex flex-col justify-end">
              <h3 className="font-serif text-2xl text-foreground mb-1">Custom Commissions</h3>
              <p className="font-sans text-sm font-light text-foreground/80">Artworks made for your space</p>
              <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                img: "/images/signature-1.png",
                name: "The Isfahan Vault",
                tech: "Seven-layer walnut, laser-etched geometry",
                story: "Inspired by the geometric vaulting of Isfahan's Grand Mosque, catching light differently at every hour."
              },
              {
                img: "/images/signature-2.png",
                name: "Whispers of Hafez",
                tech: "Five-layer dark oak, contemporary calligraphy",
                story: "A modern interpretation of Persian poetry, where the negative space holds as much weight as the wood."
              },
              {
                img: "/images/signature-3.png",
                name: "Shiraz Star",
                tech: "Nine-layer maple and walnut, architectural motif",
                story: "Rooted in traditional star patterns, exploded into three dimensions to create deep, moving shadows."
              }
            ].map((piece, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-muted">
                  <img src={piece.img} alt={piece.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <h3 className="font-serif text-3xl text-foreground mb-2">{piece.name}</h3>
                <p className="font-smallcaps text-accent text-sm tracking-widest mb-4">{piece.tech}</p>
                <p className="font-sans font-light text-muted-foreground mb-6 flex-grow">{piece.story}</p>
                <Link href="/collections" className="inline-flex items-center text-sm uppercase tracking-widest font-medium text-foreground hover:text-accent transition-colors">
                  View Piece <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Craftsmanship Journey */}
      <section className="py-32 px-6 max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">
            The Making
          </h2>
        </motion.div>

        <div className="relative border-l border-accent/30 ml-4 md:ml-0 md:border-l-0">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-accent/30 -translate-y-1/2" />
          
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4">
            {[
              { num: "01", title: "Design", desc: "Every piece begins as a sketch rooted in architectural heritage." },
              { num: "02", title: "Cutting", desc: "Precision cutting of up to 12 layers of premium wood." },
              { num: "03", title: "Layering", desc: "Each stratum assembled by hand, creating depth and shadow." },
              { num: "04", title: "Finishing", desc: "Sanded, stained, sealed — a week of patient refinement." },
              { num: "05", title: "Artwork", desc: "A piece that earns its wall." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-8 md:pl-0 md:pt-16 md:flex-1 group"
              >
                <div className="absolute top-0 left-0 md:left-1/2 w-2 h-2 rounded-full bg-accent -translate-x-[5px] md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2 z-10" />
                
                <div className="text-7xl font-serif font-light text-muted opacity-30 absolute top-0 -left-4 md:-top-4 md:left-1/2 md:-translate-x-1/2 -z-10 transition-opacity duration-500 group-hover:opacity-50">
                  {step.num}
                </div>
                
                <h3 className="font-smallcaps tracking-widest text-foreground text-lg mb-3 md:text-center mt-2 md:mt-0">{step.title}</h3>
                <p className="font-sans text-sm font-light text-muted-foreground md:text-center leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
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
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img src="/images/studio.png" alt="Naqsh Studios Workspace" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1"
          >
            <span className="font-smallcaps text-accent tracking-[0.3em] text-sm block mb-6">
              The Studio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-8 leading-tight">
              Art rooted in heritage,<br />crafted for today.
            </h2>
            <p className="text-lg font-sans font-light text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Naqsh Studios was born from a deep reverence for Persian architectural geometry and a conviction that handcraft belongs in contemporary interiors. Every piece is designed to live with you — to age, to catch light differently at different hours, to carry meaning.
            </p>
            <Link href="/about" className="inline-flex items-center text-sm uppercase tracking-widest font-medium text-foreground hover:text-accent transition-colors">
              Meet the Studio <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 7. Gallery Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4">
              In Their Space
            </h2>
            <p className="text-lg font-sans font-light tracking-wide text-muted-foreground">
              Naqsh pieces as they live in real interiors
            </p>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { img: "/images/gallery-1.png", alt: "Living room installation", title: "Private Residence, London" },
              { img: "/images/gallery-2.png", alt: "Minimalist space", title: "Minimalist Loft, Berlin" },
              { img: "/images/gallery-3.png", alt: "Dining room", title: "Dining Room, Paris" },
              { img: "/images/gallery-4.png", alt: "Bedroom art", title: "Boutique Hotel, Rome" },
              { img: "/images/gallery-5.png", alt: "Entryway mirror", title: "Entryway, New York" },
              { img: "/images/gallery-6.png", alt: "Office art", title: "Home Office, Dubai" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i % 3 * 0.2 }}
                className="relative overflow-hidden group break-inside-avoid"
              >
                <img src={item.img} alt={item.alt} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-serif text-white text-xl px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
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
            <span className="font-smallcaps text-accent tracking-[0.3em] text-sm block mb-8">
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
                author: "Layla H.",
                role: "Interior Designer"
              },
              {
                quote: "Naqsh Studios created a custom calligraphy piece for my study. It's the most meaningful object in our home.",
                author: "Reza M.",
                role: "Collector"
              },
              {
                quote: "We commissioned a lobby installation and our clients ask about it every single visit.",
                author: "Shirin A.",
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
