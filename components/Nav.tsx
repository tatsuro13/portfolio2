"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";

import { useLanguage } from "@/components/LanguageProvider";

const links = [
  {
    path: "/",
    label: { en: "home", ja: "ホーム" },
  },
  {
    path: "/services",
    label: { en: "services", ja: "できること" },
  },
  {
    path: "/resume",
    label: { en: "resume", ja: "経歴" },
  },
  {
    path: "/work",
    label: { en: "work", ja: "実績" },
  },
  {
    path: "/contact",
    label: { en: "contact", ja: "お問い合わせ" },
  },
] as const;

const Nav: FC = () => {
  const pathname = usePathname();
  const { locale } = useLanguage();

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`
                ${link.path === pathname && "text-accent border-b-2 border-accent"}
                capitalize font-medium hover:text-accent transition-all
            `}
        >
          {link.label[locale]}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
