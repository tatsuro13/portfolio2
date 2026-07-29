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

const info = [
  {
    icon: <FaMapMarker />,
    title: "Location",
    description: "Chiba, Japan",
  },
  {
    icon: <FaGlobe />,
    title: "Collaboration",
    description: "Remote · Async-first",
  },
  {
    icon: <FaClock />,
    title: "Time zone",
    description: "JST · European overlap available",
  },
];

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
        message: "Name, email, and message are required.",
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
          message: "Thank you. Your message has been sent.",
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
        throw new Error(data.error || "Your message could not be sent.");
      }
    } catch (error) {
      sendGAEvent("event", "contact_form_submit_error");
      setAlertMessage({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your message could not be sent.",
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
              <h3 className="text-4xl text-accent">
                Have a workflow to improve?
              </h3>
              {alertMessage.type && (
                <div
                  role="status"
                  className={`p-4 mb-4 rounded-md ${
                    alertMessage.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {alertMessage.message}
                </div>
              )}
              <p className="text-white/60">
                Have a SaaS feature or operational workflow that needs to reach
                production? I&apos;m open to part-time and project-based remote
                work in B2B SaaS, TypeScript product development, and applied AI
                automation.
              </p>
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
                    Name <span className="text-accent">*</span>
                  </span>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2" htmlFor="email">
                  <span className="text-sm font-medium text-white/75">
                    Work email <span className="text-accent">*</span>
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
                    Company or organization
                    <span className="ml-2 text-white/35">Optional</span>
                  </span>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    autoComplete="organization"
                    maxLength={120}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-white/75">
                  Project type
                </span>
                <Select
                  value={formData.service}
                  onValueChange={handleServiceChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Project type</SelectLabel>
                      <SelectItem value="Product Engineering">
                        Product Engineering
                      </SelectItem>
                      <SelectItem value="Applied AI & Automation">
                        Applied AI & Automation
                      </SelectItem>
                      <SelectItem value="Technical Review & Advisory">
                        Technical Review & Advisory
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <label className="flex flex-col gap-2" htmlFor="message">
                <span className="text-sm font-medium text-white/75">
                  Project context <span className="text-accent">*</span>
                </span>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-[200px]"
                  placeholder="What are you building or trying to improve?"
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
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex gap-6 items-center">
                  <div className="w-12 h-12 xl:w-16 xl:h-16 flex items-center justify-center rounded-md bg-[#333338] text-accent">
                    <div className="text-2xl">{item.icon}</div>
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
