"use client";

import type { FC } from "react";

import { type Locale, useLanguage } from "@/components/LanguageProvider";

const options: Array<{ label: string; locale: Locale }> = [
  { label: "EN", locale: "en" },
  { label: "JP", locale: "ja" },
];

type LanguageSwitcherProps = {
  compact?: boolean;
};

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ compact = false }) => {
  const { locale, setLocale } = useLanguage();
  const groupLabel = locale === "ja" ? "表示言語" : "Display language";

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] p-1 ${
        compact ? "gap-0.5" : "gap-1"
      }`}
      role="group"
      aria-label={groupLabel}
    >
      {options.map((option) => {
        const isActive = option.locale === locale;

        return (
          <button
            key={option.locale}
            type="button"
            className={`rounded-full font-semibold tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              compact ? "px-3 py-1.5 text-xs" : "px-3.5 py-2 text-xs"
            } ${
              isActive
                ? "bg-accent text-primary"
                : "text-white/55 hover:text-white"
            }`}
            aria-pressed={isActive}
            aria-label={
              option.locale === "ja"
                ? "日本語に切り替える"
                : "Switch to English"
            }
            onClick={() => setLocale(option.locale)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
