"use client";

import type { FC } from "react";
import CountUp from "react-countup";

const stats = [
  {
    title: "Projects completed",
    num: 32,
  },
  {
    title: "Technology mastered",
    num: 6,
  },
  {
    title: "Years of Experience",
    num: 14,
  },
  {
    title: "Code Commits",
    num: 500,
  },
];

const Stats: FC = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 gap-4 justify-center items-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${item.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                >
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
