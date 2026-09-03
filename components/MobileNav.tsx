"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type FC, useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";

import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const links = [
  { path: "/", label: { en: "home", ja: "ホーム" } },
  { path: "/services", label: { en: "services", ja: "できること" } },
  { path: "/resume", label: { en: "resume", ja: "経歴" } },
  { path: "/work", label: { en: "work", ja: "実績" } },
  { path: "/contact", label: { en: "contact", ja: "お問い合わせ" } },
] as const;

const MobileNav: FC = () => {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        type="button"
        className="flex items-center justify-center p-1"
        aria-label={locale === "ja" ? "メニューを開く" : "Open menu"}
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">
          {locale === "ja" ? "メニュー" : "Mobile menu"}
        </SheetTitle>
        <div className="mb-14 mt-24 text-center text-2xl">
          <Link href="/" className="text-4xl">
            Sixth Project<span className="text-accent">.</span>
          </Link>
          <div className="mt-7">
            <LanguageSwitcher />
          </div>
        </div>
        <nav className="flex flex-col gap-9 justify-center items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`
                            ${link.path === pathname && "text-accent border-b-2 border-accent"}
                            capitalize text-xl font-medium hover:text-accent transition-all
                        `}
            >
              {link.label[locale]}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
