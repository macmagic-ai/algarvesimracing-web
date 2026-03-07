import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Algarve SimRacing services, effective June 25, 2025.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-4xl font-bold sm:text-5xl">Terms & Conditions</h1>
      <p className="mt-2 text-sm text-zinc-500">Effective: 25/06/2025</p>
      <div className="mt-6 space-y-4 text-sm text-zinc-700">
        <p>One-time sessions are refundable up to 24 hours before the scheduled start.</p>
        <p>No-shows are non-refundable.</p>
        <p>Monthly memberships can be canceled anytime, without partial-month refunds.</p>
        <p>In case of technical faults, sessions are rescheduled or fully refunded.</p>
      </div>
    </div>
  );
}
