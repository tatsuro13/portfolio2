"use client";

import type { FC } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAwslambda,
  SiMysql,
  SiRuby,
  SiRubyonrails,
} from "react-icons/si";
import { motion } from "framer-motion";
//components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

//about me
const about = {
  title: "About Me",
  description:
    "もともとWebデザイナーとしてキャリアをスタートしました。現在はフロントエンドをメインにUI/UXを考えたデザインエンジニアとして活動しています。",
  descriptionEn:
    "I started my career as a web designer. I am currently working as a design engineer who mainly focuses on front-end and thinks about UI/UX.",
  info: [
    { fieldName: "Name", value: "Sixth Project" },
    { fieldName: "Experience", value: "13+ Years" },
    { fieldName: "Nationality", value: "Japan" },
    // { fieldName: "Email", value: "*****@example.com" },
    { fieldName: "Language", value: "Japanese, English" },
  ],
};

//experience
const experience = {
  icon: "",
  title: "My experience",
  description:
    "デザイン業務からスタートし、Web制作会社での経験を経て、現在はSaaSを開発する会社でフロントエンドエンジニアとして活動しています。",
  descriptionEn:
    "I started with design work, went through experience at a web production company, and am now working as a front-end engineer at a company that develops",
  items: [
    {
      company: "Creates SaaS",
      position:
        "Full Stack Developer (mainly Front-end Developer, UI/UX Designer, Project Manager)",
      period: "2022 - Present",
    },
    {
      company: "Undertakes development projects",
      position: "Front-end Developer",
      period: "2021 - 2022",
    },
    {
      company: "Website development company",
      position: "Web Designer, Front-end Developer, Project Manager",
      period: "2012 - 2021",
    },
    {
      company: "Website development company",
      position: "Web Designer, html coder, director",
      period: "2013 - 2012",
    },
  ],
};

//skills
const skills = {
  title: "My skills",
  description:
    "illustratorやphotoshopでのデザインから現在はFigmaを用いたUI/UXデザイン、フロントエンド開発をメインにやNode.jsを用いたAPIなどの実装など幅広く行っています。",
  descriptionEn:
    "From design with illustrator and photoshop to UI/UX design using Figma, I am mainly engaged in front-end development and implement APIs using Node.js.",
  items: [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML 3", icon: <FaHtml5 /> },
    { name: "CSS 3", icon: <FaCss3 /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "AWS Lambda", icon: <SiAwslambda /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Ruby", icon: <SiRuby /> },
    { name: "Ruby on Rails", icon: <SiRubyonrails /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
  ],
};

const Resume: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-16"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.descriptionEn}
                </p>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col gap-1 text-white/80 h-[184px] py-6 px-10 rounded-xl bg-[#27272c] justify-center
                        items-center lg:items-start"
                      >
                        <p className="text-accent">{item.period}</p>
                        <h3 className="text-xl font-bold max-w-[260px] min-h-[60px]">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.descriptionEn}
                  </p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.items.map((item, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                              <div className="text-6xl group-hover:text-accent transition-all divide-neutral-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.descriptionEn}
                </p>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 gap-4 xl:grid-cols-2 max-w-[620px]">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center gap-4 xl:justify-start"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
