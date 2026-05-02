
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Clock4, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BUSINESS, LINKS, SERVICES } from "@/lib/business";
import heroImg from "@/assets/hero-welding.jpg?url";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-steel text-primary-foreground">
        <img src={heroImg} alt="Tukang las stainless steel di workshop Teralis Batam" className="absolute inset-0 h-full w-full object-cover opacity-40" width={1600} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-r from-steel via-steel/90 to-steel/30" />
        <div className="absolute inset-0 bg-radial-spark" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-spark/40 bg-spark/10 px-3 py-1 text-xs font-medium text-spark">
              <Sparkles className="h-3.5 w-3.5" /> Sejak 2010 · {BUSINESS.legal}
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Spesialis Besi & <span className="text-spark">Stainless Steel</span> Kualitas No.1 di Batam
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              Teralis, kanopi, railing tangga, rolling door, hingga konstruksi baja — dikerjakan rapi oleh tukang berpengalaman dengan garansi pengerjaan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-spark text-primary hover:bg-spark/90">
                <a href={LINKS.whatsappQuote} target="_blank" rel="noreferrer">Konsultasi Gratis <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15">
                <a href="/services">Lihat Layanan</a>
              </Button>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
              {[
                { v: BUSINESS.stats.years + "+", l: "Tahun" },
                { v: BUSINESS.stats.projects, l: "Proyek" },
                { v: BUSINESS.stats.rating, l: "Rating" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-bold text-spark">{s.v}</div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sekilas */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-spark">Sekilas Tentang</div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Bengkel fabrikasi besi terpercaya di Batam</h2>
            <p className="mt-5 text-muted-foreground">
              {BUSINESS.legal} fokus pada spesialis fabrikasi <strong>stainless steel & besi</strong>. Kami mengerjakan instalasi dan pembuatan teralis jendela, kanopi, railing tangga, spandek, tangga putar, konstruksi baja, baja ringan, dan semua pekerjaan besi lainnya.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {["Tukang berpengalaman & rapi", "Material berkualitas SNI", "Garansi pengerjaan", "Survey & penawaran gratis"].map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-spark" />{t}</li>
              ))}
            </ul>
            <Button asChild className="mt-8" variant="default">
              <a href="/about">Selengkapnya <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-brand">
              <img src={SERVICES[2].image} alt="Railing stainless steel" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-spark p-5 text-primary shadow-spark sm:block">
              <div className="font-display text-3xl font-bold">{BUSINESS.stats.years}+</div>
              <div className="text-xs uppercase tracking-widest">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-spark">Layanan Kami</div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Apa yang Kami Kerjakan</h2>
            <p className="mt-3 text-muted-foreground">Pilihan layanan fabrikasi besi & stainless steel untuk rumah, ruko, gudang, hingga proyek komersial.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.slug} className="group overflow-hidden rounded-2xl bg-card shadow-card transition hover:-translate-y-1 hover:shadow-brand">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-spark" />{f}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <a href="/services">Lihat Semua Layanan</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Kenapa Pilih Teralis Batam?</h2>
          <p className="mt-3 text-muted-foreground">Komitmen kami: hasil rapi, on-time, dan tanpa drama.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { i: ShieldCheck, t: "Garansi Pengerjaan", d: "Setiap proyek didukung garansi rangka & finishing. Ada masalah, kami datang." },
            { i: Clock4, t: "Tepat Waktu", d: "Estimasi waktu jelas di awal. Kami komitmen selesai sesuai jadwal." },
            { i: Sparkles, t: "Hasil Rapi", d: "Las halus, sambungan presisi, finishing cat anti karat dengan standar workshop." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-spark/15 text-spark"><f.i className="h-6 w-6" /></div>
              <h3 className="mt-4 font-display text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Kata Klien Kami</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "Pak Budi", r: "Pemilik Rumah, Batam Center", q: "Teralis & kanopi dikerjakan rapi banget, finishing-nya halus. Selesai sesuai jadwal." },
              { n: "Bu Linda", r: "Owner Ruko, Batu Aji", q: "Rolling door tebal, mekanismenya halus. Tim survey ramah dan harga transparan." },
              { n: "Pak Hendra", r: "Kontraktor", q: "Sudah langganan untuk pekerjaan railing stainless. Kualitas las-nya konsisten." },
            ].map((t) => (
              <figure key={t.n} className="rounded-2xl bg-card p-6 shadow-card">
                <div className="flex gap-1 text-spark">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-3 text-sm">"{t.q}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold">{t.n} <span className="font-normal text-muted-foreground">— {t.r}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-steel text-primary-foreground">
        <div className="absolute inset-0 bg-radial-spark" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Siap Wujudkan Proyek Besi Anda?</h2>
          <p className="mt-3 text-primary-foreground/80">Konsultasi & survey GRATIS. Respon WhatsApp di jam kerja.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-spark text-primary hover:bg-spark/90">
              <a href={LINKS.whatsappQuote} target="_blank" rel="noreferrer">Chat WhatsApp Sekarang</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15">
              <a href="/contact">Lihat Lokasi</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}



