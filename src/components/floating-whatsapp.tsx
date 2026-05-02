import { MessageCircle } from "lucide-react";
import { LINKS } from "@/lib/business";

export function FloatingWhatsApp() {
  return (
    <a
      href={LINKS.whatsappQuote}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-spark transition hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}
