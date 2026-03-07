import Image from "next/image";
import Link from "next/link";

import { bp } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { MagicCard } from "@/components/magicui/magic-card";
import { Meteors } from "@/components/magicui/meteors";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#simulators", label: "Simulators" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    title: "Professional Simulator Rentals",
    text: "Book world-class simulator time by the hour on elite high-performance rigs.",
  },
  {
    title: "Streaming & Podcast Integration",
    text: "Our flagship rig is studio-ready for livestreaming and podcast production.",
  },
  {
    title: "Group Bookings & Private Events",
    text: "Host birthdays, team-building sessions, and private race competitions.",
  },
  {
    title: "iRacing & Assetto Corsa",
    text: "Log in with your own account and run GT-focused setups your way.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Algarve SimRacing",
      url: "https://macmagic-ai.github.io/algarvesimracing-web",
      image:
        "https://macmagic-ai.github.io/algarvesimracing-web/assets/008-900x900-1.jpg",
      telephone: "+351965479298",
      description:
        "Professional sim racing center in Portimao near Autodromo Internacional do Algarve.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Portimao",
        addressCountry: "PT",
      },
      sameAs: [
        "https://www.instagram.com/algarvesimracing/",
        "https://www.facebook.com/",
        "https://www.youtube.com/",
      ],
    },
    {
      "@type": "SportsActivityLocation",
      name: "Algarve SimRacing",
      description:
        "Simulator training, racing events and performance coaching for GT and Formula drivers.",
      telephone: "+351965479298",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Portimao",
        addressCountry: "PT",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl dark:bg-black/50 dark:border-white/10 light:bg-white/80 light:border-black/10">
        <nav
          className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
          aria-label="Main navigation"
        >
          <Link href="#hero" className="flex items-center gap-2">
            <Image
              src={bp("/assets/ASR_branco-1.png")}
              alt="Algarve SimRacing logo"
              width={124}
              height={40}
              className="h-auto w-[108px] sm:w-[124px]"
              priority
            />
          </Link>
          <div className="hidden items-center gap-5 text-sm md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#FF3131] dark:text-white/85 text-black/80">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="outline">
              <Link href="#contact">Book Now</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="relative flex min-h-screen items-center">
          <div className="hero-grid absolute inset-0" />
          <Meteors number={24} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,49,49,0.25),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(255,138,0,0.2),transparent_55%)]" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div className="relative z-10">
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70 dark:text-white/70 light:text-black/60">Portimao, Portugal</p>
              <h1 className="font-heading text-5xl font-bold leading-[0.95] sm:text-6xl md:text-7xl">
                <AnimatedGradientText>
                  Portugal&apos;s Premier Sim Racing Experience
                </AnimatedGradientText>
              </h1>
              <p className="mt-6 max-w-xl text-base text-white/80 dark:text-white/80 light:text-black/70 sm:text-lg">
                Where Virtual Meets Reality. Professional racing simulators, elite hardware, and real driver feedback near Autodromo Internacional do Algarve.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ShimmerButton href="#contact">Book Now</ShimmerButton>
                <Button asChild variant="outline" size="lg">
                  <Link href="#simulators">Explore Rigs</Link>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <p className="font-heading text-3xl font-bold text-[#FF3131]">
                    <NumberTicker value={2} suffix="+" />
                  </p>
                  <p className="text-sm text-white/70 dark:text-white/70 light:text-black/60">Professional Simulators</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-[#FF3131]">
                    <NumberTicker value={42} suffix={'"'} />
                  </p>
                  <p className="text-sm text-white/70 dark:text-white/70 light:text-black/60">Triple OLED Display</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-[#FF3131]">
                    <NumberTicker value={5090} />
                  </p>
                  <p className="text-sm text-white/70 dark:text-white/70 light:text-black/60">RTX-Powered Rig</p>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <MagicCard className="p-2">
                <Image
                  src={bp("/assets/008-900x900-1.jpg")}
                  alt="Algarve SimRacing action hero simulator shot"
                  width={900}
                  height={900}
                  priority
                  className="h-auto w-full rounded-xl object-cover"
                />
              </MagicCard>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-heading text-4xl font-bold sm:text-5xl">Services</h2>
          <p className="mt-3 max-w-2xl dark:text-white/70 text-black/60">
            Built for racers, creators, and teams that want serious sim performance.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <MagicCard key={service.title}>
                <h3 className="font-heading text-2xl font-semibold text-[#ff6d6d]">{service.title}</h3>
                <p className="mt-3 text-white/80 dark:text-white/80 light:text-black/70">{service.text}</p>
              </MagicCard>
            ))}
          </div>
        </section>

        <section id="simulators" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-heading text-4xl font-bold sm:text-5xl">Simulators</h2>
          <p className="mt-3 max-w-2xl dark:text-white/70 text-black/60">
            Two elite setups engineered for immersion, precision, and speed.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <MagicCard className="flex flex-col gap-4">
              <Image
                src={bp("/assets/11-1536x1152-1.jpg")}
                alt="Algarve SimRacing Simulator 1 triple OLED setup"
                width={900}
                height={900}
                className="w-full rounded-xl object-cover"
              />
              <h3 className="font-heading text-2xl font-semibold text-[#ff6d6d]">Simulator 1 — Triple 42&quot; OLED</h3>
              <ul className="space-y-1 text-sm text-white/80 dark:text-white/80 light:text-black/70 dark:text-white/80 dark:text-white/80 light:text-black/70">
                <li>🏎 Sim-Lab P1-X frame + Speed1 racing seat</li>
                <li>🎮 Simucube 2 Pro direct drive + Archer Artura GT wheel</li>
                <li>🦶 Simucube Active Pedal brake + Simucube throttle</li>
                <li>🖥 Triple 42&quot; ASUS ROG Swift OLED monitors</li>
                <li>⚡ NVIDIA GeForce RTX 5090-powered custom PC</li>
                <li>📹 Livestream &amp; podcast studio integration</li>
              </ul>
            </MagicCard>
            <MagicCard className="flex flex-col gap-4">
              <Image
                src={bp("/assets/15.jpg")}
                alt="Algarve SimRacing Simulator 2 ultrawide setup"
                width={900}
                height={900}
                className="w-full rounded-xl object-cover"
              />
              <h3 className="font-heading text-2xl font-semibold text-[#ff6d6d]">Simulator 2 — Ultrawide 49&quot; or VR</h3>
              <ul className="space-y-1 text-sm text-white/80 dark:text-white/80 light:text-black/70 dark:text-white/80 dark:text-white/80 light:text-black/70">
                <li>🏎 Custom frame + professional race seat</li>
                <li>🎮 Simucube 2 Pro direct drive + Archer Artura GT wheel</li>
                <li>🦶 Simucube Active Pedal brake + Simucube throttle</li>
                <li>🖥 Samsung Odyssey G9 49&quot; ultrawide curved monitor</li>
                <li>🥽 Option: Meta Quest 3 VR (512 GB)</li>
                <li>🔒 Qubic System QS-BT 1 seatbelt tensioner</li>
              </ul>
            </MagicCard>
          </div>
        </section>

        <section id="pricing" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-heading text-4xl font-bold sm:text-5xl">Pricing</h2>
          <p className="mt-3 max-w-2xl dark:text-white/70 text-black/60">
            Flexible packages for casual drivers and serious training blocks.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-[#ff6d6d]">Standard</CardTitle>
                <CardDescription>2 hours total, max 2 persons, 1 sim</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-heading text-5xl font-bold">EUR99</p>
                <p className="mt-2 text-sm text-white/70 dark:text-white/70 light:text-black/60">EUR49.50 per hour</p>
              </CardContent>
            </Card>
            <Card className="relative border-[#FF3131]/40">
              <CardHeader>
                <CardTitle className="font-heading text-[#FF3131]">Intermediate</CardTitle>
                <CardDescription>4 hours total as 2 x 2h sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-heading text-5xl font-bold">EUR160</p>
                <p className="mt-2 text-sm text-white/70 dark:text-white/70 light:text-black/60">EUR40 per hour</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-[#ff8a00]">Pro</CardTitle>
                <CardDescription>8 hours total as 4 x 2h sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-heading text-5xl font-bold">EUR280</p>
                <p className="mt-2 text-sm text-white/70 dark:text-white/70 light:text-black/60">EUR35 per hour</p>
              </CardContent>
            </Card>
          </div>
          <MagicCard className="mt-6">
            <h3 className="font-heading text-2xl font-semibold text-[#ff6d6d]">Coaching Add-ons</h3>
            <p className="mt-3 text-white/80 dark:text-white/80 light:text-black/70">
              AI Coaching with real-time lap feedback: EUR15/hour. Professional telemetry and human coaching available on request.
            </p>
          </MagicCard>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-heading text-4xl font-bold sm:text-5xl">About</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <MagicCard className="flex flex-col gap-4">
              <Image
                src={bp("/assets/Gabor-and-Jussi-1-scaled-900x900-1.jpg")}
                alt="Gabor and Jussi, founders of Algarve SimRacing"
                width={900}
                height={900}
                className="w-full rounded-xl object-cover"
              />
              <p className="text-white/85 dark:text-white/85 light:text-black/80">
                Founded by <strong>Gábor and Jussi</strong> — lifelong petrolheads, passionate racers, and sim racing enthusiasts. They keep their own race go-karts (KZ2 and Rotax DD2) at the Kartódromo Internacional do Algarve and hit the track almost every week.
              </p>
              <p className="text-white/80 dark:text-white/80 light:text-black/70">
                Regularly competing in track days at the Autódromo Internacional do Algarve and circuits across Europe, in both GT and Formula cars.
              </p>
            </MagicCard>
            <MagicCard className="flex flex-col justify-center gap-6">
              <blockquote className="font-heading text-3xl font-semibold leading-tight text-[#ff8a00]">
                &quot;For us, sim racing isn&apos;t just a game — it&apos;s an essential tool.&quot;
              </blockquote>
              <p className="text-white/70 dark:text-white/70 light:text-black/60 italic">— Gábor and Jussi, Algarve SimRacing</p>
            </MagicCard>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <MagicCard className="relative overflow-hidden">
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#FF3131]/30 blur-3xl" />
            <h2 className="relative z-10 font-heading text-4xl font-bold sm:text-5xl">Contact & Booking</h2>
            <p className="relative z-10 mt-3 max-w-2xl text-white/80 dark:text-white/80 light:text-black/70">
              Reserve your session, event, or coaching slot now.
            </p>
            <div className="relative z-10 mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="tel:+351965479298">Call +351 965 479 298</a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://wa.me/351965479298"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://www.instagram.com/algarvesimracing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </Button>
            </div>
          </MagicCard>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-white/55 dark:text-white/55 light:text-black/50 sm:px-6">
        Algarve SimRacing, Portimao, Portugal.
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
