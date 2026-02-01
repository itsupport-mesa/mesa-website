import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/components/providers/SessionProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "MESA - Madison Emergency Services Association",
    template: "%s | MESA",
  },
  description:
    "MESA (Madison Emergency Services Association) has served Madison County, Virginia since 1982, providing food pantry services and emergency financial assistance to neighbors in need.",
  keywords: [
    "MESA",
    "Madison Emergency Services Association",
    "food pantry",
    "Madison County",
    "Virginia",
    "emergency assistance",
    "nonprofit",
  ],
  authors: [{ name: "MESA" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mesamadisonva.org",
    siteName: "MESA - Madison Emergency Services Association",
    title: "MESA - Madison Emergency Services Association",
    description:
      "Serving Madison County, Virginia since 1982 with food pantry services and emergency financial assistance.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
