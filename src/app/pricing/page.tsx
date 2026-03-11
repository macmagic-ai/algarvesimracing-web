import type { Metadata } from "next";

import { MagicCard } from "@/components/magicui/magic-card";
import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "View Algarve SimRacing packages, coaching add-ons, and send your booking request for sessions, events, or private training.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-5xl font-bold text-zinc-900 dark:text-white sm:text-6xl">
        Pricing & Booking
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Flexible plans for first-timers, regular drivers, and team events.
      </p>

      {/* Single package — two-column layout on desktop */}
      <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-stretch">
        {/* Price card */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#FF3131] bg-white dark:bg-zinc-900 p-8 ring-2 ring-[#FF3131]/20 shadow-sm lg:w-80 lg:shrink-0">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#FF3131]">Standard</h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              2 hours total · 1 × 2h session · up to 2 persons on 1 simulator
            </p>
            <div className="mt-6">
              <span className="font-heading text-7xl font-bold leading-none text-zinc-900 dark:text-white">
                €99
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Effective rate: ~€50/h
            </p>
          </div>
          <a
            href={contactDetails.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full rounded-full bg-[#FF3131] py-3 text-center text-sm font-bold text-white transition hover:bg-red-600 hover:scale-105 active:scale-95"
          >
            Book Now
          </a>
        </div>

        {/* Add-ons panel */}
        <MagicCard className="flex-1">
          <h2 className="font-heading text-2xl font-semibold text-[#FF3131]">Coaching & Pro Add-ons</h2>
          <ul className="mt-4 space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-[#FF3131] text-base">✦</span>
              <span>AI Coaching with real-time lap guidance — <strong>€15/hour</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-[#FF3131] text-base">✦</span>
              <span>Professional telemetry support for driver and engineer analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-[#FF3131] text-base">✦</span>
              <span>Human coaching available on request</span>
            </li>
          </ul>
        </MagicCard>
      </div>

      {/* Book CTA */}
      <section id="booking" className="mt-16 text-center">
        <h2 className="font-heading text-3xl font-semibold text-zinc-900 dark:text-white">Ready to Book?</h2>
        <p className="mt-4 mx-auto max-w-xl text-zinc-600 dark:text-zinc-400">
          We handle all bookings directly via WhatsApp to ensure you get the best rig and slot for your level.
        </p>
        <div className="mt-8">
          <a
            href={contactDetails.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#1ebe5a] hover:scale-105 active:scale-95"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.847L.057 23.943l6.265-1.643A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.661-.498-5.195-1.37l-.372-.219-3.859 1.012.996-3.747-.241-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Book via WhatsApp
          </a>
          <p className="mt-4 text-xs font-medium tracking-tight text-zinc-500 uppercase">
            Fast response · No account needed
          </p>
        </div>
      </section>
    </div>
  );
}
