import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wellnesscoach.com"),
  title: {
    default: "Wellness Coach | Holistic Health & Mindset Transformation",
    template: "%s | Wellness Coach",
  },
  description:
    "Helping busy professionals achieve balance, energy, confidence, and sustainable wellness through personalized coaching.",
  keywords: [
    "Wellness Coach",
    "Holistic Wellness Coaching",
    "Nutrition Coach",
    "Mindfulness Coaching",
    "Lifestyle Transformation",
    "Wellness Programs",
  ],
  authors: [{ name: "Wellness Coach" }],
  creator: "Wellness Coach",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wellnesscoach.com",
    title: "Wellness Coach | Holistic Health & Mindset Transformation",
    description:
      "Helping busy professionals achieve balance, energy, confidence, and sustainable wellness through personalized coaching.",
    siteName: "Wellness Coach",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Holistic Wellness Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Coach | Holistic Health & Mindset Transformation",
    description:
      "Helping busy professionals achieve balance, energy, confidence, and sustainable wellness through personalized coaching.",
    images: ["/og-image.jpg"],
    creator: "@wellnesscoach",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans scroll-smooth", inter.variable, playfair.variable)}>
      <body className="antialiased min-h-screen bg-cream text-dark">
        {children}
      </body>
    </html>
  );
}
