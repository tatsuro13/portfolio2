"use client";

import type { FC } from "react";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineEmail } from "react-icons/md";

//components
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

const Home: FC = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Application Developer</span>
            <h1 className="h1 text-accent">
              {`Hello I'm`}
              <br />
              <TypeAnimation
                className="text-white"
                sequence={[
                  "Sixth Project",
                  1000,
                  "Web Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Web Designer",
                  1000,
                ]}
                wrapper="span"
                repeat={Infinity}
                speed={30}
              />
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I mainly focus on front-end development with an emphasis on UI/UX.
              I strive to incorporate the latest technologies in my development.
            </p>
            <div className="flex flex-col gap-8 items-center xl:flex-row">
              <Link href={"/contact"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>hire me</span>
                  <MdOutlineEmail className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
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
