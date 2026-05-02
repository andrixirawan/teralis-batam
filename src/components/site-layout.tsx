import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { FloatingWhatsApp } from "./floating-whatsapp";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
