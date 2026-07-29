import Link from "next/link";
import type { FC } from "react";

import { FaGithub, FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    icon: <FaGithub />,
    url: "https://github.com/tatsuro13",
    label: "GitHub profile",
  },
  {
    icon: <FaXTwitter />,
    url: "https://x.com/sixth13",
    label: "X profile",
  },
];

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const Social: FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => {
        return (
          <Link
            key={item.url}
            href={item.url}
            className={iconStyles}
            aria-label={item.label}
            target="_blank"
            rel="noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
