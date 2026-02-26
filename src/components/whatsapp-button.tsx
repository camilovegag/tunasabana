"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/tracking";

export default function WhatsappButton() {
  return (
    <Link
      href={siteConfig.links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#40C351] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contactar por WhatsApp"
      onClick={() =>
        trackEvent("whatsapp_click", { method: "floating_button" })
      }
    >
      <Image
        src="/icons/whatsapp.svg"
        alt="Whatsapp icon"
        height={32}
        width={32}
      />
    </Link>
  );
}
