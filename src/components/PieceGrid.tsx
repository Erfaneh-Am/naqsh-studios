import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { type Piece, CUSTOM_NOTE, orderLink, slugify } from "@/data/pieces";

export default function PieceGrid({ pieces }: { pieces: Piece[] }) {
  const [selected, setSelected] = useState<Piece | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {pieces.map((piece, i) => (
          <motion.div
            key={piece.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="group flex flex-col"
            data-testid={`card-piece-${i}`}
          >
            <button
              type="button"
              onClick={() => setSelected(piece)}
              className="block text-left focus:outline-none"
              data-testid={`piece-open-${i}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-muted">
                <img
                  src={piece.img}
                  alt={piece.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </button>
            <Link
              href={`/collections/${slugify(piece.collection)}`}
              className="font-sans text-xs uppercase tracking-[0.25em] text-accent/70 hover:text-accent transition-colors mb-2 inline-block w-fit"
              data-testid={`piece-collection-${i}`}
            >
              {piece.collection}
            </Link>
            <button
              type="button"
              onClick={() => setSelected(piece)}
              className="text-left focus:outline-none"
            >
              <h3 className="font-serif text-2xl text-foreground mb-2">{piece.name}</h3>
              <span className="inline-flex items-center text-xs uppercase tracking-widest font-medium text-foreground group-hover:text-accent transition-colors mt-1">
                View Details <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-3xl p-0 gap-0 bg-background border-border max-h-[90vh] overflow-y-auto">
          {selected && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[3/4] md:aspect-auto bg-muted">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-accent/70 mb-2 block">
                  {selected.collection}
                </span>
                <DialogTitle className="font-serif text-3xl font-light text-foreground mb-4">
                  {selected.name}
                </DialogTitle>
                <DialogDescription className="font-sans font-light text-muted-foreground text-sm mb-8 leading-relaxed">
                  {selected.story}
                </DialogDescription>

                <div className="border-t border-border pt-6 mb-8">
                  <span className="font-smallcaps text-accent tracking-[0.2em] text-sm uppercase block mb-4">
                    Sizes &amp; Pricing
                  </span>
                  <ul className="space-y-3">
                    {selected.sizes.map((s) => (
                      <li
                        key={s.size}
                        className="flex items-baseline justify-between border-b border-border/50 pb-2"
                      >
                        <span className="font-serif text-lg text-foreground">{s.size}</span>
                        <span className="font-sans text-base text-foreground">{s.price}</span>
                      </li>
                    ))}
                    <li className="pt-1">
                      <span className="font-serif text-lg text-muted-foreground italic">
                        {CUSTOM_NOTE}
                      </span>
                    </li>
                  </ul>
                </div>

                <a href={orderLink(selected)} className="mt-auto" data-testid="link-order">
                  <Button className="w-full rounded-none bg-primary text-primary-foreground hover:bg-foreground uppercase tracking-widest text-sm h-14">
                    <Mail className="w-4 h-4 mr-2" /> Order / Inquire
                  </Button>
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
