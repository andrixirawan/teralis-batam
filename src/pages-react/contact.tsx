

import { Button } from "@/components/ui/button";
import { BUSINESS, LINKS } from "@/lib/business";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="bg-steel text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-spark">Kontak</div>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Hubungi Kami</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">Konsultasi & survey GRATIS. Tim kami siap merespons di jam kerja.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            {[
              { i: MapPin, t: "Alamat Workshop", v: BUSINESS.address, href: LINKS.maps, cta: "Buka di Maps" },
              { i: Phone, t: "Telepon", v: BUSINESS.phones.join(" · "), href: LINKS.tel(BUSINESS.phones[0]), cta: "Telepon Sekarang" },
              { i: MessageCircle, t: "WhatsApp", v: BUSINESS.phones[0], href: LINKS.whatsappQuote, cta: "Chat WA" },
              { i: Mail, t: "Email", v: BUSINESS.email, href: LINKS.mail, cta: "Kirim Email" },
              { i: Clock, t: "Jam Operasional", v: BUSINESS.hours },
            ].map((c) => (
              <div key={c.t} className="flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-spark/15 text-spark"><c.i className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.t}</div>
                    <div className="mt-0.5 text-sm font-medium">{c.v}</div>
                  </div>
                </div>
                {c.href && (
                  <Button asChild size="sm" variant="outline">
                    <a href={c.href} target="_blank" rel="noreferrer">{c.cta}</a>
                  </Button>
                )}
              </div>
            ))}
            <Button asChild size="lg" className="w-full bg-spark text-primary hover:bg-spark/90">
              <a href={LINKS.whatsappQuote} target="_blank" rel="noreferrer">Konsultasi Gratis via WhatsApp</a>
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Lokasi Teralis Batam"
              src={LINKS.mapsEmbed}
              className="h-full min-h-[400px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}



