import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HireCrawl — AI-powered job search, fairly compensated",
  description: "Volume discounts encourage deep crawling — recruiters and job seekers win.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-50">
        <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-blue-400">Hire</span>Crawl
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/jobs" className="text-sm text-gray-400 hover:text-white transition-colors">
              All Jobs
            </Link>
            <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
              Protected by NanoCrawl
            </span>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-800 px-6 py-4 text-center text-xs text-gray-500">
          HireCrawl Demo &middot; Powered by NanoCrawl
        </footer>
      </body>
    </html>
  );
}
