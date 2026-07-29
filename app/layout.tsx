import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Hind } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const hind = Hind({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sixth-project.com"),
  title: {
    default: "Senior Product Engineer | Sixth Project",
    template: "%s | Sixth Project",
  },
  description:
    "Senior product engineer building B2B SaaS and applied AI workflows with TypeScript, React, and Node.js. From product discovery through production rollout.",
  keywords: [
    "Senior Product Engineer",
    "B2B SaaS",
    "Applied AI",
    "TypeScript",
    "React",
    "Node.js",
    "AI automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sixth-project.com",
    siteName: "Sixth Project",
    title: "Senior Product Engineer | Sixth Project",
    description:
      "Building B2B SaaS products and applied AI workflows from discovery through production rollout.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Product Engineer | Sixth Project",
    description:
      "Building B2B SaaS products and applied AI workflows from discovery through production rollout.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hind.variable} antialiased`}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
      <GoogleAnalytics gaId={process.env.GAID || "default-ga-id"} />
    </html>
  );
}
