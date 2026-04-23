import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { bp } from "@/lib/utils";
import { navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--background)] mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src={bp("/assets/asr-logo-white.svg")}
              alt="Algarve SimRacing"
              width={120}
              height={45}
              className="h-10 w-auto hidden"
            />
            <Image
              src={bp("/assets/asr-logo-color.svg")}
              alt="Algarve SimRacing"
              width={120}
              height={45}
              className="h-10 w-auto block"
            />
            <p className="mt-3 text-sm text-zinc-500">
              Portugal's Premier Sim Racing Experience. Where Virtual Meets Reality.
            </p>
            <a
              href="https://www.instagram.com/algarvesimracing/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-[#FF3131] transition-colors"
            >
              <Instagram size={16} />
              @algarvesimracing
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-zinc-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-zinc-500 hover:text-[#FF3131] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-zinc-400 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-zinc-500">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#FF3131]" />
                Zona Industrial Coca Maravilhas Lote 15,<br />8500-483 Portimão, Portugal
              </li>
              <li>
                <a href="tel:+351915301376" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-[#FF3131] transition-colors">
                  <Phone size={15} className="shrink-0 text-[#FF3131]" />
                  +351 915 301 376
                </a>
              </li>
              <li>
                <a href="mailto:info@algarvesimracing.com" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-[#FF3131] transition-colors">
                  <Mail size={15} className="shrink-0 text-[#FF3131]" />
                  info@algarvesimracing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border-color)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <p>© 2025 Algarve SimRacing. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#FF3131] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#FF3131] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
