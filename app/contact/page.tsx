"use client";

import type { FC } from "react";
import { useState, FormEvent } from "react";
import { FaMapMarker } from "react-icons/fa";
import { motion } from "framer-motion";
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
import { Button } from "@/components/ui/button";

const info = [
  {
    icon: <FaMapMarker />,
    title: "Address",
    description: "Chiba, Japan",
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
        message: "名前、メール、メッセージは必須項目です",
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
          message:
            "お問い合わせありがとうございます。メッセージが送信されました。Thank you for your inquiry. Your message has been sent.",
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
        throw new Error(data.error || "送信に失敗しました");
      }
    } catch (error) {
      setAlertMessage({
        type: "error",
        message: error instanceof Error ? error.message : "送信に失敗しました",
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
        content="I mainly focus on front-end development with an emphasis on UI/UX. I strive to incorporate the latest technologies in my development."
      />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-e-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">{`Let's work together`}</h3>
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
                I&apos;m always open to discussing product design work or
                creative partnerships.
                <br />
                何かごようの際はお気軽にお問い合わせください。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Firstname"
                  required
                />
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Lastname"
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
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
                    <SelectItem value="Web Design">Web Design</SelectItem>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
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
                {isSubmitting ? "送信中..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            {/* info */}
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
