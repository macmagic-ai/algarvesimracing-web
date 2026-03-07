import type { Metadata } from "next";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Algarve SimRacing in Portimão for bookings, private events, coaching sessions, and simulator availability.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-5xl font-bold sm:text-6xl">Contact</h1>
      <p className="mt-4 max-w-3xl text-zinc-700">
        Reach out for bookings, private events, and training sessions.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Contact Options */}
        <div className="space-y-4 rounded-2xl border border-zinc-200/70 bg-white/75 p-6">
          <h2 className="font-heading text-2xl font-semibold">Get in Touch</h2>
          
          <a 
            href={contactDetails.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-[#25D366] p-4 text-white transition hover:bg-[#128C7E]"
          >
            <MessageCircle size={24} />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-sm opacity-90">Quick response for bookings</p>
            </div>
          </a>

          <a 
            href={contactDetails.emailHref}
            className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-[#FF3131]"
          >
            <Mail size={24} className="text-[#FF3131]" />
            <div>
              <p className="font-semibold text-zinc-900">Email</p>
              <p className="text-sm text-zinc-600">{contactDetails.email}</p>
            </div>
          </a>

          <a 
            href={contactDetails.phoneHref}
            className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-[#FF3131]"
          >
            <Phone size={24} className="text-[#FF3131]" />
            <div>
              <p className="font-semibold text-zinc-900">Phone</p>
              <p className="text-sm text-zinc-600">{contactDetails.phone}</p>
            </div>
          </a>

          <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4">
            <MapPin size={24} className="text-[#FF3131]" />
            <div>
              <p className="font-semibold text-zinc-900">Address</p>
              <p className="text-sm text-zinc-600">{contactDetails.address}</p>
            </div>
          </div>

          <a 
            href={contactDetails.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-[#FF3131]"
          >
            <Instagram size={24} className="text-[#FF3131]" />
            <div>
              <p className="font-semibold text-zinc-900">Instagram</p>
              <p className="text-sm text-zinc-600">@algarvesimracing</p>
            </div>
          </a>
        </div>

        {/* Map */}
        <div className="rounded-2xl border border-zinc-200/70 bg-white/75 p-5">
          <h2 className="font-heading text-2xl font-semibold mb-4">Location</h2>
          <iframe
            title="Algarve SimRacing map"
            src="https://www.google.com/maps?q=Zona+Industrial+Coca+Maravilhas+Lote+15,+8500-483+Portimao,+Portugal&output=embed"
            className="h-96 w-full rounded-xl border border-zinc-200/70"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
