import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about'>
      <div className='
       text-4xl font-bold mt-10
      '>
        About Me
      </div>
      <div className='w-full p-5 items-center h-auto mt-10 sm:flex sm:flex-col sm:gap-y-10 flex gap-x-14 relative max-sm:flex-col lg:flex-row'>

      <Avatar className='w-[15rem] h-[15rem] sm:w-[12rem] sm:h-[12rem] max-sm:w-[11rem] max-sm:h-[11rem] border-solid border-4 border-slate-800 max-sm:mb-[4rem]'>
        <AvatarImage src="https://github.com/VenkataShivaPrasad.png" />
        <AvatarFallback>NV</AvatarFallback>
      </Avatar>
      <div>
      <p className='text-2xl sm:text-center max-sm:text-center'>
        Hi 👋, I&apos;m <span className='font-bold'>Venkata Shiva Prasad </span><br />
        <br />
        Experienced Full Stack Developer with over 2 years of experience. Passionate about delivering high-quality 
        web solutions with a strong foundation in Node.js. Committed to writing clean code, providing exceptional user experiences, 
        and staying updated with industry trends for innovative solutions.
      </p>
      <Button className=' my-10  shadow-md w-[8rem] flex max-sm:m-auto sm:m-auto sm:mt-10 max-sm:mt-10 rounded-md'>
        <Link
         href="https://www.cakeresume.com/s---Q7tFShTMkur8GVFBNyNBg--/venkata-shiva-prasad-nannuri"
         target='blank'
        >
        Download CV
        </Link>
      </Button>
      </div>
      </div>

    </div>
  )
}

export default About
