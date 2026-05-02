import { SERVICES } from "@/lib/business";

const items = [
  ...SERVICES,
  ...SERVICES.slice(0, 3),
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-steel text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-spark">Galeri</div>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Hasil Pengerjaan Kami</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">Beberapa contoh proyek yang sudah kami selesaikan untuk klien rumah dan komersial di Batam.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {items.map((s, i) => (
            <figure key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-card group relative">
              <img src={s.image} alt={s.title} className="w-full transition duration-500 group-hover:scale-105" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-steel/90 to-transparent p-4">
                <div className="font-display font-semibold text-primary-foreground">{s.title}</div>
                <div className="text-xs text-primary-foreground/70">{s.short}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
