"use client";

import type { FC } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

import HeroIdentity from "@/components/HeroIdentity";
import { useLanguage } from "@/components/LanguageProvider";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import TechMarquee from "@/components/TechMarquee";
import TrackedLink from "@/components/TrackedLink";
import { buttonVariants } from "@/components/ui/button";

const copy = {
  en: {
    title: "Think in products.",
    titleAccent: "Build in code.",
    description:
      "Moving between product strategy, UX, and code, I take B2B SaaS and applied AI from first sketch to production.",
    impactLabel: "Selected impact / 01",
    impactValue: "JPY 8.4M / year saved",
    impact:
      "One example of recurring cost reduction delivered through an AI workflow.",
    workCta: "See the work",
    contactCta: "Let’s talk",
  },
  ja: {
    title: "プロダクトを考え、",
    titleAccent: "コードで形にする。",
    description:
      "プロダクト設計、UX、コードを行き来しながら、B2B SaaSとAIを構想から本番運用までつくる。",
    impactLabel: "Selected impact / 01",
    impactValue: "年間840万円を削減",
    impact: "AIワークフロー導入による、外注費削減実績の一例。",
    workCta: "実績を見る",
    contactCta: "相談する",
  },
} as const;

const Home: FC = () => {
  const { locale } = useLanguage();
  const text = copy[locale];

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between pb-12 xl:flex-row xl:pb-16 xl:pt-5">
          <div className="order-2 text-center xl:order-none xl:text-left">
            <HeroIdentity />
            <h1 className="mt-5 text-accent">
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
            <p className="mt-6 max-w-[660px] font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white/80 sm:text-sm">
              {text.title}{" "}
              <span className="text-accent">{text.titleAccent}</span>
            </p>
            <p className="mb-6 mt-3 max-w-[660px] text-base leading-relaxed text-white/65 sm:text-lg">
              {text.description}
            </p>
            <div className="mb-8 max-w-[660px] border-y border-white/15 py-5 text-left sm:flex sm:items-center sm:gap-7">
              <div className="flex shrink-0 items-baseline gap-4">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {text.impactLabel}
                </span>
                <strong className="block whitespace-nowrap text-3xl font-semibold text-white sm:text-[32px]">
                  {text.impactValue}
                </strong>
              </div>
              <span className="mt-1 block text-sm leading-relaxed text-white/60 sm:mt-0">
                {text.impact}
              </span>
            </div>
            <div className="my-4 flex flex-col items-center gap-5 sm:flex-row xl:justify-start">
              <TrackedLink
                href="/work"
                eventName="cta_click"
                eventParams={{ cta_name: "view_work", cta_location: "home" }}
                className={buttonVariants({
                  size: "lg",
                  className: "flex items-center gap-2 uppercase",
                })}
              >
                <span>{text.workCta}</span>
                <BsArrowUpRight className="text-xl" />
              </TrackedLink>
              <TrackedLink
                href="/contact"
                eventName="cta_click"
                eventParams={{
                  cta_name: "discuss_project",
                  cta_location: "home",
                }}
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "flex items-center gap-2 uppercase",
                })}
              >
                <span>{text.contactCta}</span>
                <MdOutlineEmail className="text-xl" />
              </TrackedLink>
              <div className="mb-8 sm:mb-0 sm:ml-2">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <TechMarquee />
      <Stats />
    </section>
  );
};

export default Home;
