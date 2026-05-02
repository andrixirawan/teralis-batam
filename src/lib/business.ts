// Global business constants — single source of truth
export const BUSINESS = {
  name: "Teralis Batam",
  legal: "PT Pras Teknindo",
  tagline: "Spesialis Besi & Stainless Steel Kualitas No.1 di Batam",
  description:
    "Bengkel fabrikasi besi & stainless steel di Batam. Spesialis teralis jendela, kanopi, railing tangga, rolling door, baja ringan, konstruksi baja, dan segala pekerjaan besi.",
  city: "Batam",
  address: "Komplek Ruko Pasar Buana Blok D No. 15, Tembesi, Batu Aji, Batam",
  hours: "Senin – Sabtu · 08.00 – 17.00 WIB",
  phones: ["081266075442", "081262939004"],
  whatsapp: "6281266075442",
  email: "info@teralis-batam.com",
  founded: 2010,
  stats: {
    years: 14,
    projects: "1.500+",
    clients: "800+",
    rating: "4.9/5",
  },
} as const;

const waMsg = (text: string) =>
  `https://api.whatsapp.com/send?phone=${BUSINESS.whatsapp}&text=${encodeURIComponent(text)}`;

export const LINKS = {
  whatsapp: `https://api.whatsapp.com/send?phone=${BUSINESS.whatsapp}`,
  whatsappWith: waMsg,
  whatsappQuote: waMsg(
    "Halo Teralis Batam, saya ingin konsultasi & minta penawaran. Mohon info lebih lanjut."
  ),
  tel: (n: string) => `tel:${n}`,
  mail: `mailto:${BUSINESS.email}`,
  maps: "https://maps.google.com/?q=Komplek+Ruko+Pasar+Buana+Blok+D+No+15+Tembesi+Batu+Aji+Batam",
  mapsEmbed:
    "https://www.google.com/maps?q=Komplek+Ruko+Pasar+Buana+Blok+D+No+15+Tembesi+Batu+Aji+Batam&output=embed",
  instagram: "https://instagram.com/teralisbatam",
  facebook: "https://facebook.com/teralisbatam",
  tiktok: "https://tiktok.com/@teralisbatam",
  youtube: "https://youtube.com/@teralisbatam",
  website: "https://www.teralis-batam.com",
} as const;

import teralis from "@/assets/svc-teralis.jpg";
import railing from "@/assets/svc-railing.jpg";
import kanopi from "@/assets/svc-kanopi.jpg";
import rollingdoor from "@/assets/svc-rollingdoor.jpg";
import bajaringan from "@/assets/svc-bajaringan.jpg";
import konstruksi from "@/assets/svc-konstruksi.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  desc: string;
  image: any;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "teralis-jendela",
    title: "Teralis Jendela & Pintu",
    short: "Pengaman rumah model klasik & minimalis",
    desc: "Pengaman kedua setelah jendela utama, sekaligus mempercantik fasad rumah Anda dengan beragam model dan ukuran custom.",
    image: teralis,
    features: ["Model klasik & minimalis", "Custom ukuran & motif", "Cat anti karat"],
  },
  {
    slug: "kanopi",
    title: "Kanopi",
    short: "Kanopi besi & spandek tahan cuaca",
    desc: "Kanopi kuat dan estetik untuk carport, balkon, atau teras. Tersedia rangka besi hollow dengan atap polycarbonate, alderon, atau spandek.",
    image: kanopi,
    features: ["Polycarbonate · Alderon · Spandek", "Anti bocor & rapi", "Garansi pengerjaan"],
  },
  {
    slug: "railing-tangga",
    title: "Railing Tangga & Tangga Putar",
    short: "Stainless steel & besi tempa premium",
    desc: "Railing tangga estetik dari stainless steel mirror finish atau besi tempa custom. Termasuk jasa pembuatan tangga putar untuk ruangan terbatas.",
    image: railing,
    features: ["Stainless 304 anti karat", "Tangga putar custom", "Finishing rapi & presisi"],
  },
  {
    slug: "rolling-door",
    title: "Rolling Door & Folding Gate",
    short: "Rolling door, folding gate, pintu lipat",
    desc: "Pintu pengaman untuk ruko, gudang, dan rumah. Tersedia model manual, full perforated, atau sliding folding gate dengan kunci ganda.",
    image: rollingdoor,
    features: ["Manual & motorized", "Plat galvanil tebal", "Garansi rangka"],
  },
  {
    slug: "baja-ringan",
    title: "Pemasangan Baja Ringan",
    short: "Rangka atap modern, hemat & cepat",
    desc: "Tim ahli pemasangan rangka atap baja ringan SNI. Lebih ringan, anti rayap, dan tahan karat dibanding kayu.",
    image: bajaringan,
    features: ["Material SNI", "Tukang berpengalaman", "Hitung gratis"],
  },
  {
    slug: "konstruksi-baja",
    title: "Konstruksi Baja & Spandek",
    short: "Gudang, ruko, repair konstruksi",
    desc: "Pengerjaan konstruksi baja berat untuk gudang, pabrik, dan komersial. Termasuk perbaikan kebocoran spandek dan repair struktur.",
    image: konstruksi,
    features: ["Gudang & pabrik", "Repair kebocoran", "Tim survey gratis"],
  },
];
