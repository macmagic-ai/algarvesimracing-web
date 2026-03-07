"use client";

import { useState } from "react";
import { X } from "lucide-react";

import type { DriverStory } from "@/data/driver-stories";
import { bp } from "@/lib/utils";

export function DriverStories({ stories }: { stories: DriverStory[] }) {
  const [activeStory, setActiveStory] = useState<DriverStory | null>(null);

  return (
    <>
      <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
        {stories.map((story) => (
          <button
            key={story.id}
            type="button"
            className="group min-w-[90px] text-left"
            onClick={() => setActiveStory(story)}
          >
            <div className="mx-auto h-[74px] w-[74px] rounded-full bg-gradient-to-tr from-[#FF3131] to-[#FF8A00] p-[2px]">
              <div className="h-full w-full overflow-hidden rounded-full border-2 border-white bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={bp(story.image)}
                  alt={`${story.name} driver story`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <p className="mt-2 truncate text-center text-xs font-semibold">{story.name}</p>
          </button>
        ))}
      </div>

      {activeStory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-zinc-950 text-white shadow-2xl">
            <button
              type="button"
              className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white"
              onClick={() => setActiveStory(null)}
              aria-label="Close story"
            >
              <X size={16} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bp(activeStory.image)}
              alt={`${activeStory.name} story`}
              className="h-[360px] w-full object-cover"
            />
            <div className="space-y-2 p-4">
              <p className="text-sm font-semibold">{activeStory.name}</p>
              <p className="text-sm text-zinc-200">{activeStory.quote}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
