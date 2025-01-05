/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState, type FC } from "react";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaHtml5, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { client } from "@/libs/microcms";

// 記事の型定義
type Props = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
  };
  stack: string[];
};

// microCMSから記事を取得
async function getWorkPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: "works",
    queries: {
      fields: "id,title,description,thumbnail,stack",
      limit: 100,
    },
  });
  return data.contents;
}

const Work: FC = () => {
  const [works, setWorks] = useState<Props[]>([]);
  const [work, setWork] = useState<Props>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getWorkPosts().then((data) => setWorks(data));
    setWork(works[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (works.length > 0) {
      setWork(works[0]); // worksが変更されたときに最初の要素を設定
    }
  }, [works]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-8 h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {String(activeIndex + 1).padStart(2, "0")}
              </div>
              <h2 className="text-5xl font-bold leading-tight text-white group-hover:text-accent transition-all duration-500 capitalize">
                {work?.title}
              </h2>
              <p className="text-white/60">{work?.description}</p>
              <ul className="flex flex-wrap gap-4">
                {work &&
                  work.stack.map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item}
                      {index < work.stack.length - 1 && ","}
                    </li>
                  ))}
              </ul>
              <div className="border border-white/20"></div>
              {/* <div className="flex items-center gap-4">
                <Link href={work.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex items-center gap-2 text-white/60 group hover:text-accent transition-all duration-500">
                          <span>View Project</span>
                          <BsArrowUpRight />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <Tooltip>
                          <span>View Project</span>
                        </Tooltip>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={work.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex items-center gap-2 text-white/60 group hover:text-accent transition-all duration-500">
                          <span className="flex items-center gap-2">
                            <BsGithub />
                            View Github repository
                          </span>
                          <BsArrowUpRight />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <Tooltip>
                          <span>View Github repository</span>
                        </Tooltip>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                setWork(works[swiper.activeIndex]);
              }}
            >
              {works.map((work) => (
                <SwiperSlide key={work.id} className="w-full">
                  <div className="h-[460px] relative group flex items-center justify-center bg-white/50">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        fill
                        className="object-cover object-top"
                        src={work.thumbnail.url}
                        alt={work.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none]"
                btnStyles="bg-accent hover:bg-accent-dark text-primary transition-all duration-500 text-2xl w-[44px] h-[44px] flex items-center justify-center"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
