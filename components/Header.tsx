"use client";

import Link from "next/link";
import type { FC } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Nav from "@/components/Nav";
import TrackedLink from "@/components/TrackedLink";
import MobileNav from "./MobileNav";
import { buttonVariants } from "./ui/button";

const Header: FC = () => {
  const { locale } = useLanguage();

  return (
    <header className="relative z-40 py-7 text-white xl:py-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-[28px] font-semibold leading-none tracking-[-0.02em] transition-opacity hover:opacity-75 sm:text-4xl"
          aria-label={locale === "ja" ? "ホームへ" : "Go to home"}
        >
          Sixth Project<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-7">
          <Nav />
          <LanguageSwitcher compact />
          <TrackedLink
            href="/contact"
            eventName="cta_click"
            eventParams={{
              cta_name: "discuss_project",
              cta_location: "header",
            }}
            className={buttonVariants()}
          >
            {locale === "ja" ? "相談する" : "Let’s talk"}
          </TrackedLink>
        </div>

        {/* Mobile nav */}
        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher compact />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
