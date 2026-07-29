import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "More than 14 years across product engineering, B2B SaaS, applied AI automation, front-end development, and product design.",
  alternates: {
    canonical: "/resume",
  },
};

const ResumeLayout = ({ children }: { children: ReactNode }) => children;

export default ResumeLayout;
