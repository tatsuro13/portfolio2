"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const links = [
    {
        path: "/",
        label: "home",
    },
    {
        path: "/services",
        label: "services",
    },
    {
        path: "/resume",
        label: "resume",
    },
    {
        path: "/work",
        label: "work",
    },
    {
        path: "/contact",
        label: "contact",
    }
]

const Nav: FC = () => {
    const pathname = usePathname();
  return (
    <nav className="flex gap-8">
        {links.map((link, index) => (
            <Link key={index} href={link.path} className={`
                ${link.path === pathname && "text-accent border-b-2 border-accent"}
                capitalize font-medium hover:text-accent transition-all
            `}>
                {link.label}
            </Link>
        ))}
    </nav>
  )
}

export default Nav