"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import type { ComponentProps, MouseEventHandler } from "react";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string;
  eventParams?: Record<string, string>;
};

const TrackedLink = ({
  eventName,
  eventParams = {},
  onClick,
  ...props
}: TrackedLinkProps) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    sendGAEvent("event", eventName, eventParams);
    onClick?.(event);
  };

  return <Link {...props} onClick={handleClick} />;
};

export default TrackedLink;
