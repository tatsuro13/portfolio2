"use client";

import { useState, type FC } from "react";

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

const projects = [
  {
    number: 1,
    category: "Web Application",
    title: "Project A",
    description: "This is a project A.",
    live: "https://example.com",
    github: "https://github.com",
    stack: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "Html 5",
        icon: <FaHtml5 />,
      },
    ],
    image: "https://placehold.jp/1980x2600.png",
  },
  {
    number: 2,
    category: "Web Application",
    title: "Project B",
    description: "This is a project B.",
    live: "https://example.com",
    github: "https://github.com",
    stack: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "Html 5",
        icon: <FaHtml5 />,
      },
    ],
    image: "https://placehold.jp/1980x2600.png",
  },
];

const Work: FC = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-8 h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.number}
              </div>
              <h2 className="text-5xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index < project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
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
                <Link href={project.github}>
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
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="h-[520px] mb-12"
              onSlideChange={(swiper) =>
                setProject(projects[swiper.activeIndex])
              }
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <Image
                    width={1980}
                    height={2600}
                    src={project.image}
                    alt={project.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
