

import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { LINKS, SERVICES } from "@/lib/business";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-steel text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-spark">Layanan</div>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Apa yang Kami Kerjakan</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">Spesialis fabrikasi besi & stainless steel untuk rumah, ruko, gudang, dan proyek komersial di Batam dan sekitarnya.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="space-y-16">
          {SERVICES.map((s, i) => (
            <article key={s.slug} className="grid items-center gap-10 md:grid-cols-2">
              <div className={`overflow-hidden rounded-2xl shadow-brand ${i % 2 ? "md:order-2" : ""}`}>
                <img src={s.image} alt={s.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-spark">Layanan {String(i + 1).padStart(2, "0")}</div>
                <h2 className="mt-2 font-display text-3xl font-bold">{s.title}</h2>
                <p className="mt-4 text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-spark" />{f}</li>
                  ))}
                </ul>
                <Button asChild className="mt-7 bg-spark text-primary hover:bg-spark/90">
                  <a href={LINKS.whatsappWith(`Halo, saya mau tanya layanan ${s.title}.`)} target="_blank" rel="noreferrer">
                    Tanya Harga <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}



