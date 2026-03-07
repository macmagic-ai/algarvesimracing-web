import type { Metadata } from "next";

import { DriverStories } from "@/components/driver-stories";
import { instagramPosts } from "@/data/instagram";
import { driverStories } from "@/data/driver-stories";
import { bp } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Follow Algarve SimRacing community highlights, latest Instagram posts, and driver story moments from sessions and events.",
};

export default function CommunityPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-5xl font-bold sm:text-6xl">Community</h1>
      <p className="mt-4 max-w-3xl text-zinc-700">
        Live moments from sessions, events, and driver progress at Algarve SimRacing.
      </p>

      <section className="mt-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Latest Drivers</h2>
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Stories
          </span>
        </div>
        <DriverStories stories={driverStories} />
      </section>

      <section className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Latest Instagram Posts</h2>
          <a
            href="https://www.instagram.com/algarvesimracing/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#FF3131] transition hover:text-[#cc0000]"
          >
            Follow @algarvesimracing
          </a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {instagramPosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80"
            >
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={bp(post.image)}
                  alt={post.caption}
                  className="h-64 w-full object-cover"
                />
              </a>
              <div className="space-y-2 p-4">
                <p className="line-clamp-3 text-sm text-zinc-700">{post.caption}</p>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  {post.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
