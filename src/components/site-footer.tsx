import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

import { bp } from "@/lib/utils";
import { contactDetails, navLinks, legalLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-zinc-200/70 bg-white/75">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src={bp("/assets/asr-logo-color.svg")}
            alt="Algarve SimRacing logo"
            width={150}
            height={42}
            className="h-auto w-[130px]"
          />
          <Image
            src={bp("/assets/asr-logo-white.svg")}
            alt="Algarve SimRacing logo"
            width={150}
            height={42}
            className="hidden h-auto w-[130px]"
          />
          <p className="mt-4 max-w-xs text-sm text-zinc-600">
            Portugal&apos;s Premier Sim Racing Experience. Where Virtual Meets Reality.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[#FF3131]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600">
            <li>{contactDetails.address}</li>
            <li>
              <a href={contactDetails.phoneHref} className="transition hover:text-[#FF3131]">
                {contactDetails.phone}
              </a>
            </li>
            <li>
              <a href={contactDetails.emailHref} className="transition hover:text-[#FF3131]">
                {contactDetails.email}
              </a>
            </li>
            <li>
              <a
                href={contactDetails.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[#FF3131]"
              >
                <Instagram size={16} />
                @algarvesimracing
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-4 py-4 text-xs text-zinc-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Algarve SimRacing. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#FF3131]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
