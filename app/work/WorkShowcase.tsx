"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import WorkSliderBtns from "@/components/WorkSliderBtns";
import type { FeaturedWork, WorkItem } from "./work-types";

type WorkShowcaseProps = {
  works: WorkItem[];
  featuredWorks: FeaturedWork[];
};

const WorkShowcase: FC<WorkShowcaseProps> = ({ works, featuredWorks }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWork = works[activeIndex] ?? works[0];

  if (!activeWork) {
    return (
      <section className="container mx-auto py-24 text-center">
        <h1 className="text-5xl">Selected work</h1>
        <p className="mt-6 text-white/60">
          Project details are being prepared.
        </p>
      </section>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: 0.25, ease: "easeIn" },
      }}
      className="container mx-auto py-12"
    >
      <section className="mb-24">
        <div className="mb-12 max-w-[760px]">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Featured case studies
          </span>
          <h1 className="mt-4 text-5xl xl:text-7xl">
            Three products. Three real operational problems.
          </h1>
          <p className="mt-6 text-lg text-white/60">
            A closer look at the SaaS and applied AI work that best represents
            how I move from product problem to production outcome.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredWorks.map((work, index) => (
            <article
              key={work.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#17171a]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                <Image
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1023px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  src={work.thumbnail.url}
                  alt={work.title}
                />
                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/75 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-white backdrop-blur-sm">
                  0{index + 1}
                </span>
              </div>
              <div className="flex min-h-[330px] flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {work.label}
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight">
                  {work.title}
                </h2>
                <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-white/55">
                  {work.description}
                </p>
                <div className="mt-auto pt-6">
                  <p className="border-t border-white/10 pt-5 text-sm font-medium text-white/85">
                    {work.proof}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {work.stack.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/55"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-10 max-w-[680px]">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Selected archive
          </span>
          <h2 className="mt-4 text-4xl xl:text-5xl">
            Explore all {works.length} projects.
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-8">
              <div className="text-8xl font-extrabold leading-none text-transparent text-outline">
                #{String(activeIndex + 1).padStart(2, "0")}
              </div>
              <h3 className="text-5xl font-bold capitalize leading-tight text-white transition-all duration-500">
                {activeWork.title}
              </h3>
              <p className="text-white/60">{activeWork.description}</p>
              <ul className="flex flex-wrap gap-3">
                {activeWork.stack.map((item) => (
                  <li key={item} className="text-lg text-accent">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20" />
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {works.map((work) => (
                <SwiperSlide key={work.id} className="w-full">
                  <div className="relative flex h-[360px] items-center justify-center bg-white/5 md:h-[460px]">
                    <div className="absolute inset-0 z-10 bg-black/10" />
                    <Image
                      fill
                      sizes="(max-width: 1279px) 100vw, 50vw"
                      className="object-cover object-top"
                      src={work.thumbnail.url}
                      alt={work.title}
                    />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-dark text-primary transition-all duration-500 text-2xl w-[44px] h-[44px] flex items-center justify-center"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default WorkShowcase;
