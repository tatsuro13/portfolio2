"use client";

import type { FC } from "react";

import { useLanguage } from "@/components/LanguageProvider";

const stats = {
  en: [
    {
      title: "Years in web and product development",
      value: "14+",
    },
    {
      title: "Years building B2B SaaS products",
      value: "4+",
    },
    {
      title: "Annual recurring cost reduction",
      value: "JPY 8.4M",
    },
    {
      title: "Selected projects",
      value: "34",
    },
  ],
  ja: [
    {
      title: "Web・プロダクト開発の経験",
      value: "14年+",
    },
    {
      title: "B2B SaaS開発の経験",
      value: "4年+",
    },
    {
      title: "年間の継続コスト削減",
      value: "840万円",
    },
    {
      title: "掲載プロジェクト",
      value: "34件",
    },
  ],
} as const;

const Stats: FC = () => {
  const { locale } = useLanguage();

  return (
    <section className="pb-12 pt-8 xl:pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {stats[locale].map((item) => {
            return (
              <div
                key={item.title}
                className="flex min-w-0 items-center gap-4 border-l border-white/10 pl-4"
              >
                <strong className="whitespace-nowrap text-4xl font-extrabold xl:text-[46px]">
                  {item.value}
                </strong>
                <p className="max-w-[140px] text-sm leading-snug text-white/65">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
