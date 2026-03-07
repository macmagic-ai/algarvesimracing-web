import type { Metadata } from "next";
import Image from "next/image";

import { MagicCard } from "@/components/magicui/magic-card";
import { bp } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the founders of Algarve SimRacing and learn the track-driven story behind the sim center in Portimão.",
};

const trackRecord = [
  "Founders Gabor and Jussi are lifelong petrolheads and sim racing enthusiasts",
  "Both keep race karts (KZ2 and Rotax DD2) at Kartódromo Internacional do Algarve",
  "Track presence almost every week throughout the year",
  "Regular participation in track days at Autódromo Internacional do Algarve",
  "Experience driving GT and Formula cars across Europe",
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-5xl font-bold sm:text-6xl">About Algarve SimRacing</h1>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <MagicCard className="flex flex-col gap-4">
          <Image
            src={bp("/assets/Gabor-and-Jussi-1-scaled-900x900-1.jpg")}
            alt="Gabor and Jussi, founders of Algarve SimRacing"
            width={900}
            height={900}
            className="w-full rounded-xl object-cover"
            priority
          />
          <p className="text-zinc-700">
            Founded by <strong>Gabor and Jussi</strong>, Algarve SimRacing came from real racing
            life, not just sim enthusiasm. They train, compete, and apply that same mentality to
            every session at ASR.
          </p>
        </MagicCard>

        <MagicCard className="flex flex-col justify-center gap-6">
          <blockquote className="font-heading text-3xl font-semibold leading-tight text-[#FF3131]">
            &quot;For us, sim racing isn&apos;t just a game - it&apos;s an essential tool.&quot;
          </blockquote>
          <p className="text-zinc-700">
            Their mission is simple: bring authentic, high-performance sim driving to the Algarve
            for drivers, enthusiasts, teams, and creators.
          </p>
        </MagicCard>
      </div>

      <section className="mt-12 grid gap-5 sm:grid-cols-2">
        <Image
          src={bp("/assets/002-1-scaled-900x900-1.jpg")}
          alt="Simulator interior scene"
          width={900}
          height={900}
          className="h-72 w-full rounded-xl object-cover"
        />
        <Image
          src={bp("/assets/005-1-scaled-900x900-1.jpg")}
          alt="Simulator session in progress"
          width={900}
          height={900}
          className="h-72 w-full rounded-xl object-cover"
        />
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Track Record</h2>
        <div className="mt-5 grid gap-3">
          {trackRecord.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-zinc-200/70 bg-white/70 px-4 py-3 text-sm text-zinc-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
