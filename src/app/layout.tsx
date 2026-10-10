import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Milawa Bakery Café | Artisan Sourdough, Gourmet Hampers & Tour Catering",
  description: "Located in Victoria's renowned Milawa Gourmet Region. Handcrafted sourdough, award-winning bakery pies, fresh scones with jam & cream, local Milawa cheese hampers, and group tour catering.",
  keywords: [
    "Milawa Bakery Café",
    "Milawa bakery",
    "Milawa cheese hampers",
    "King Valley catering",
    "Milawa gourmet region",
    "Artisan sourdough Milawa",
    "Milawa pies",
    "Murray to Mountains Rail Trail picnic"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
