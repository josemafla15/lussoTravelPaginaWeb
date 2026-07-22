import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/config";

export default function WhatsAppFlotante() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hola, quiero información sobre un viaje"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle size={28} />
    </a>
  );
}