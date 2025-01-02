"use client";

import type { FC } from "react";
import { FaEnvelope, FaMapMarker, FaPhoneAlt } from "react-icons/fa";
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
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+123 456 7890",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "****@example.com",
  },
  {
    icon: <FaMapMarker />,
    title: "Address",
    description: "1234 Street Name, City Name, United States",
  },
];

const Contact: FC = () => {
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
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-e-xl">
              <h3 className="text-4xl text-accent">{`Let's work together`}</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Doneceget nunc nec nulla facilisis.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
              </div>
              <Select>
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
                className="h-[200px]"
                placeholder="Type your message here."
              />
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
