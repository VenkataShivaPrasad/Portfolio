"use client"
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer,CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";



const Card = (
    {
        item
    } : {item:{
      id:number,
        title:string,
    description:string,
    imageURL: string,
    demo: string,
    code: string
    }[];
}) => {
  return (
    <div className="flex gap-5 flex-wrap justify-around max-sm:flex-col">
    {
        item.map((i)=>(

            <CardContainer key={i.id} className=" lg:w-[25rem] sm:w-[22rem] inter-var max-sm:w-full">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[100%] max-sm:w-[95%]  h-auto rounded-xl p-6 border ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {i.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm w-full max-h-[60px] mt-2 dark:text-neutral-300"
              >
                <span className="overflow-hidden">

                {i.description}
                </span>
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={i.imageURL}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={i.demo}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                    Try now →
                  
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <Link href={i.code}>
                  
                  <div className="flex items-center gap-2">
                    <IconBrandGithub size={20}/>
                    Source code
                  </div>
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))
    }
        </div>
  )
}

export default Card
