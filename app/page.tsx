import { Button } from '@/components/ui/button'
import { FC } from 'react'
import { MdOutlineEmail } from "react-icons/md";

//components
import Social from '@/components/Social';
import Photo from '@/components/Photo';

const Home: FC = () => {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className='flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Web Application Developer</span>
            <h1 className='h1'>
              Hello I'm<br /> <span className='text-accent'>Sixth Project</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
            I mainly focus on front-end development with an emphasis on UI/UX. I strive to incorporate the latest technologies in my development.
            </p>
            <div className='flex flex-col gap-8 items-center xl:flex-row'>
              <Button variant='outline' size='lg' className='uppercase flex items-center gap-2'>
                <span>hire me</span>
                <MdOutlineEmail className='text-xl' />
                </Button>
                <div className='mb-8 xl:mb-0'>
                  <Social containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500' />
                </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
        </div>
      </section>
  )
}

export default Home