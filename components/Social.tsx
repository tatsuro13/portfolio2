import Link from "next/link";
import { FC } from "react"

import { FaGithub, FaXTwitter } from "react-icons/fa6";

const socials = [
    {
        icon: <FaGithub />,
        url: "https://github.com/tatsuro13"
    },
    {
        icon: <FaXTwitter />,
        url: "https://x.com/sixth13"
    },
]

type SocialProps = {
    containerStyles: string,
    iconStyles: string
}

const Social: FC<SocialProps> = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index) =>{
            return (
                <Link key={index} href={item.url} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social