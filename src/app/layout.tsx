import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Affordable Tennis Racket Stringing – Lakewood Ranch, Bradenton & Sarasota",
  description:
    "Affordable, reliable tennis racket stringing for players in Lakewood Ranch, Bradenton and Sarasota. Professional workmanship, consistent tension, and fast turnaround.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
