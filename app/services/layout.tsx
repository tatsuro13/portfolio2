import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product engineering, applied AI automation, technical leadership, and product design for B2B SaaS teams.",
  alternates: {
    canonical: "/services",
  },
};

const ServicesLayout = ({ children }: { children: ReactNode }) => children;

export default ServicesLayout;
