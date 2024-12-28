"use client";

import type { FC } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { path: "/", label: "home" },
  { path: "/resume", label: "resume" },
  { path: "/services", label: "services" },
  { path: "/work", label: "work" },
  { path: "/contact", label: "contact" },
];

const MobileNav: FC = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="fixed justify-center items-center top-8 right-4">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle hidden>Mobile menu</SheetTitle>
        <div className="mt-32 mb-32 text-center text-2xl">
          <Link href="/" className="text-4xl">
            <h1>
              SixthProject<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-9 justify-center items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`
                            ${link.path === pathname && "text-accent border-b-2 border-accent"}
                            capitalize text-xl font-medium hover:text-accent transition-all
                        `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
