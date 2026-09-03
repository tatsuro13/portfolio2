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

import { type Locale, useLanguage } from "@/components/LanguageProvider";

const resumeCopy = {
  en: {
    tabs: {
      experience: "Experience",
      skills: "Skills",
      about: "About me",
    },
    about: {
      title: "A little context.",
      description:
        "A product engineer based in Chiba, Japan. I started in web design and spent 14+ years moving through front-end development, full-stack product engineering, and technical leadership—always close to the people using what I build.",
      info: [
        { fieldName: "Focus", value: "B2B SaaS & Applied AI" },
        { fieldName: "Experience", value: "14+ Years" },
        { fieldName: "Based in", value: "Chiba, Japan" },
        {
          fieldName: "Working style",
          value: "Hybrid in Japan · Remote worldwide",
        },
        { fieldName: "Languages", value: "Japanese · Written English" },
      ],
    },
    experience: {
      title: "The path so far.",
      description:
        "I started with pixels and front-end code, then kept moving closer to the product. Today I work across SaaS, backend systems, and applied AI—from decisions to delivery.",
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
    },
    skills: {
      title: "The working stack.",
      description:
        "TypeScript is the center of gravity: React and Next.js up front, Node.js, APIs, async jobs, AWS, and production AI workflows behind the scenes.",
      core: "Core stack",
      additional: "Additional experience",
    },
  },
  ja: {
    tabs: {
      experience: "職務経験",
      skills: "スキル",
      about: "プロフィール",
    },
    about: {
      title: "少しだけ、自己紹介。",
      description:
        "千葉を拠点に活動するプロダクトエンジニア。Webデザインから始まり、14年以上かけてフロントエンド、フルスタック開発、技術リードへと領域を広げてきました。いつも、使う人の近くでものをつくっています。",
      info: [
        { fieldName: "専門領域", value: "B2B SaaS・AI活用" },
        { fieldName: "経験", value: "14年以上" },
        { fieldName: "拠点", value: "千葉県・日本" },
        { fieldName: "働き方", value: "国内ハイブリッド・海外リモート" },
        { fieldName: "言語", value: "日本語・英語（読み書き）" },
      ],
    },
    experience: {
      title: "これまでの道のり。",
      description:
        "デザインとフロントエンドから始まり、少しずつプロダクトの中心へ。現在はSaaS、バックエンド、AI活用を横断し、判断からデリバリーまで担っています。",
      items: [
        {
          company: "B2B SaaS企業",
          position: "プロダクトエンジニア / プロジェクトリード",
          period: "2022 - 現在",
          summary:
            "Webサイトビルダーと予約管理サービスを開発・運用。AI業務自動化では、要件・設計から実装、デプロイ、現場導入までをリード。",
        },
        {
          company: "ソフトウェア開発会社",
          position: "フロントエンドエンジニア",
          period: "2021 - 2022",
          summary:
            "受託開発において保守性の高いフロントエンド機能を実装し、デザイン・開発双方と連携。",
        },
        {
          company: "Web制作会社",
          position: "Webデザイナー / フロントエンド / PM",
          period: "2012 - 2021",
          summary:
            "顧客要件の整理からデザイン、実装、公開までを担当し、複数のWeb制作プロジェクトを進行。",
        },
        {
          company: "Web制作会社",
          position: "Webデザイナー / HTML実装 / Webディレクター",
          period: "キャリア初期",
          summary:
            "ビジュアルデザイン、実装、進行管理を横断する現在のものづくりの基礎を築く。",
        },
      ],
    },
    skills: {
      title: "つくるためのスタック。",
      description:
        "軸にあるのはTypeScript。表側はReact / Next.js、裏側はNode.js、API、非同期ジョブ、AWS、そして本番で動くAIワークフロー。",
      core: "コア技術",
      additional: "その他の経験",
    },
  },
} as const;

const coreSkills = [
  {
    name: { en: "Applied AI / LLM Integration", ja: "AI・LLM連携" },
    icon: <SiOpenai />,
  },
  { name: { en: "TypeScript", ja: "TypeScript" }, icon: <SiTypescript /> },
  { name: { en: "React", ja: "React" }, icon: <FaReact /> },
  { name: { en: "Next.js", ja: "Next.js" }, icon: <SiNextdotjs /> },
  { name: { en: "Node.js", ja: "Node.js" }, icon: <FaNodeJs /> },
  { name: { en: "AWS Lambda", ja: "AWS Lambda" }, icon: <SiAwslambda /> },
  { name: { en: "MySQL", ja: "MySQL" }, icon: <SiMysql /> },
  { name: { en: "Figma", ja: "Figma" }, icon: <FaFigma /> },
] as const;

const additionalSkills = [
  { name: { en: "JavaScript", ja: "JavaScript" }, icon: <FaJs /> },
  { name: { en: "HTML 5", ja: "HTML 5" }, icon: <FaHtml5 /> },
  { name: { en: "CSS 3", ja: "CSS 3" }, icon: <FaCss3 /> },
  {
    name: { en: "Tailwind CSS", ja: "Tailwind CSS" },
    icon: <SiTailwindcss />,
  },
  { name: { en: "Ruby", ja: "Ruby" }, icon: <SiRuby /> },
  {
    name: { en: "Ruby on Rails", ja: "Ruby on Rails" },
    icon: <SiRubyonrails />,
  },
  {
    name: { en: "Adobe Illustrator", ja: "Adobe Illustrator" },
    icon: <SiAdobeillustrator />,
  },
  {
    name: { en: "Adobe Photoshop", ja: "Adobe Photoshop" },
    icon: <SiAdobephotoshop />,
  },
] as const;

type SkillGridProps = {
  items: ReadonlyArray<{
    name: Record<Locale, string>;
    icon: ReactNode;
  }>;
  locale: Locale;
};

const SkillGrid: FC<SkillGridProps> = ({ items, locale }) => {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-6">
      {items.map((item) => (
        <li
          key={item.name.en}
          className="group flex min-h-[150px] flex-col items-center justify-center gap-4 rounded-xl border border-transparent bg-[#232329] p-5 text-center transition-colors duration-300 hover:border-accent/40"
        >
          <div className="text-5xl transition-colors duration-300 group-hover:text-accent">
            {item.icon}
          </div>
          <span className="text-sm font-medium leading-snug text-white/65 transition-colors duration-300 group-hover:text-white">
            {item.name[locale]}
          </span>
        </li>
      ))}
    </ul>
  );
};

const Resume: FC = () => {
  const { locale } = useLanguage();
  const text = resumeCopy[locale];

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
            <TabsTrigger value="experience">{text.tabs.experience}</TabsTrigger>
            <TabsTrigger value="skills">{text.tabs.skills}</TabsTrigger>
            <TabsTrigger value="about">{text.tabs.about}</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{text.experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {text.experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {text.experience.items.map((item) => (
                      <li
                        key={`${item.period}-${item.position}`}
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
                  <h3 className="text-4xl font-bold">{text.skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {text.skills.description}
                  </p>
                </div>
                <div className="space-y-10">
                  <section>
                    <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                      {text.skills.core}
                    </h4>
                    <SkillGrid items={coreSkills} locale={locale} />
                  </section>
                  <section>
                    <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                      {text.skills.additional}
                    </h4>
                    <SkillGrid items={additionalSkills} locale={locale} />
                  </section>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">{text.about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {text.about.description}
                </p>
                <ul className="grid grid-cols-1 gap-4 xl:grid-cols-2 max-w-[620px]">
                  {text.about.info.map((item) => (
                    <li
                      key={item.fieldName}
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
