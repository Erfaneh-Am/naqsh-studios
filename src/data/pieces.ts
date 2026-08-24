import arcadeImg from "@assets/arcade_1781333629648.png";
import geometryDiningImg from "@assets/geometry-room-dining.jpg";
import geometryLivingImg from "@assets/geometry-room-living.jpg";
import geometryEntryImg from "@assets/geometry-room-entry.jpg";
import heechImg from "@assets/heech_1781333629653.png";
import heechDiningImg from "@assets/heech-room-dining.jpg";
import heechLivingImg from "@assets/heech-room-living.jpg";
import heechEntryImg from "@assets/heech-room-entry.jpg";
import sarvImg from "@assets/sarv_1781333629654.png";
import sarvDiningImg from "@assets/sarv-room-dining.jpg";
import sarvLivingImg from "@assets/sarv-room-living.jpg";
import sarvEntryImg from "@assets/sarv-room-entry.jpg";
import kazehImg from "@assets/EF6BD3BA-F69A-4E6D-919D-359F3307C5A5_1781372629100.png";
import presenceDaylightImg from "@assets/presence-room-daylight.jpg";
import presenceDiningImg from "@assets/presence-room-dining.jpg";
import presenceLivingImg from "@assets/presence-room-living.jpg";
import clockRoomImg from "@assets/worldmap-clock-room.jpg";
import clockDetailImg from "@assets/worldmap-clock-detail.jpg";
import clockStyledImg from "@assets/worldmap-clock-styled.jpg";

export type SizeOption = { size: string; price: string };

export type Piece = {
  img: string;
  // Extra views shown alongside `img` in the detail dialog. Optional: most pieces
  // are photographed once.
  gallery?: string[];
  collection: string;
  name: string;
  story: string;
  sizes: SizeOption[];
  // Live Etsy listing. Checkout happens there, so this is the primary buy path.
  // Bare-ID form on purpose: Etsy appends its own slug and the link keeps working
  // even if the listing title is edited later.
  etsyId?: string;
};

// Repriced 2026-08-24. One formula for every piece:
//
//     price = materials + (hours × $42/hr)
//
// Materials are ~$350 for a wall piece. The rate is set by capping the largest,
// most detailed piece (32×48 detailed, ~68 hours) at $3,200. Rounded to the
// nearest hundred. No other adjustment is applied.
export const STANDARD_SIZES: SizeOption[] = [
  { size: "24″ × 36″", price: "$1,600" }, // 350 + 30h
  { size: "32″ × 48″", price: "$2,600" }, // 350 + 54h
];

// Pieces carrying dense hand-cut detail take about 25% longer to make at the
// same size, so they price a tier up on hours alone.
export const DETAILED_SIZES: SizeOption[] = [
  { size: "24″ × 36″", price: "$1,900" }, // 350 + 38h
  { size: "32″ × 48″", price: "$3,200" }, // 350 + 68h
];

// Clocks carry a movement, brass hands, a pendulum and recessed mounting on top of
// the same hand-cut layering, so materials carry a $400 hardware allowance on top
// of the usual $350.
export const CLOCK_SIZES: SizeOption[] = [
  { size: "24″ × 24″", price: "$1,800" }, // 750 + 25h
  { size: "28″ × 28″", price: "$2,200" }, // 750 + 34h
  { size: "32″ × 32″", price: "$2,600" }, // 750 + 45h
];

export const CUSTOM_NOTE = "Custom size, contact us";

export const ETSY_SHOP_URL = "https://www.etsy.com/shop/NaqshStudiosArt";

// The listed sizes are bought on Etsy. Anything custom still comes to Erin by email,
// so both paths stay live: `buyLink` for the standard sizes, `orderLink` for the rest.
export function buyLink(piece: Piece) {
  return piece.etsyId ? `https://www.etsy.com/listing/${piece.etsyId}` : orderLink(piece);
}

export function orderLink(piece: Piece) {
  const subject = `Custom size inquiry: ${piece.name} - ${piece.collection}`;
  const body = `Hi Erin,\n\nI'd like ${piece.name} in a custom size.\nRough dimensions I have in mind:\n\nThanks,`;
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
    gallery: [sarvDiningImg, sarvLivingImg, sarvEntryImg],
    collection: "Roots Collection",
    name: "Rooted in Grace",
    story:
      "Inspired by the Damask rose, gol-e Mohammadi, a flower woven through Persian gardens, poetry, and memory. A rose grows from hard ground, carries its thorns, moves through every season, and still finds its way to bloom.\n\nHere that rose is built rather than painted: an arching cane and layered leaves unfolding across architectural planes in deep burgundy, gold, and warm natural wood, rooted yet reaching toward light.\n\nFor me this piece is about that kind of strength. Staying rooted in where we come from, carrying the stories that shaped us, and still allowing ourselves to grow into something new.\n\nBecause grace is not about having an easy path. Sometimes, grace is simply continuing to bloom.",
    sizes: STANDARD_SIZES,
    etsyId: "4520555397",
  },
  {
    img: arcadeImg,
    gallery: [geometryDiningImg, geometryLivingImg, geometryEntryImg],
    collection: "Architecture Collection",
    name: "Geometry in Stillness",
    story:
      "Inspired by the quiet engineering behind old arches, the point where architecture and heritage meet and structure becomes beauty. Sacred geometry reimagined through a modern minimalist lens in soft neutral and charcoal tones.",
    sizes: DETAILED_SIZES,
    etsyId: "4520547991",
  },
  {
    img: heechImg,
    gallery: [heechDiningImg, heechLivingImg, heechEntryImg],
    collection: "Poetry Collection",
    name: "The Shape of Nothing",
    story:
      "Inspired by Parviz Tanavoli, the modern master who spent a lifetime turning heech, the word for nothing, into sculpture, finding in the spirit of Sufi thought that nothingness can hold everything. This is my own conversation with that idea: flowing calligraphy of Heech, where emptiness becomes an open invitation to reflection from every angle.",
    sizes: STANDARD_SIZES,
    etsyId: "4520551421",
  },
  {
    img: kazehImg,
    gallery: [presenceDaylightImg, presenceDiningImg, presenceLivingImg],
    collection: "Poetry Collection",
    name: "A Presence Like Home",
    story:
      "Inspired by kazheh, an old Kurdish and Persian word for the one who brings you comfort and calm, whom you trust and feel at home with. Here it takes form in layered calligraphy framed by architectural arches, held in a calm, stable blue.",
    sizes: DETAILED_SIZES,
    etsyId: "4520555804",
  },
  {
    img: clockRoomImg,
    gallery: [clockDetailImg, clockStyledImg],
    collection: "Clocks",
    name: "A World in Motion",
    story:
      "Inspired by the pull of somewhere else. Continents rise in gold leaf over oceans cut in five layers of deep blue and teal, and an offset navy face keeps the hour while a pendulum swings below. Handmade, and a working clock.",
    sizes: CLOCK_SIZES,
    etsyId: "4559821128",
  },
];

// Display order for collection listings / filters.
export const collectionOrder = [
  "Roots Collection",
  "Architecture Collection",
  "Poetry Collection",
  "Clocks",
];

// Only collections that actually have pieces, in display order.
export const collectionNames = collectionOrder.filter((name) =>
  pieces.some((p) => p.collection === name),
);
