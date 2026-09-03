"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { sendGAEvent } from "@next/third-parties/google";
import { motion } from "framer-motion";
import type { FC } from "react";
import { FormEvent, useRef, useState } from "react";
import { FaClock, FaGlobe, FaMapMarker } from "react-icons/fa";

import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  en: {
    heading: "Let’s make something useful.",
    introduction:
      "A product to shape, a workflow to untangle, or an AI idea that needs to survive production—I’d like to hear about it. Open to part-time and project-based work: hybrid in Japan, remote internationally.",
    requiredError: "Name, email, and message are required.",
    success: "Thank you. Your message has been sent.",
    genericError: "Your message could not be sent. Please try again.",
    fields: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Work email",
      company: "Company or organization",
      companyPlaceholder: "Company name",
      optional: "Optional",
      projectType: "Project type",
      projectPlaceholder: "Select a project type",
      context: "Project context",
      contextPlaceholder: "What are you building or trying to improve?",
      submit: "Send message",
      submitting: "Sending...",
    },
    info: [
      { title: "Location", description: "Chiba, Japan" },
      {
        title: "Collaboration",
        description: "Hybrid in Japan · Remote worldwide",
      },
      {
        title: "Time zone",
        description: "JST · European overlap available",
      },
    ],
  },
  ja: {
    heading: "使われるものを、一緒につくろう。",
    introduction:
      "形にしたいプロダクト、ほどきたい業務、プロトタイプで終わらせたくないAIがあれば、ぜひ聞かせてください。国内はハイブリッド、海外はリモートで、副業・プロジェクト単位のご相談を承ります。",
    requiredError: "お名前、メールアドレス、ご相談内容を入力してください。",
    success: "ありがとうございます。メッセージを送信しました。",
    genericError: "送信できませんでした。時間をおいて再度お試しください。",
    fields: {
      name: "お名前",
      namePlaceholder: "お名前を入力",
      email: "メールアドレス",
      company: "会社・組織名",
      companyPlaceholder: "会社名を入力",
      optional: "任意",
      projectType: "ご相談の種類",
      projectPlaceholder: "ご相談の種類を選択",
      context: "ご相談内容",
      contextPlaceholder: "つくりたいもの、改善したいことをお聞かせください",
      submit: "メッセージを送る",
      submitting: "送信中...",
    },
    info: [
      { title: "拠点", description: "千葉県・日本" },
      { title: "連携方法", description: "国内ハイブリッド・海外リモート" },
      { title: "タイムゾーン", description: "日本標準時（JST）" },
    ],
  },
} as const;

const infoIcons = [
  <FaMapMarker key="location" />,
  <FaGlobe key="remote" />,
  <FaClock key="time" />,
];

const serviceOptions = [
  {
    value: "Product Engineering",
    label: { en: "Product Engineering", ja: "プロダクト開発" },
  },
  {
    value: "Applied AI & Automation",
    label: { en: "Applied AI & Automation", ja: "AI活用・業務自動化" },
  },
  {
    value: "Technical Review & Advisory",
    label: { en: "Technical Review & Advisory", ja: "技術レビュー・相談" },
  },
  { value: "Other", label: { en: "Other", ja: "その他" } },
] as const;

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  website: string;
};

type AlertMessage = {
  type: "success" | "error" | null;
  message: string;
};

const Contact: FC = () => {
  const { locale } = useLanguage();
  const text = copy[locale];
  const hasTrackedFormStart = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState<AlertMessage>({
    type: null,
    message: "",
  });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    website: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const handleFormFocus = () => {
    if (hasTrackedFormStart.current) {
      return;
    }

    hasTrackedFormStart.current = true;
    sendGAEvent("event", "contact_form_start");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 簡易バリデーション
    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage({
        type: "error",
        message: text.requiredError,
      });
      return;
    }

    // アラートメッセージをクリア
    setAlertMessage({ type: null, message: "" });

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        sendGAEvent("event", "contact_form_submit_success", {
          project_type: formData.service || "not_selected",
        });
        setAlertMessage({
          type: "success",
          message: text.success,
        });

        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
          website: "",
        });
      } else {
        throw new Error(
          locale === "ja" ? text.genericError : data.error || text.genericError,
        );
      }
    } catch (error) {
      sendGAEvent("event", "contact_form_submit_error");
      setAlertMessage({
        type: "error",
        message: error instanceof Error ? error.message : text.genericError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="relative flex flex-col gap-6 rounded-xl bg-[#27272c] p-6 sm:p-10"
              onSubmit={handleSubmit}
              onFocus={handleFormFocus}
            >
              <h1 className="text-4xl text-accent">{text.heading}</h1>
              {alertMessage.type && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`p-4 mb-4 rounded-md ${
                    alertMessage.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {alertMessage.message}
                </div>
              )}
              <p className="text-white/60">{text.introduction}</p>
              <div
                className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="website">Website</label>
                <Input
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2" htmlFor="name">
                  <span className="text-sm font-medium text-white/75">
                    {text.fields.name} <span className="text-accent">*</span>
                  </span>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={text.fields.namePlaceholder}
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2" htmlFor="email">
                  <span className="text-sm font-medium text-white/75">
                    {text.fields.email} <span className="text-accent">*</span>
                  </span>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </label>
                <label
                  className="flex flex-col gap-2 md:col-span-2"
                  htmlFor="company"
                >
                  <span className="text-sm font-medium text-white/75">
                    {text.fields.company}
                    <span className="ml-2 text-white/35">
                      {text.fields.optional}
                    </span>
                  </span>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={text.fields.companyPlaceholder}
                    autoComplete="organization"
                    maxLength={120}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-white/75">
                  {text.fields.projectType}
                </span>
                <Select
                  value={formData.service}
                  onValueChange={handleServiceChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={text.fields.projectPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{text.fields.projectType}</SelectLabel>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label[locale]}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <label className="flex flex-col gap-2" htmlFor="message">
                <span className="text-sm font-medium text-white/75">
                  {text.fields.context} <span className="text-accent">*</span>
                </span>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-[200px]"
                  placeholder={text.fields.contextPlaceholder}
                  maxLength={5000}
                  required
                />
              </label>
              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={isSubmitting}
              >
                {isSubmitting ? text.fields.submitting : text.fields.submit}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {text.info.map((item, index) => (
                <li key={item.title} className="flex gap-6 items-center">
                  <div className="w-12 h-12 xl:w-16 xl:h-16 flex items-center justify-center rounded-md bg-[#333338] text-accent">
                    <div className="text-2xl">{infoIcons[index]}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
