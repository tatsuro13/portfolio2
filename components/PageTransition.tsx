"use client";

import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';

type PageTransitionProps = {
    children: React.ReactNode
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageTransition: FC<PageTransitionProps> = ({children}) => {
    const pathName = usePathname();
  return (
    <AnimatePresence>
        <div key={pathName}>
            <motion.div
            initial={{ opacity: 1 }}
            animate={{
                opacity: 0,
                transition: {
                    delay: 0.1,
                    duration: 0.2,
                    ease: "easeInOut"
                }
            }}
            className='h-screen w-screen fixed top-0 left-0 bg-primary pointer-events-none'
            />
        {children}
        
        </div>
    </AnimatePresence>
  )
}

export default PageTransition