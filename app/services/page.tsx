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
      "I can help you build a website that is fast, secure, and easy to use.",
    href: "/web-development",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I can help you design a website that is fast, secure, and easy to use.",
    href: "/ui-ux-design",
  },
  {
    num: "03",
    title: "Web Design",
    description:
      "I can help you design a website that is fast, secure, and easy to use.",
    href: "/web-design",
  },
  {
    num: "04",
    title: "Mobile Design",
    description:
      "I can help you design a mobile app that is fast, secure, and easy to use.",
    href: "/mobile-design",
  },
];

const Services: FC = () => {
  return (
    <section>
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
