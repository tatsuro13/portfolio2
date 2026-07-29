"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import type { FC, ReactNode } from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAwslambda,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiRuby,
  SiRubyonrails,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

//about me
const about = {
  title: "About",
  description:
    "I am a Japan-based senior product engineer with a background in web design and more than 14 years across design, front-end development, full-stack product engineering, and technical leadership. I build software close to real operations: B2B SaaS features, TypeScript backends, integrations, and applied AI workflows.",
  info: [
    { fieldName: "Focus", value: "B2B SaaS & Applied AI" },
    { fieldName: "Experience", value: "14+ Years" },
    { fieldName: "Based in", value: "Chiba, Japan" },
    { fieldName: "Working style", value: "Remote · Async-first" },
    { fieldName: "Languages", value: "Japanese · Written English" },
  ],
};

//experience
const experience = {
  icon: "",
  title: "Experience",
  description:
    "My career has moved from design and front-end development into end-to-end product engineering. Today I build core SaaS products and lead applied AI initiatives that reach production and measurable business outcomes.",
  items: [
    {
      company: "B2B SaaS Company",
      position: "Product Engineer / Project Lead",
      period: "2022 - Present",
      summary:
        "Builds and operates a website builder and booking platform. Leads AI automation from requirements and architecture through implementation, deployment, and operational adoption.",
    },
    {
      company: "Software Development Company",
      position: "Front-end Engineer",
      period: "2021 - 2022",
      summary:
        "Delivered maintainable front-end features for client development projects and collaborated across design and engineering.",
    },
    {
      company: "Web Production Company",
      position: "Web Designer / Front-end Engineer / Project Manager",
      period: "2012 - 2021",
      summary:
        "Designed and delivered websites while coordinating projects from client requirements through production release.",
    },
    {
      company: "Web Production Company",
      position: "Web Designer / HTML Developer / Web Director",
      period: "Earlier Career",
      summary:
        "Built the foundation of a multidisciplinary practice spanning visual design, implementation, and delivery coordination.",
    },
  ],
};

//skills
const skills = {
  title: "Core capabilities",
  description:
    "I design and ship applied AI and LLM-powered workflows inside real SaaS products. TypeScript is my primary implementation language across React and Next.js frontends, Node.js backends, APIs, asynchronous jobs, and AWS-based production systems.",
  coreItems: [
    { name: "Applied AI / LLM Integration", icon: <SiOpenai /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "AWS Lambda", icon: <SiAwslambda /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Figma", icon: <FaFigma /> },
  ],
  additionalItems: [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML 5", icon: <FaHtml5 /> },
    { name: "CSS 3", icon: <FaCss3 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Ruby", icon: <SiRuby /> },
    { name: "Ruby on Rails", icon: <SiRubyonrails /> },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
  ],
};

type SkillGridProps = {
  items: Array<{
    name: string;
    icon: ReactNode;
  }>;
};

const SkillGrid: FC<SkillGridProps> = ({ items }) => {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-6">
      {items.map((item) => (
        <li
          key={item.name}
          className="group flex min-h-[150px] flex-col items-center justify-center gap-4 rounded-xl border border-transparent bg-[#232329] p-5 text-center transition-colors duration-300 hover:border-accent/40"
        >
          <div className="text-5xl transition-colors duration-300 group-hover:text-accent">
            {item.icon}
          </div>
          <span className="text-sm font-medium leading-snug text-white/65 transition-colors duration-300 group-hover:text-white">
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
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
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col gap-2 text-white/80 min-h-[260px] py-6 px-8 rounded-xl bg-[#27272c] justify-center
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
                        <p className="mt-2 text-sm leading-relaxed text-white/50 text-center lg:text-left">
                          {item.summary}
                        </p>
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
                    {skills.description}
                  </p>
                </div>
                <div className="space-y-10">
                  <section>
                    <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                      Core stack
                    </h4>
                    <SkillGrid items={skills.coreItems} />
                  </section>
                  <section>
                    <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                      Additional experience
                    </h4>
                    <SkillGrid items={skills.additionalItems} />
                  </section>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">{about.title}</h3>
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
