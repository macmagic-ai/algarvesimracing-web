"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { bp } from "@/lib/utils";
import { ImageModal } from "@/components/image-modal";
import { useState } from "react";

const photos = [
  { src: "/assets/008-900x900-1.jpg",              alt: "Simulator cockpit — immersive driver view",             w: 900, h: 900,  span: "col-span-2 row-span-2" },
  { src: "/assets/11-1536x1152-1.jpg",             alt: "Simulator 1 — triple OLED blue LED room",              w: 900, h: 675,  span: "" },
  { src: "/assets/15.jpg",                         alt: "Simulator 2 — green hex panels, triple screens",       w: 900, h: 675,  span: "" },
  { src: "/assets/13-1024x714-1.jpg",              alt: "Cockpit detail — McLaren GT steering wheel",           w: 900, h: 628,  span: "col-span-2" },
  { src: "/assets/12-1024x768-1.jpg",              alt: "Driver in action at the simulator",                    w: 900, h: 675,  span: "" },
  { src: "/assets/Gabor-and-Jussi-1-scaled-900x900-1.jpg", alt: "Founders Gábor and Jussi at the kartodromo", w: 900, h: 900,  span: "" },
  { src: "/assets/002-1-scaled-900x900-1.jpg",     alt: "KZ2 karts at Kartódromo Internacional do Algarve",    w: 900, h: 900,  span: "" },
  { src: "/assets/005-1-scaled-900x900-1.jpg",     alt: "Race car in the garage — real motorsport",            w: 900, h: 900,  span: "" },
  { src: "/assets/17-768x512-1.jpg",               alt: "Track action at the circuit",                         w: 768, h: 512,  span: "col-span-2" },
  { src: "/assets/13-768x512-1.jpg",               alt: "Sim cockpit wide angle",                              w: 768, h: 512,  span: "" },
];

const trackPhotos = [
  { src: "/assets/002-1-scaled-900x900-1.jpg", alt: "Karts at Kartódromo Internacional do Algarve" },
  { src: "/assets/005-1-scaled-900x900-1.jpg", alt: "Race car in garage — GT track day" },
  { src: "/assets/17-768x512-1.jpg",           alt: "Racing action on circuit" },
];

export default function GalleryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState<{ src: string; alt: string }[]>([]);

  const openModal = (images: { src: string; alt: string }[], index: number) => {
    setModalImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      {/* Header */}
      <div className="flex items-end justify-between gap-4 flex-wrap mb-10">
        <div>
          <h1 className="font-heading text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl">Gallery</h1>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-xl">
            Inside the rigs, on the track, and behind the scenes at Algarve SimRacing.
          </p>
        </div>
        <a
          href="https://www.instagram.com/algarvesimracing/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-white/15 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:border-[#FF3131] hover:text-[#FF3131] transition-colors"
        >
          <Instagram size={15} />
          More on Instagram
        </a>
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[320px]">
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => openModal(photos.map(photo => ({ src: photo.src, alt: photo.alt })), i)}
            className={`relative overflow-hidden rounded-xl bg-zinc-100 dark:bg-white/5 ${p.span} cursor-pointer group`}
          >
            <Image
              src={bp(p.src)}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {/* Track photos section */}
      <div className="mt-16">
        <h2 className="font-heading text-2xl font-bold text-zinc-900 dark:text-white mb-6">Real Racing</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-2xl">
          Behind every great sim setup is real track experience. Founders Gábor and Jussi race competitively at Kartódromo Internacional do Algarve and on circuits across Europe.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {trackPhotos.map((p, i) => (
            <button
              key={i}
              onClick={() => openModal(trackPhotos, i)}
              className="rounded-xl overflow-hidden aspect-[16/10] cursor-pointer group"
            >
              <Image
                src={bp(p.src)}
                alt={p.alt}
                width={600}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <p className="text-zinc-500 dark:text-zinc-400 mb-4">Want to be in our gallery? Come race.</p>
        <Link
          href="/contact"
          className="inline-flex rounded-lg bg-[#FF3131] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#cc0000] transition-colors"
        >
          Book a Session →
        </Link>
      </div>

      {/* Image Modal */}
      <ImageModal
        images={modalImages}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
