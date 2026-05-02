

import { Button } from "@/components/ui/button";
import { BUSINESS, LINKS } from "@/lib/business";
import { Award, Users, Wrench, Target } from "lucide-react";
import railing from "@/assets/svc-railing.jpg?url";

export default function AboutPage() {
  return (
    <>
      <section className="bg-steel text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-spark">Tentang Kami</div>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Bengkel besi yang Anda bisa andalkan</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">{BUSINESS.legal} berdiri sejak {BUSINESS.founded} dengan satu misi: memberi hasil fabrikasi besi & stainless steel yang rapi, tahan lama, dan transparan dari sisi harga.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-brand">
            <img src={railing} alt="Workshop Teralis Batam" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold">Cerita Kami</h2>
            <p className="mt-4 text-muted-foreground">Dimulai dari workshop kecil di Tembesi, Batu Aji, kami tumbuh karena satu hal: <strong>klien yang puas merekomendasikan kami</strong>. Hingga hari ini, kami sudah menyelesaikan lebih dari {BUSINESS.stats.projects} proyek — mulai dari teralis rumah, kanopi ruko, hingga konstruksi baja gudang.</p>
            <p className="mt-4 text-muted-foreground">Kami tidak menjual hanya besi — kami menjual <strong>ketenangan pikiran</strong>: pengerjaan tepat waktu, finishing rapi, dan after-sales yang tetap responsif.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { i: Award, v: BUSINESS.stats.years + "+", l: "Tahun Pengalaman" },
                { i: Wrench, v: BUSINESS.stats.projects, l: "Proyek Selesai" },
                { i: Users, v: BUSINESS.stats.clients, l: "Klien Puas" },
                { i: Target, v: BUSINESS.stats.rating, l: "Rating Klien" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-card p-4">
                  <s.i className="h-5 w-5 text-spark" />
                  <div className="mt-2 font-display text-2xl font-bold">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { t: "Misi", d: "Mengerjakan setiap proyek besi dengan standar workshop, sehingga klien tidak perlu memikirkan ulang vendor." },
              { t: "Visi", d: "Menjadi bengkel fabrikasi besi & stainless steel paling tepercaya di Kepulauan Riau." },
              { t: "Nilai", d: "Jujur soal harga, tepat waktu, hasil rapi, dan komunikasi yang gampang." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl bg-card p-6 shadow-card">
                <div className="font-display text-xl font-bold text-spark">{v.t}</div>
                <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold">Mari mulai proyek Anda</h2>
        <p className="mt-3 text-muted-foreground">Konsultasi & survey GRATIS — kami bantu pilih solusi paling tepat sesuai kebutuhan & budget.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-spark text-primary hover:bg-spark/90">
            <a href={LINKS.whatsappQuote} target="_blank" rel="noreferrer">Konsultasi WhatsApp</a>
          </Button>
          <Button asChild size="lg" variant="outline"><a href="/services">Lihat Layanan</a></Button>
        </div>
      </section>
    </>
  );
}



