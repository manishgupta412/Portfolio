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
  title: "Manish Gupta | Software Engineer",
  description: "Explore my software engineering portfolio and projects.",
  openGraph: {
    title: "Manish Gupta | Software Engineer",
    description: "Explore my software engineering portfolio and projects.",
    url: "https://datpham.dev",
    siteName: "Manish Gupta Portfolio",
    images: [
      {
        url: "/preview.png", 
        width: 1200,
        height: 630,
        alt: "Manish Gupta Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manish Gupta | Software Engineer",
    description: "Explore my software engineering portfolio and projects.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
