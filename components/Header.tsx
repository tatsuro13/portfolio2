import Nav from "@/components/Nav";
import TrackedLink from "@/components/TrackedLink";
import Link from "next/link";
import type { FC } from "react";
import MobileNav from "./MobileNav";
import { buttonVariants } from "./ui/button";

const Header: FC = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Sixth Project<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <TrackedLink
            href="/contact"
            eventName="cta_click"
            eventParams={{
              cta_name: "discuss_project",
              cta_location: "header",
            }}
            className={buttonVariants()}
          >
            Discuss a project
          </TrackedLink>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
