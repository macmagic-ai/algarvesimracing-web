import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Algarve SimRacing, effective June 25, 2025.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-zinc-500">Effective: 25/06/2025</p>
      <div className="mt-6 space-y-4 text-sm text-zinc-700">
        <p>
          Algarve SimRacing is GDPR-compliant and processes personal data only for bookings,
          customer support, and service delivery.
        </p>
        <p>
          If you are in the EU/EEA, you can request access, correction, or deletion of your data.
          Contact us at info@algarvesimracing.com.
        </p>
      </div>
    </div>
  );
}
