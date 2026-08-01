import arcadeImg from "@assets/arcade_1781333629648.png";
import heechImg from "@assets/heech_1781333629653.png";
import sarvImg from "@assets/sarv_1781333629654.png";
import kazehImg from "@assets/EF6BD3BA-F69A-4E6D-919D-359F3307C5A5_1781372629100.png";

export type SizeOption = { size: string; price: string };

export type Piece = {
  img: string;
  collection: string;
  name: string;
  story: string;
  sizes: SizeOption[];
};

export const STANDARD_SIZES: SizeOption[] = [
  { size: "24″ × 36″", price: "$650" },
  { size: "32″ × 48″", price: "$1,000" },
];

// Pieces carrying dense hand-cut detail take far longer to make and sit a tier up.
export const DETAILED_SIZES: SizeOption[] = [
  { size: "24″ × 36″", price: "$1,100" },
  { size: "32″ × 48″", price: "$1,700" },
];

export const CUSTOM_NOTE = "Custom size, contact us";

export function orderLink(piece: Piece) {
  const subject = `Order Inquiry: ${piece.name} - ${piece.collection}`;
  const body = `Hi Erin,\n\nI'd like to order ${piece.name}.\nPreferred size: [24x36 / 32x48 / custom]\n\nThanks,`;
  return `mailto:erin@naqsh-studios.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function deslugify(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const pieces: Piece[] = [
  {
    img: sarvImg,
    collection: "Roots Collection",
    name: "Rooted in Grace",
    story:
      "Inspired by the sarv, the cypress that stays green through the hardest winters and has long stood for endurance and quiet grace. Rooted yet reaching toward light, its branches and layered leaves unfold across architectural planes in rich burgundy and warm natural wood.",
    sizes: STANDARD_SIZES,
  },
  {
    img: arcadeImg,
    collection: "Architecture Collection",
    name: "Geometry in Stillness",
    story:
      "Inspired by the quiet engineering behind old arches, the point where architecture and heritage meet and structure becomes beauty. Sacred geometry reimagined through a modern minimalist lens in soft neutral and charcoal tones.",
    sizes: DETAILED_SIZES,
  },
  {
    img: heechImg,
    collection: "Poetry Collection",
    name: "The Shape of Nothing",
    story:
      "Inspired by Parviz Tanavoli, the modern master who spent a lifetime turning heech, the word for nothing, into sculpture, finding in the spirit of Sufi thought that nothingness can hold everything. This is my own conversation with that idea: flowing calligraphy of Heech, where emptiness becomes an open invitation to reflection from every angle.",
    sizes: STANDARD_SIZES,
  },
  {
    img: kazehImg,
    collection: "Poetry Collection",
    name: "A Presence Like Home",
    story:
      "Inspired by kazheh, an old Kurdish and Persian word for the one who brings you comfort and calm, whom you trust and feel at home with. Here it takes form in layered calligraphy framed by architectural arches, held in a calm, stable blue.",
    sizes: DETAILED_SIZES,
  },
];

// Display order for collection listings / filters.
export const collectionOrder = [
  "Roots Collection",
  "Architecture Collection",
  "Poetry Collection",
];

// Only collections that actually have pieces, in display order.
export const collectionNames = collectionOrder.filter((name) =>
  pieces.some((p) => p.collection === name),
);
