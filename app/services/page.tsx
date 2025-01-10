"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import type { FC } from "react";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "フロントエンドをメインで行っています。TypeScript, React, Next.js, Tailwind CSS, Firebase, Vercel などを使っています。",
    descriptionEn:
      "I mainly do front-end development. I use TypeScript, React, Next.js, Tailwind CSS, Firebase, Vercel, etc.",
    href: "#",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "もともとWebデザイナーとしてキャリアをスタートしました。現在はFigmaを使ってデザインを行っています。",
    descriptionEn:
      "I started my career as a web designer. I currently design using Figma.",
    href: "#",
  },
  {
    num: "03",
    title: "Web Design",
    description:
      "現在はFigmaをメインですが、過去にはAdobe XD, Photoshop, Illustrator などを使ってデザインを行っていました。",
    descriptionEn:
      "I currently use Figma, but in the past I designed using Adobe XD, Photoshop, Illustrator, etc.",
    href: "#",
  },
  {
    num: "04",
    title: "Project Management",
    description:
      "グロースエンジニアとして、プロジェクトマネジメントも行っています。Notion, Slack, GitHub などを使っています。",
    descriptionEn:
      "As a growth engineer, I also do project management. I use Notion, Slack, GitHub, etc.",
    href: "#",
  },
];

const Services: FC = () => {
  return (
    <section>
      <title>Services | Sixth Project Portfolio</title>
      <meta
        name="description"
        content="I mainly focus on front-end development with an emphasis on UI/UX. I strive to incorporate the latest technologies in my development."
      />
      <div className="container mx-auto">
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
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex items-center justify-between">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  href={service.href}
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.descriptionEn}</p>
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
