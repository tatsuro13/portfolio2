import type { FC } from "react";
import type { IconType } from "react-icons";
import {
  SiAwslambda,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Technology = {
  name: string;
  icon: IconType;
};

const technologies: ReadonlyArray<Technology> = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Ruby", icon: SiRuby },
  { name: "Ruby on Rails", icon: SiRubyonrails },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "AWS Lambda", icon: SiAwslambda },
  { name: "MySQL", icon: SiMysql },
  { name: "OpenAI API", icon: SiOpenai },
];

const TechList: FC = () => (
  <ul className="flex shrink-0 items-stretch" aria-hidden="true">
    {technologies.map((technology) => {
      const Icon = technology.icon;

      return (
        <li
          key={technology.name}
          className="relative flex min-w-[106px] flex-col items-center justify-center px-6 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-px after:-translate-y-1/2 after:bg-accent/15 sm:min-w-[126px] sm:px-8"
        >
          <Icon className="tech-logo h-7 w-7 sm:h-8 sm:w-8" />
          <span className="mt-2 whitespace-nowrap font-mono text-[9px] font-semibold uppercase leading-none tracking-[0.12em] text-accent/65 sm:text-[10px]">
            {technology.name}
          </span>
        </li>
      );
    })}
  </ul>
);

const TechMarquee: FC = () => {
  return (
    <section className="tech-board" aria-label="Technology stack / 使用技術">
      <div className="container mx-auto flex items-center gap-5 py-4 sm:gap-8">
        <div className="relative z-10 shrink-0 border-r border-accent/30 pr-5 sm:pr-8">
          <p className="font-mono text-[10px] font-semibold uppercase leading-tight tracking-[0.18em] text-white/45 sm:text-xs">
            Build stack
          </p>
          <span className="mt-1.5 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-accent/70">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_8px_#ff621f]" />
            System online
          </span>
        </div>

        <p className="sr-only">
          {technologies.map((technology) => technology.name).join(", ")}
        </p>
        <div className="tech-marquee-window min-w-0 flex-1" aria-hidden="true">
          <div className="tech-marquee-track text-accent">
            <TechList />
            <TechList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
