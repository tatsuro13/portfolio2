"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { FC } from "react";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
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
];

const Services: FC = () => {
  return (
    <section>
      <title>Services | Sixth Project Portfolio</title>
      <meta
        name="description"
        content="Product engineering, applied AI automation, technical leadership, and product design for B2B SaaS teams."
      />
      <div className="container mx-auto">
        <div className="max-w-[760px] mb-14 text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            How I help
          </span>
          <h1 className="mt-4 text-5xl xl:text-7xl">
            From product problem to production outcome.
          </h1>
          <p className="mt-6 text-lg text-white/60">
            I work across product, design, and engineering to ship software that
            improves real customer and operational workflows.
          </p>
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
                  aria-label={`Explore ${service.title}`}
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
