import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PBPI - Official Padel Rankings Indonesia",
  description: "Official platform for Indonesian padel rankings, tournaments, and player statistics",
  keywords: "padel, indonesia, rankings, tournaments, sports",
  authors: [{ name: "PBPI" }],
  openGraph: {
    title: "PBPI - Official Padel Rankings Indonesia",
    description: "Official platform for Indonesian padel rankings, tournaments, and player statistics",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PBPI - Official Padel Rankings Indonesia",
    description: "Official platform for Indonesian padel rankings, tournaments, and player statistics",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}