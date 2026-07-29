"use client";

import type { FC } from "react";
import { TypeAnimation } from "react-type-animation";

const HeroIdentity: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl font-medium text-white/80">
        <span className="sr-only">
          Hello, I&apos;m Sixth Project, a senior product engineer.
        </span>
        <span aria-hidden="true">
          Hello, I&apos;m{" "}
          <TypeAnimation
            className="inline-block min-w-[230px] text-left text-accent"
            sequence={[
              "Sixth Project.",
              1600,
              "a product engineer.",
              1600,
              "a SaaS builder.",
              1600,
              "an AI workflow builder.",
              1600,
              "a designer at heart.",
              1600,
            ]}
            wrapper="span"
            repeat={Number.POSITIVE_INFINITY}
            speed={45}
          />
        </span>
      </p>
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
        Senior Product Engineer · Japan
      </span>
    </div>
  );
};

export default HeroIdentity;
