import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivonta Green Tech Consultants - Plantation Agriculture Excellence",
  description: "Your Premier Destination for Fulfilling the Entire Spectrum of Core Value Chain Requirements in Sri Lankan Plantation Agriculture. Specializing in Tea, Rubber, Coconut, Cinnamon, Oil palm, and Forestry.",
  keywords: "plantation agriculture, tea, rubber, coconut, cinnamon, oil palm, forestry, Sri Lanka, agricultural consulting",
  authors: [{ name: "Vivonta Green Tech Consultants" }],
  openGraph: {
    title: "Vivonta Green Tech Consultants",
    description: "Premier Destination for Plantation Agriculture Excellence in Sri Lanka",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
