export type IgPost = {
  id: string;
  image: string; // local asset path (bp() applied in component)
  caption: string;
  date: string;
  url: string;
};

// Latest posts from @algarvesimracing — updated manually or via CMS
// Using local sim photos as fallback since IG API requires auth
export const instagramPosts: IgPost[] = [
  {
    id: "1",
    image: "/assets/sette-camara-coaching.jpg",
    caption: "Professional racing driver & coach Sérgio Sette Câmara @sergiosettecamara coaching his client in the Mercedes-AMG GT3 for the Portimão race weekend. Consistency, clear references, clean lines 🏁",
    date: "2025-03-10",
    url: "https://www.instagram.com/p/DUYQGXAjDvP/",
  },
  {
    id: "2",
    image: "/assets/11-1536x1152-1.jpg",
    caption: "Simulator 1 ready for another session. Triple 42″ OLED, RTX 5090, Simucube 2 Pro. The ultimate sim racing setup in Portugal 🏎️",
    date: "2025-03-05",
    url: "https://www.instagram.com/algarvesimracing/",
  },
  {
    id: "2",
    image: "/assets/15.jpg",
    caption: "Sim 2 in full flow — Porsche 911 RSR at Spa. iRacing on triple screens never gets old 🔥",
    date: "2025-03-03",
    url: "https://www.instagram.com/algarvesimracing/",
  },
  {
    id: "3",
    image: "/assets/13-1024x714-1.jpg",
    caption: "Cockpit view from our flagship rig. McLaren steering wheel, full telemetry, real race feel.",
    date: "2025-02-28",
    url: "https://www.instagram.com/algarvesimracing/",
  },
  {
    id: "4",
    image: "/assets/008-900x900-1.jpg",
    caption: "Late night session at ASR. When the track calls, you answer 🌙",
    date: "2025-02-25",
    url: "https://www.instagram.com/algarvesimracing/",
  },
  {
    id: "5",
    image: "/assets/12-1024x768-1.jpg",
    caption: "Track day prep done on the sim. Portimão circuit loaded, lap times dropping. See you on track!",
    date: "2025-02-20",
    url: "https://www.instagram.com/algarvesimracing/",
  },
  {
    id: "6",
    image: "/assets/Gabor-and-Jussi-1-scaled-900x900-1.jpg",
    caption: "The founders on track at Kartódromo Internacional do Algarve. Real racing inspires everything we build 🏁",
    date: "2025-02-15",
    url: "https://www.instagram.com/algarvesimracing/",
  },
];

export type DriverStory = {
  id: string;
  name: string;
  initial: string;
  image: string;
  quote: string;
  date: string;
};

export const driverStories: DriverStory[] = [
  { id: "1", name: "João M.", initial: "J", image: "/assets/008-900x900-1.jpg", quote: "First session and already hooked. The force feedback is insane! 🔥", date: "Mar 6" },
  { id: "2", name: "Emma K.", initial: "E", image: "/assets/11-1536x1152-1.jpg", quote: "Perfect track day prep. Portimão on triple OLEDs feels like the real thing 🏎️", date: "Mar 5" },
  { id: "3", name: "Rui F.", initial: "R", image: "/assets/15.jpg", quote: "Best birthday gift ever. The RTX 5090 setup is seriously impressive!", date: "Mar 4" },
  { id: "4", name: "Carlos P.", initial: "C", image: "/assets/13-1024x714-1.jpg", quote: "Drove a Porsche 911 RSR at Le Mans. Already booked my next session! 🏁", date: "Mar 3" },
  { id: "5", name: "Marta S.", initial: "M", image: "/assets/12-1024x768-1.jpg", quote: "Our whole team came for a private event. Absolutely loved it 🙌", date: "Mar 2" },
  { id: "6", name: "Tom B.", initial: "T", image: "/assets/15.jpg", quote: "iRacing on triple screens with proper Simucube feedback — nothing else compares 👌", date: "Mar 1" },
  { id: "7", name: "Ana C.", initial: "A", image: "/assets/008-900x900-1.jpg", quote: "VR mode on Sim 2 is a completely different experience. Mind-blowing 🥽", date: "Feb 28" },
  { id: "8", name: "Diogo V.", initial: "D", image: "/assets/11-1536x1152-1.jpg", quote: "Now I understand why pro drivers use simulators. This is serious gear.", date: "Feb 27" },
];
