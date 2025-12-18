import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Awais Anser",
  description:
    "A modern multi-page portfolio to showcase skills, experience, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="relative min-h-screen text-foreground">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.16),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.14),transparent_22%),radial-gradient(circle_at_50%_60%,rgba(34,197,94,0.1),transparent_28%)]" />
          <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-12 pt-6">
           <header className="mb-10 sticky top-0 z-50">
  <div className="flex flex-row justify-between gap-4 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 glass sm:flex-row sm:items-center sm:justify-between">
    <Link href="/" className="flex items-center justify-start gap-4 font-semibold">
      <img
        src="/me.png"
        alt="Awais Anser"
        className="h-10 w-10 rounded-full"
      />
      <div className="leading-tight">
        <div className="text-sm text-slate-300">Web Developer</div>
        <div className="text-base text-white">Awais Anser</div>
      </div>
    </Link>
    <NavBar />
  </div>
</header>

            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
