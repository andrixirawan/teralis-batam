
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { BUSINESS, LINKS } from "@/lib/business";

export function SiteFooter() {
  return (
    <footer className="bg-steel text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-spark font-display text-lg font-bold text-primary">TB</span>
            <div className="font-display text-lg font-bold">{BUSINESS.name}</div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">{BUSINESS.description}</p>
          <div className="mt-4 flex gap-3">
            <a href={LINKS.instagram} aria-label="Instagram" className="rounded-md bg-white/5 p-2 hover:bg-spark hover:text-primary transition"><Instagram className="h-4 w-4" /></a>
            <a href={LINKS.facebook} aria-label="Facebook" className="rounded-md bg-white/5 p-2 hover:bg-spark hover:text-primary transition"><Facebook className="h-4 w-4" /></a>
            <a href={LINKS.youtube} aria-label="Youtube" className="rounded-md bg-white/5 p-2 hover:bg-spark hover:text-primary transition"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <div className="font-display text-sm font-bold uppercase tracking-widest text-spark">Navigasi</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="/" className="hover:text-spark">Beranda</a></li>
            <li><a href="/about" className="hover:text-spark">Tentang</a></li>
            <li><a href="/services" className="hover:text-spark">Layanan</a></li>
            <li><a href="/gallery" className="hover:text-spark">Galeri</a></li>
            <li><a href="/contact" className="hover:text-spark">Kontak</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-sm font-bold uppercase tracking-widest text-spark">Layanan</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Teralis & Kanopi</li>
            <li>Railing & Tangga Putar</li>
            <li>Rolling Door</li>
            <li>Baja Ringan</li>
            <li>Konstruksi Baja</li>
          </ul>
        </div>
        <div>
          <div className="font-display text-sm font-bold uppercase tracking-widest text-spark">Kontak</div>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-spark" /> {BUSINESS.address}</li>
            {BUSINESS.phones.map((p) => (
              <li key={p} className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-spark" /> <a href={LINKS.tel(p)} className="hover:text-spark">{p}</a></li>
            ))}
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-spark" /> <a href={LINKS.mail} className="hover:text-spark">{BUSINESS.email}</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-spark" /> {BUSINESS.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6">
          <div>© {new Date().getFullYear()} {BUSINESS.legal}. All rights reserved.</div>
          <div>Spesialis Besi & Stainless Steel · Batam</div>
        </div>
      </div>
    </footer>
  );
}
