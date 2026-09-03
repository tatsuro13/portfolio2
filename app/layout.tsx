import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Hind } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

//components
import Header from "@/components/Header";
import LanguageProvider from "@/components/LanguageProvider";
import PageTransition from "@/components/PageTransition";

const hind = Hind({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: ["400", "500", "600", "700"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sixth-project.com"),
  title: {
    default: "Product Engineer | Sixth Project",
    template: "%s | Sixth Project",
  },
  description:
    "Product engineer connecting discovery, UX, and full-stack development to build B2B SaaS and applied AI from first question through production.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Product Engineer",
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
    title: "Product Engineer | Sixth Project",
    description:
      "Building B2B SaaS products and applied AI workflows from discovery through production rollout.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sixth Project — Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Engineer | Sixth Project",
    description:
      "Building B2B SaaS products and applied AI workflows from discovery through production rollout.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hind.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          {process.env.GAID ? (
            <GoogleAnalytics gaId={process.env.GAID} />
          ) : null}
        </LanguageProvider>
      </body>
    </html>
  );
}
