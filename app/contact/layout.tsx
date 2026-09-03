import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss a hybrid or remote B2B SaaS, TypeScript product engineering, or applied AI automation project with Sixth Project.",
  alternates: {
    canonical: "/contact",
  },
};

const ContactLayout = ({ children }: { children: ReactNode }) => children;

export default ContactLayout;
