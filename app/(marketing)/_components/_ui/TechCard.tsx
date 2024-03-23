import React from 'react'
import { IconType } from 'react-icons';

interface Cardprops {
    Icon:IconType,
    title:string,
    description:string
}

const TechCard = (
  {Icon, title, description}: Cardprops
) => {
  return (
    <div className='
       mt-10 lg:max-w-[30%] sm:w-full max-sm:w-[100%] mb-10 border p-5 bg-white rounded-md shadow-md
      '>
                <div className='
         flex flex-col gap-y-2
        '>
            <Icon size={30}/>
            <p className='
             text-2xl font-bold text-black
            '> 
               {title}
            </p>
            <p className='
             flex flex-wrap
            '>
                {description}
            </p>
        </div>
      </div>
  )
}

export default TechCard
