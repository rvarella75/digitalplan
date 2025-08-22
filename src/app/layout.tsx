import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "ProFuture Consulting - Digital Transformation Plan",
  description: "Get your personalized digital transformation plan in minutes—practical steps, proven approaches, and expert guidance for small businesses.",
  keywords: "digital transformation, small business, consulting, automation, technology strategy",
  authors: [{ name: "ProFuture Consulting" }],
  creator: "ProFuture Consulting",
  publisher: "ProFuture Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://profutureconsulting.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ProFuture Consulting - Digital Transformation Plan",
    description: "Get your personalized digital transformation plan in minutes—practical steps, proven approaches, and expert guidance for small businesses.",
    url: 'https://profutureconsulting.com',
    siteName: 'ProFuture Consulting',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ProFuture Consulting - Digital Transformation Plan",
    description: "Get your personalized digital transformation plan in minutes—practical steps, proven approaches, and expert guidance for small businesses.",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
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
        {children}
      </body>
    </html>
  );
}
