import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

// Font setup
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// Metadata for SEO & Social Sharing
export const metadata: Metadata = {
  title: "Maclean Gardening | Expert Landscaping & Garden Design",
  description:
    "Transform your outdoor space with Maclean Gardening. We offer expert landscaping, garden design, and maintenance services.",
  keywords: [
    "gardening",
    "landscaping",
    "garden design",
    "Maclean Gardening",
    "outdoor spaces",
  ],
  authors: [{ name: "Maclean Gardening", url: "https://maclean-gardening.com" }],
  metadataBase: new URL("https://maclean-gardening.com"),

  openGraph: {
    title: "Maclean Gardening | Expert Landscaping & Garden Design",
    description:
      "We create stunning outdoor spaces. Landscaping, garden design, and maintenance services tailored to your needs.",
    url: "https://maclean-gardening.com",
    siteName: "Maclean Gardening",
    images: [
      {
        url: "https://maclean-gardening.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maclean Gardening - Transforming Outdoor Spaces",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Maclean Gardening | Expert Landscaping & Garden Design",
    description:
      "We create stunning outdoor spaces. Landscaping, garden design, and maintenance services tailored to your needs.",
    images: ["https://maclean-gardening.com/og-image.jpg"],
    creator: "@MacleanGardens",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
