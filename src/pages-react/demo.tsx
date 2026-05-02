import { ArrowUpRight, Building2, Megaphone, Link2 } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const cards = [
  {
    to: "/",
    label: "Company Profile",
    desc: "Website resmi 5 halaman: Beranda, Tentang, Layanan, Galeri, Kontak. Cocok untuk membangun kredibilitas dan SEO jangka panjang.",
    icon: Building2,
    accent: "from-slate-700 to-slate-900",
  },
  {
    to: "/lp",
    label: "Landing Page",
    desc: "Halaman tunggal fokus konversi. Copywriting persuasif, hook PAS, social proof, scarcity & CTA WhatsApp. Cocok untuk iklan FB/Google Ads.",
    icon: Megaphone,
    accent: "from-amber-500 to-orange-600",
  },
  {
    to: "/bio",
    label: "Link in Bio",
    desc: "Halaman ringkas mobile-first. Semua kontak, social, dan layanan dalam satu link. Cocok untuk bio Instagram/TikTok.",
    icon: Link2,
    accent: "from-pink-500 to-rose-600",
  },
];

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-steel text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-spark">Demo Proposal</div>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Pilih Tipe Website untuk {BUSINESS.name}</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/70">3 pendekatan website yang sudah kami siapkan. Klik salah satu untuk preview live.</p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.to}
              href={c.to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-brand"
            >
              <div className={`grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br ${c.accent} text-white shadow-md`}>
                <c.icon className="h-7 w-7" />
              </div>
              <div className="mt-5 flex items-start justify-between">
                <h2 className="font-display text-2xl font-bold">{c.label}</h2>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-spark group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-spark">
                Lihat Preview →
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-muted/40 p-6 text-center">
          <h3 className="font-display text-xl font-bold">Mau kombinasi ketiganya?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Bisa. Company profile sebagai rumah utama, landing page untuk iklan, dan link-in-bio untuk sosmed — semua terhubung.</p>
        </div>
      </section>
    </div>
  );
}
