import React from 'react'
import { FaReact, FaTools } from 'react-icons/fa'
import TechCard from './_ui/TechCard'
import { BsDatabase } from 'react-icons/bs'

const Technologies = () => {
  return (
    <div id='technologies'>
      <div>
        <h1 className='
         text-4xl text-black font-bold mt-10  mb-5
        '>
            Technologies
        </h1>
        <p className='
         text-xl font-semibold mb-5 text-gray-400
        '>
        I&apos;ve worked with a range a technologies in the web development world.
        </p>
      </div>
      
      <div className='
       lg:flex lg:justify-between mx-2 mb-[4rem] max-sm:flex-col 
      '>
      <TechCard Icon={FaReact} title='Front-End' description='Experience with HTML, CSS,Javascript, Tailwind CSS, React.js, Next.js.'/>
      <TechCard Icon={BsDatabase} title='Back-End' description='Experience with Node.js, Springboot.'/>
      <TechCard Icon={FaTools} title='Tools' description='Experience with VS Code, Github & Katalon.'/>
      </div>
    </div>
  )
}

export default Technologies
