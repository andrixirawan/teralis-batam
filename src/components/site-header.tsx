
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { BUSINESS, LINKS } from "@/lib/business";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Beranda" },
  { to: "/about", label: "Tentang" },
  { to: "/services", label: "Layanan" },
  { to: "/gallery", label: "Galeri" },
  { to: "/contact", label: "Kontak" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-steel font-display text-lg font-bold text-spark">TB</span>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-wide">{BUSINESS.name}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{BUSINESS.legal}</div>
          </div>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.to}
              href={n.to}
              className="text-muted-foreground hover:text-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-spark text-primary hover:bg-spark/90">
            <a href={LINKS.whatsappQuote} target="_blank" rel="noreferrer">
              <Phone className="mr-1.5 h-4 w-4" /> Konsultasi Gratis
            </a>
          </Button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {nav.map((n) => (
              <a key={n.to} href={n.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
                {n.label}
              </a>
            ))}
            <a href={LINKS.whatsappQuote} target="_blank" rel="noreferrer" className="mt-2 block rounded-md bg-spark px-3 py-2 text-center text-sm font-semibold text-primary">
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
