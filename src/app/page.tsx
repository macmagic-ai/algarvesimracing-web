"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bp } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ImageModal } from "@/components/image-modal";
import { useState } from "react";

const services = [
  {
    title: "Simulator Rentals",
    desc: "Book by the hour on world-class rigs with Simucube 2 Pro force feedback and RTX 5090 graphics.",
    icon: "🏎️",
    img: "/assets/11-1536x1152-1.jpg",
    alt: "Sim 1 blue LED room",
  },
  {
    title: "Streaming & Podcast",
    desc: "Sim 1 integrates a full live-stream and podcast studio. Perfect for content creators.",
    icon: "🎙️",
    img: "/assets/13-1024x714-1.jpg",
    alt: "Cockpit McLaren wheel",
  },
  {
    title: "Private Events",
    desc: "Birthdays, team-building, corporate competitions. We handle everything end to end.",
    icon: "🎉",
    img: "/assets/15.jpg",
    alt: "Sim 2 green hex room",
  },
  {
    title: "iRacing & Assetto Corsa",
    desc: "Log into your own account. Run GT or open-wheel setups on pro hardware.",
    icon: "🕹️",
    img: "/assets/12-1024x768-1.jpg",
    alt: "Person using simulator",
  },
];

const stripPhotos = [
  { img: "/assets/13-1024x714-1.jpg", alt: "McLaren wheel cockpit" },
  { img: "/assets/12-1024x768-1.jpg", alt: "Driver in action" },
  { img: "/assets/Gabor-and-Jussi-1-scaled-900x900-1.jpg", alt: "Founders Gábor and Jussi" },
  { img: "/assets/002-1-scaled-900x900-1.jpg", alt: "Karting at the track" },
  { img: "/assets/005-1-scaled-900x900-1.jpg", alt: "Race car at the circuit" },
  { img: "/assets/17-768x512-1.jpg", alt: "Racing action" },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % stripPhotos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + stripPhotos.length) % stripPhotos.length);
  };

  return (
    <div className="relative overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,49,49,0.13),transparent_45%)]" />
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">

          {/* Left: copy */}
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3131]">
              Portimão, Portugal
            </p>
            <h1 className="mt-4 font-heading text-5xl font-bold leading-[1.0] text-zinc-900 dark:text-white sm:text-6xl md:text-7xl">
              Portugal&apos;s Premier<br />
              <AnimatedGradientText>Sim Racing</AnimatedGradientText><br />
              Experience
            </h1>
            <p className="mt-5 max-w-lg text-base text-zinc-600 dark:text-zinc-300 sm:text-lg">
              Where Virtual Meets Reality. Pro-grade simulators, elite hardware, and real driver coaching — 5 minutes from Autódromo Internacional do Algarve.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/pricing" className="rounded-lg bg-[#FF3131] px-6 py-3 text-sm font-semibold text-white hover:bg-[#cc0000] transition-colors">
                Book a Session
              </Link>
              <Link href="/simulators" className="rounded-lg border border-zinc-300 dark:border-white/20 px-6 py-3 text-sm font-semibold text-zinc-700 dark:text-white/80 hover:border-[#FF3131] hover:text-[#FF3131] transition-colors">
                View Simulators
              </Link>
            </div>
            {/* Stats row */}
            <div className="mt-10 flex flex-wrap gap-8 border-t border-zinc-200 dark:border-white/10 pt-6">
              {[
                { v: "2", l: "Pro simulators" },
                { v: "RTX 5090", l: "GPU power" },
                { v: "€35/h", l: "From (Pro package)" },
                { v: "5 min", l: "From Autódromo" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-heading text-xl font-bold text-[#FF3131]">{s.v}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo mosaic */}
          <div className="relative z-10 grid grid-cols-2 gap-3">
            <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/9]">
              <Image
                src={bp("/assets/008-900x900-1.jpg")}
                alt="Simulator cockpit view"
                width={900}
                height={506}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square">
              <Image
                src={bp("/assets/11-1536x1152-1.jpg")}
                alt="Simulator 1 blue LED room"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square">
              <Image
                src={bp("/assets/15.jpg")}
                alt="Simulator 2 green hex room"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services with images ───────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">What We Offer</h2>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">Built for racers, creators, and teams.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-zinc-200 dark:border-white/10 overflow-hidden bg-white dark:bg-white/[0.03] hover:border-[#FF3131]/50 transition-colors group">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={bp(s.img)}
                  alt={s.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-lg">{s.icon}</p>
                <h3 className="mt-1 font-heading font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Full-width photo strip ─────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-4">
        <div className="flex gap-3 overflow-x-auto scrollbar-none pb-2">
          {stripPhotos.map((p, i) => (
            <button
              key={i}
              onClick={() => openModal(i)}
              className="shrink-0 w-56 rounded-xl overflow-hidden aspect-[3/2] cursor-pointer group"
            >
              <Image
                src={bp(p.img)}
                alt={p.alt}
                width={400}
                height={267}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </section>

      {/* ── Sim preview cards ──────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">The Simulators</h2>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">Two elite rigs. Serious hardware.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Link href="/simulators" className="group block rounded-2xl overflow-hidden relative">
            <Image src={bp("/assets/11-1536x1152-1.jpg")} alt="Simulator 1 – Triple OLED" width={800} height={500} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="font-heading text-xl font-bold text-white">Simulator 1</p>
              <p className="text-sm text-white/70">Triple 42″ OLED · Sim-Lab · RTX 5090</p>
            </div>
          </Link>
          <Link href="/simulators" className="group block rounded-2xl overflow-hidden relative">
            <Image src={bp("/assets/15.jpg")} alt="Simulator 2 – Ultrawide / VR" width={800} height={500} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="font-heading text-xl font-bold text-white">Simulator 2</p>
              <p className="text-sm text-white/70">Samsung G9 49″ · Simucube 2 Pro · Meta Quest 3 VR</p>
            </div>
          </Link>
        </div>
        <p className="mt-5 text-center">
          <Link href="/simulators" className="text-sm font-semibold text-[#FF3131] hover:underline">
            Full specs & gallery →
          </Link>
        </p>
      </section>

      {/* ── CTA banner ─────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl bg-[#FF3131] px-8 py-10 sm:px-12 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Ready to race?</h2>
            <p className="mt-1 text-white/80">Sessions from €49.50/h. No licence needed.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/pricing" className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#FF3131] hover:bg-white/90 transition-colors">
              See Pricing
            </Link>
            <Link href="/contact" className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        images={stripPhotos.map(p => ({ src: p.img, alt: p.alt }))}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
