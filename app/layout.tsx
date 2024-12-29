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
  title: "Sixth Project {Web Application Developer} Portfolio",
  description:
    "I mainly focus on front-end development with an emphasis on UI/UX. I strive to incorporate the latest technologies in my development.",
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
    </html>
  );
}
