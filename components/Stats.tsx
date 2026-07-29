import type { FC } from "react";

const stats = [
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
                <strong className="whitespace-nowrap text-4xl xl:text-6xl font-extrabold">
                  {item.value}
                </strong>
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
