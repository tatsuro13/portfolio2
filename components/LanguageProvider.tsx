"use client";

import { usePathname } from "next/navigation";
import {
  type FC,
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Locale = "en" | "ja";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const STORAGE_KEY = "sixth-project-locale";

const pageTitles: Record<Locale, Record<string, string>> = {
  en: {
    "/": "Product Engineer | Sixth Project",
    "/services": "Services | Sixth Project",
    "/resume": "Resume | Sixth Project",
    "/work": "Selected Work | Sixth Project",
    "/contact": "Contact | Sixth Project",
  },
  ja: {
    "/": "プロダクトエンジニア | Sixth Project",
    "/services": "できること | Sixth Project",
    "/resume": "経歴 | Sixth Project",
    "/work": "実績 | Sixth Project",
    "/contact": "お問い合わせ | Sixth Project",
  },
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
  children: ReactNode;
};

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const storedLocale = window.localStorage.getItem(STORAGE_KEY);

      if (storedLocale === "en" || storedLocale === "ja") {
        setLocaleState(storedLocale);
      }
    } catch {
      // Storage can be unavailable in strict privacy modes.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = pageTitles[locale][pathname] ?? pageTitles[locale]["/"];
  }, [locale, pathname]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);

    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
    } catch {
      // The switch still works for the current session without storage.
    }
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};

export default LanguageProvider;
