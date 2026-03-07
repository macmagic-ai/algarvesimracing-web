"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { driverStories } from "@/data/instagram";
import { bp } from "@/lib/utils";

export function DriverStories() {
  const [active, setActive] = useState<string | null>(null);
  const story = driverStories.find((s) => s.id === active);

  return (
    <div>
      {/* Horizontal scroll strip */}
      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none">
        {driverStories.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className="flex flex-col items-center gap-2 shrink-0 group"
          >
            {/* Ring + circular image */}
            <div className="rounded-full p-[3px] bg-gradient-to-br from-[#FF3131] to-[#ff8a00]">
              <div className="rounded-full overflow-hidden w-16 h-16 border-2 border-[var(--background)]">
                <Image
                  src={bp(s.image)}
                  alt={s.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-xs font-medium text-zinc-600 max-w-[72px] truncate">
              {s.name}
            </span>
          </button>
        ))}
      </div>

      {/* Modal / lightbox */}
      {story && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-[var(--background)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Story image */}
            <Image
              src={bp(story.image)}
              alt={story.name}
              width={900}
              height={600}
              className="w-full h-64 object-cover"
            />
            {/* Overlay top bar */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <div className="rounded-full p-[2px] bg-gradient-to-br from-[#FF3131] to-[#ff8a00]">
                <div className="rounded-full w-9 h-9 overflow-hidden border-2 border-white">
                  <Image src={bp(story.image)} alt={story.name} width={36} height={36} className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-white drop-shadow">{story.name}</p>
                <p className="text-xs text-white/70 drop-shadow">{story.date}</p>
              </div>
            </div>
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 rounded-full bg-black/40 p-1.5 text-white hover:bg-black/60"
            >
              <X size={16} />
            </button>
            {/* Quote */}
            <div className="p-5">
              <p className="text-base text-zinc-700 leading-relaxed">"{story.quote}"</p>
              <p className="mt-3 text-xs text-zinc-400">— {story.name}, Algarve SimRacing</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
