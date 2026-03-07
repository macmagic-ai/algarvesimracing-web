"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { bp, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};

export function SiteNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-zinc-200/70 bg-white/85 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center" aria-label="Algarve SimRacing home">
          <Image
            src={bp("/assets/asr-logo-nav.svg")}
            alt="Algarve SimRacing logo"
            width={180}
            height={54}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative pb-2 text-zinc-700 transition hover:text-[#FF3131]",
                  active && "text-[#FF3131]",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#FF3131] transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center md:flex gap-4">
          <Button asChild>
            <Link href="/pricing#booking">Book Now</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300/70 text-zinc-700 md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        className={cn(
          "mx-auto max-w-6xl overflow-hidden transition-all duration-300 md:hidden",
          menuOpen ? "max-h-[500px] pb-4" : "max-h-0",
        )}
      >
        <div className="mx-4 rounded-2xl border border-zinc-200/70 bg-white/90 p-4 shadow-sm backdrop-blur sm:mx-6">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-2 py-1.5 text-sm text-zinc-700 transition hover:text-[#FF3131]",
                    active && "bg-[#FF3131]/10 text-[#FF3131]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild className="mt-2 w-full">
              <Link href="/pricing#booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
