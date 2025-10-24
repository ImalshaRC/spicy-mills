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
  title: "Ceylon Hills Plantations - Sri Lankan Agricultural Excellence",
  description: "Ceylon Hills Plantations - Your Premier Destination for Plantation Agriculture Excellence in Sri Lanka. Specializing in Tea, Rubber, Coconut, Cinnamon, Oil Palm, and Forestry Management.",
  keywords: "Ceylon Hills Plantations, plantation agriculture, tea plantations, rubber cultivation, coconut farming, cinnamon production, oil palm, forestry management, Sri Lanka agriculture",
  authors: [{ name: "Ceylon Hills Plantations" }],
  openGraph: {
    title: "Ceylon Hills Plantations - Agricultural Excellence",
    description: "Premier Destination for Plantation Agriculture Excellence in Sri Lanka",
    type: "website",
    siteName: "Ceylon Hills Plantations",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
