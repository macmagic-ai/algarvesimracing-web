import type { Metadata } from "next";
import Image from "next/image";

import { MagicCard } from "@/components/magicui/magic-card";
import { bp } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Simulators",
  description:
    "Detailed simulator specs for both Algarve SimRacing rigs: Triple 42\" OLED setup and Samsung G9/VR setup with Simucube hardware.",
};

const gallery = [
  { src: "/assets/11-1536x1152-1.jpg", alt: "Simulator triple OLED setup" },
  { src: "/assets/12-1024x768-1.jpg", alt: "Simulator pedal and wheel close-up" },
  { src: "/assets/13-1024x714-1.jpg", alt: "Simulator cockpit angle" },
  { src: "/assets/13-768x512-1.jpg", alt: "Simulator side profile" },
  { src: "/assets/15.jpg", alt: "Venue action shot" },
  { src: "/assets/17-768x512-1.jpg", alt: "Racing session photo" },
  { src: "/assets/002-1-scaled-900x900-1.jpg", alt: "Simulator interior wide shot" },
  { src: "/assets/005-1-scaled-900x900-1.jpg", alt: "Secondary simulator action" },
];

export default function SimulatorsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-5xl font-bold sm:text-6xl">Simulators</h1>
      <p className="mt-4 max-w-3xl text-zinc-700">
        Two elite rigs engineered for immersion, precision, and real driver development.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <MagicCard className="flex flex-col gap-5">
          <Image
            src={bp("/assets/11-1536x1152-1.jpg")}
            alt="Simulator 1 triple OLED setup"
            width={1200}
            height={900}
            className="w-full rounded-xl object-cover"
          />
          <h2 className="font-heading text-3xl font-semibold text-[#FF3131]">
            Simulator 1: Triple Screen 42&quot; OLED
          </h2>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>Sim-Lab P1-X frame + Speed1 racing seat</li>
            <li>Simucube 2 Pro direct drive wheelbase</li>
            <li>Simucube Active Pedal brake + Simucube throttle</li>
            <li>Archer Artura GT-style steering wheel</li>
            <li>Triple 42&quot; ASUS ROG Swift OLED monitors</li>
            <li>NVIDIA GeForce RTX 5090-powered custom PC</li>
            <li>Live-stream and podcast studio integration</li>
          </ul>
        </MagicCard>

        <MagicCard className="flex flex-col gap-5">
          <Image
            src={bp("/assets/15.jpg")}
            alt="Simulator 2 ultrawide and VR setup"
            width={1200}
            height={900}
            className="w-full rounded-xl object-cover"
          />
          <h2 className="font-heading text-3xl font-semibold text-[#FF3131]">
            Simulator 2: Samsung G9 49&quot; or VR
          </h2>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>Custom-built frame + professional race seat</li>
            <li>Simucube 2 Pro direct drive</li>
            <li>Simucube Active pedal brake + Simucube throttle</li>
            <li>Archer Artura GT-style steering wheel</li>
            <li>Samsung Odyssey G9 49&quot; ultrawide curved monitor</li>
            <li>Meta Quest 3 VR (512 GB) option</li>
            <li>Qubic System QS-BT 1 seatbelt tensioner</li>
          </ul>
        </MagicCard>
      </div>

      <section className="mt-14">
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Full Gallery</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <Image
              key={item.src}
              src={bp(item.src)}
              alt={item.alt}
              width={900}
              height={700}
              className="h-56 w-full rounded-xl object-cover"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
