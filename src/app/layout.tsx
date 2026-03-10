import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";

const headingFont = Rajdhani({
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://macmagic-ai.github.io"),
  title: {
    default: "Algarve SimRacing | Portugal's Premier Sim Racing Experience",
    template: "%s | Algarve SimRacing",
  },
  description:
    "Professional simulator rentals, coaching, streaming-ready rigs, events, and driver-focused training in Portimão.",
  applicationName: "Algarve SimRacing",
  alternates: {
    canonical: "https://macmagic-ai.github.io/algarvesimracing-web",
  },
  keywords: [
    "Algarve SimRacing",
    "sim racing Portugal",
    "simulator rental Portimão",
    "iRacing Algarve",
    "Assetto Corsa Algarve",
    "sim racing coaching",
  ],
  openGraph: {
    title: "Algarve SimRacing",
    description:
      "Where Virtual Meets Reality. Elite sim racing sessions, events, and coaching in Portimão.",
    url: "https://macmagic-ai.github.io/algarvesimracing-web",
    siteName: "Algarve SimRacing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/algarvesimracing-web/assets/008-900x900-1.jpg",
        width: 900,
        height: 900,
        alt: "Algarve SimRacing simulator setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Algarve SimRacing",
    description:
      "Portugal's Premier Sim Racing Experience in Portimão. Book your session now.",
    images: ["/algarvesimracing-web/assets/008-900x900-1.jpg"],
  },
  icons: {
    icon: [
      { url: "/algarvesimracing-web/assets/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/algarvesimracing-web/assets/favicon-96x96.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          defer
          data-domain="algarvesimracing.com"
          src="https://plausible-analytics-ce-production-c514.up.railway.app/js/script.outbound-links.js"
        />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <Providers>
          <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <SiteNavbar />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
