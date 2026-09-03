"use client";

import type { FC } from "react";

import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  en: {
    role: "Product Engineer / Japan",
    scope: "Discover — Design — Build — Operate",
  },
  ja: {
    role: "Product Engineer / Japan",
    scope: "構想 — 設計 — 実装 — 運用",
  },
} as const;

const HeroIdentity: FC = () => {
  const { locale } = useLanguage();
  const text = copy[locale];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-center gap-3 xl:justify-start">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm">
          {text.role}
        </p>
      </div>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/50 sm:text-xs">
        {text.scope}
      </p>
    </div>
  );
};

export default HeroIdentity;
