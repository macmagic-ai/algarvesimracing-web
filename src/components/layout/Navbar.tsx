"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { bp } from "@/lib/utils";

const links = [
  { href: "/algarvesimracing-web/", label: "Home" },
  { href: "/algarvesimracing-web/simulators", label: "Simulators" },
  { href: "/algarvesimracing-web/pricing", label: "Pricing" },
  { href: "/algarvesimracing-web/community", label: "Community" },
  { href: "/algarvesimracing-web/about", label: "About" },
  { href: "/algarvesimracing-web/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || (href !== "/algarvesimracing-web/" && pathname.startsWith(href));

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-[var(--border-color)] bg-[var(--background)]/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link href="/algarvesimracing-web/" className="flex items-center">
          <Image
            src={bp("/assets/ASR_branco-1.png")}
            alt="Algarve SimRacing"
            width={108}
            height={40}
            className="h-10 w-auto hidden"
            priority
          />
          <Image
            src={bp("/assets/ASR_cor-1.png")}
            alt="Algarve SimRacing"
            width={108}
            height={40}
            className="h-10 w-auto block"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-[#FF3131] ${
                  isActive(l.href)
                    ? "text-[#FF3131] border-b-2 border-[#FF3131] pb-0.5"
                    : "text-zinc-600"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/algarvesimracing-web/contact"
            className="hidden sm:inline-flex items-center rounded-lg bg-[#FF3131] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#cc0000]"
          >
            Book Now
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-zinc-600"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--background)] px-4 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block text-base font-medium transition-colors hover:text-[#FF3131] ${
                    isActive(l.href) ? "text-[#FF3131]" : "text-zinc-600"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/algarvesimracing-web/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-lg bg-[#FF3131] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#cc0000]"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
