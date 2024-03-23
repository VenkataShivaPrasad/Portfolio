import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { SeparatorVertical } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <div className='
       w-full h-1 bg-black opacity-70 mt-[5rem] max-sm:mt-[3rem]
      '></div>
      <div className='
       flex gap-y-10 mt-10 p-2 justify-between max-sm:flex-col 
      '>
        <div className='
         flex flex-col gap-y-5 max-sm:gap-y-2 max-sm:items-center
        '>
            <h1 className='
             font-semibold text-gray-500
            '>
                CALL
            </h1>
            <p className='
             lg:text-xl text-black sm:text-[16px] max-sm:text-xl
            '>+91 8247420423</p>
        </div>

        <div className='
         flex flex-col gap-y-5 max-sm:gap-y-2 max-sm:items-center
        '>
            <h1 className='
             font-semibold text-gray-500'
             >
                EMAIL
            </h1>
            <p className='
             lg:text-xl text-black sm:text-[16px] max-sm:text-xl
            '>venkatashivaprasad.nannuri@gmail.com</p>
        </div>

        <div className='
         flex flex-col gap-y-5 max-sm:gap-y-2 max-sm:items-center
        '>
            <h1 className='
             font-semibold text-gray-500'
             >
                ADDRESS
            </h1>
            <p className='
             lg:text-xl text-black sm:text-[16px] max-sm:text-xl
            '>Hyderabad, India</p>
        </div>
      </div>
      <div className='
       flex justify-between items-center mt-[5rem] mb-[2rem] max-sm:flex-col 
      '>
            <h1 className='
             text-2xl font-semibold text-gray-400 max-sm:mb-10
            '>
                Innovating multiple project at a time
            </h1>

            <div className='
             flex gap-x-8 cursor-pointer items-center
            '>
                <Link
                 href="https://github.com/VenkataShivaPrasad"
                 target='blank'
                 className='
                  border rounded-full p-2 hover:bg-black hover:text-white
                 '
                >
                
                <IconBrandGithub size={35}/>
                </Link>
                <Link
                 href="https://www.linkedin.com/in/venkata-shiva-prasad-nannuri/"
                 target='blank'
                 className='
                  border rounded-full p-2 hover:bg-blue-700 hover:text-white
                 '
                >
                <IconBrandLinkedin size={35}/>
                </Link>
            </div>
      </div>
    </div>
  )
}

export default Contact
