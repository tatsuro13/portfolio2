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
import { motion } from "framer-motion";
import type { FC } from "react";
import { FormEvent, useState } from "react";
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

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface AlertMessage {
  type: "success" | "error" | null;
  message: string;
}

const Contact: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState<AlertMessage>({
    type: null,
    message: "",
  });
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 簡易バリデーション
    if (!formData.firstName || !formData.email || !formData.message) {
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
        setAlertMessage({
          type: "success",
          message: "Thank you. Your message has been sent.",
        });

        // フォームをリセット
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Your message could not be sent.");
      }
    } catch (error) {
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
      <title>Contact | Sixth Project Portfolio</title>
      <meta
        name="description"
        content="Discuss a remote B2B SaaS, TypeScript product engineering, or applied AI automation project with Sixth Project."
      />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-e-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">
                Have a workflow to improve?
              </h3>
              {alertMessage.type && (
                <div
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                />
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Work email"
                  required
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                />
              </div>
              <Select
                value={formData.service}
                onValueChange={handleServiceChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
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
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
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
