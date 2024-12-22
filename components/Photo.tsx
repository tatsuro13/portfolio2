"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FC } from "react"

const Photo: FC = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: 'easeIn'
       }}
      }
      >
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1,
        transition: {
          duration: 0.4,
          delay: 0.4,
          ease: 'easeInOut'
         }}
        }
         className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
          <Image
          src={'/assets/photo.png'}
          alt=''
          priority
          quality={100}
          fill
          className="object-contain"
           />
           <motion.svg
           className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] absolute top-0 left-0"
           xmlns={'http://www.w3.org/2000/svg'}
            viewBox={'0 0 500 500'}
            fill="transparent"
           >
            <motion.circle
            cx={250}
            cy={250}
            r={250}
            stroke={"#00ff99"}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{ strokeDasharray: [
              "15 120 25 25",
              "16 25 92 72",
              "4 25 22 22",
            ],
            rotate: [0, 360, 720]}}
            transition= {{
              duration: 20,
              repeat: Infinity,
              repeatType:"reverse",
            }}
         />
           </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo