"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { FC } from "react";
import { BsArrowDownRight } from "react-icons/bs";

import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  en: {
    eyebrow: "What I do / 01",
    title: ["Across the stack.", "Close to the product."],
    introduction:
      "I move where the work needs me—shaping the product, designing the experience, writing the code, and staying for production.",
    explore: "Explore",
    services: [
      {
        num: "01",
        title: "Product Engineering",
        description:
          "I design, build, and operate customer-facing B2B SaaS—from website builders and booking platforms to APIs, integrations, and asynchronous workflows. I work across the frontend and TypeScript backend with production ownership in mind.",
        href: "/work",
      },
      {
        num: "02",
        title: "Applied AI & Automation",
        description:
          "I turn repetitive manual and outsourced operations into production-ready AI workflows. My work covers approval paths, exception handling, quality controls, observability, and human escalation—not just prototypes.",
        href: "/work",
      },
      {
        num: "03",
        title: "Technical Leadership",
        description:
          "I lead projects from problem framing and requirements through architecture, implementation, deployment, and operational adoption. I connect product decisions, engineering execution, and day-to-day business operations.",
        href: "/resume",
      },
      {
        num: "04",
        title: "Product Design & UX",
        description:
          "My background in web and UI design helps me shape clear user flows and interfaces that are both usable and feasible to build. I help teams turn ambiguity into practical, shippable product decisions.",
        href: "/work",
      },
    ],
  },
  ja: {
    eyebrow: "What I do / 01",
    title: ["スタックを越えて、", "プロダクトの近くで。"],
    introduction:
      "企画し、体験を設計し、コードを書き、本番運用まで。必要な場所へ動きながら、プロダクトを前に進める。",
    explore: "詳しく見る",
    services: [
      {
        num: "01",
        title: "プロダクトエンジニアリング",
        description:
          "Webサイトビルダーや予約管理、API、外部連携、非同期処理まで、顧客が使うB2B SaaSを設計・開発・運用します。フロントエンドとTypeScriptバックエンドを横断し、本番運用まで責任を持って進めます。",
        href: "/work",
      },
      {
        num: "02",
        title: "AI活用・業務自動化",
        description:
          "手作業や外注に頼る反復業務を、本番で使えるAIワークフローへ変えます。試作だけでなく、承認フロー、例外処理、品質管理、監視、人へのエスカレーションまで設計します。",
        href: "/work",
      },
      {
        num: "03",
        title: "技術リード",
        description:
          "課題整理と要件定義から、アーキテクチャ、実装、デプロイ、現場への定着までリードします。プロダクト判断と開発、日々の業務運用をひとつにつなぎます。",
        href: "/resume",
      },
      {
        num: "04",
        title: "プロダクトデザイン・UX",
        description:
          "Web・UIデザインの経験を活かし、使いやすく実装可能な導線と画面を設計します。曖昧な要望を整理し、実際にリリースできるプロダクト判断へ落とし込みます。",
        href: "/work",
      },
    ],
  },
} as const;

const Services: FC = () => {
  const { locale } = useLanguage();
  const text = copy[locale];

  return (
    <section>
      <div className="container mx-auto">
        <div className="max-w-[760px] mb-14 text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            {text.eyebrow}
          </span>
          <h1 className="mt-4 text-5xl xl:text-7xl">
            {text.title[0]}
            <br />
            <span className="text-accent">{text.title[1]}</span>
          </h1>
          <p className="mt-6 text-lg text-white/60">{text.introduction}</p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 0.2,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {text.services.map((service) => (
            <div
              key={service.num}
              className="flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex items-center justify-between">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  href={service.href}
                  aria-label={`${text.explore}: ${service.title}`}
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
