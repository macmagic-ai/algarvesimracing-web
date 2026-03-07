"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need any experience to use the simulators?",
    a: "Not at all. Our rigs are perfect for complete beginners and seasoned sim racers alike. We'll get you set up and comfortable before your session starts. The hardware scales with your level.",
  },
  {
    q: "What sim racing titles can I run?",
    a: "Both simulators support iRacing, Assetto Corsa Competizione, rFactor 2, and more. For iRacing you'll need your own account — you log in and race your own career. We can recommend other titles based on what you want to achieve.",
  },
  {
    q: "Can I come with a friend?",
    a: "Yes. Each package allows up to 2 persons per simulator. You can take turns or use one simulator each if you book a double session.",
  },
  {
    q: "What is Simucube 2 Pro force feedback?",
    a: "Simucube 2 Pro is one of the most advanced direct-drive wheelbases available. It delivers precise, high-torque steering feel with no gear slop — essentially what professional sim drivers and real race engineers use for car development.",
  },
  {
    q: "What is the difference between Simulator 1 and Simulator 2?",
    a: "Sim 1 uses a triple 42\" ASUS ROG Swift OLED setup — three screens wrap your peripheral vision. Sim 2 gives you a choice: a massive 49\" Samsung Odyssey G9 ultrawide curved monitor, or full VR with the Meta Quest 3 (512 GB). Both have Simucube 2 Pro wheelbase and Archer Artura GT steering wheel.",
  },
  {
    q: "What is AI Coaching?",
    a: "Our AI coaching add-on (€15/h) gives you real-time lap-by-lap voice guidance — identifying where you're losing time, improving braking points, and optimising your racing line. It's like having a co-driver coach in your ear every lap.",
  },
  {
    q: "Can I use professional telemetry data?",
    a: "Yes. Professional telemetry export is available on request and is ideal if you're a driver or engineer who wants to analyse brake traces, throttle application, steering inputs, and g-forces.",
  },
  {
    q: "Can I book for a group or corporate event?",
    a: "Absolutely. We regularly host birthday parties, team-building sessions, and corporate events. Get in touch to discuss timing, number of participants, and whether you'd like a custom competition format.",
  },
  {
    q: "How do I cancel or reschedule?",
    a: "One-time sessions: full refund if cancelled more than 24 hours before the session. No-shows or last-minute cancellations (under 24h): no refund. In the rare case of a technical fault on our side, we'll offer a reschedule or full refund.",
  },
  {
    q: "Where are you located?",
    a: "We're at Zona Industrial Coca Maravilhas Lote 15, 8500-483 Portimão — about 5 minutes from Autódromo Internacional do Algarve. Contact us and we'll send exact directions.",
  },
  {
    q: "Can I livestream my session?",
    a: "Yes! Simulator 1 has a full live-stream and podcast studio integration built in. Perfect for content creators who want to share their racing experience live.",
  },
  {
    q: "Do you offer gift vouchers?",
    a: "Yes. Contact us directly at info@algarvesimracing.com or via WhatsApp and we'll arrange a voucher for any package.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 dark:border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-zinc-900 dark:text-white">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#FF3131] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl">FAQ</h1>
      <p className="mt-4 text-zinc-500 dark:text-zinc-400">
        Everything you need to know before booking your session at Algarve SimRacing.
      </p>

      <div className="mt-10">
        {faqs.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-[#FF3131] p-8 text-white text-center">
        <h2 className="font-heading text-2xl font-bold">Still have questions?</h2>
        <p className="mt-2 text-white/80">We&apos;re happy to help via WhatsApp or email.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/351965479298"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-[#FF3131] hover:bg-white/90 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="mailto:info@algarvesimracing.com"
            className="rounded-lg border border-white/40 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>

      <p className="mt-8 text-center">
        <Link href="/pricing" className="text-sm font-semibold text-[#FF3131] hover:underline">
          View pricing & packages →
        </Link>
      </p>
    </div>
  );
}
