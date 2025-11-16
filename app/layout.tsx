import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rojgar AI ? Smart Government Job Discovery",
  description:
    "Rojgar AI helps candidates find and match to government jobs using eligibility-based scoring with a delightful, mobile-first experience.",
  keywords: [
    "Rojgar AI",
    "government jobs",
    "Sarkari Naukri",
    "job eligibility",
    "India jobs",
  ],
  openGraph: {
    title: "Rojgar AI ? Smart Government Job Discovery",
    description:
      "Find your perfect government job match with AI-style eligibility scoring.",
    url: "https://agentic-ed23ffcd.vercel.app",
    siteName: "Rojgar AI",
    images: [
      { url: "/og.svg", width: 1200, height: 630, alt: "Rojgar AI" },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rojgar AI",
    description: "Smart government job discovery and eligibility matching.",
    images: ["/og.svg"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
