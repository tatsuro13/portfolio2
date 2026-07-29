import Link from "next/link";
import type { FC } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

import HeroIdentity from "@/components/HeroIdentity";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

const Home: FC = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <HeroIdentity />
            <h1 className="h1 mt-4 text-white">
              Building B2B SaaS
              <br />
              <span className="text-accent">and applied AI that ships.</span>
            </h1>
            <p className="max-w-[620px] mt-6 mb-6 text-lg text-white/70">
              I build and operate customer-facing SaaS products, including
              website builders and booking platforms, and turn manual operations
              into reliable AI-powered workflows.
            </p>
            <div className="max-w-[620px] mb-8 border-y border-white/15 py-5 text-left sm:flex sm:items-center sm:gap-6">
              <strong className="block whitespace-nowrap text-3xl font-semibold text-white">
                JPY 8.4M
              </strong>
              <span className="mt-1 block text-sm leading-relaxed text-white/60 sm:mt-0">
                Annual recurring outsourcing cost reduction delivered by an AI
                automation project I led from planning through rollout.
              </span>
            </div>
            <div className="my-4 flex flex-col gap-5 items-center sm:flex-row xl:justify-start">
              <Link href="/work">
                <Button size="lg" className="flex items-center gap-2 uppercase">
                  <span>View selected work</span>
                  <BsArrowUpRight className="text-xl" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Discuss a project</span>
                  <MdOutlineEmail className="text-xl" />
                </Button>
              </Link>
              <div className="sm:ml-2 mb-8 sm:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
