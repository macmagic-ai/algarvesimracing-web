import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";
import PlausibleProvider from "next-plausible";

import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://algarvesimracing.com"),
  title: {
    default: "Algarve SimRacing | Portugal's Premier Sim Racing Experience",
    template: "%s | Algarve SimRacing",
  },
  description:
    "Professional simulator rentals, coaching, streaming-ready rigs, events, and driver-focused training in Portimão.",
  applicationName: "Algarve SimRacing",
  alternates: {
    canonical: "/",
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
    url: "https://algarvesimracing.com",
    siteName: "Algarve SimRacing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/008-900x900-1.jpg",
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
    images: ["/assets/008-900x900-1.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/assets/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/assets/favicon-96x96.png", color: "#FF3131" },
    ],
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
        <PlausibleProvider
          domain="algarvesimracing.com"
          customDomain="https://plausible-analytics-ce-production-c514.up.railway.app"
          trackOutboundLinks
        />
        <StructuredData />
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
