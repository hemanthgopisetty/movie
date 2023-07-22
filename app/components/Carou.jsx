'use client'

import { Carousel } from "@mantine/carousel"
import { baseURL } from "../constants/ImageConstant"
import Image from "next/image"

const Carou = ({title,movies}) => {
  return (
    <div className="mx-8 h-[355px] my-10">
      <p className="text-xl mx-2 px-2 text-white/70">{title}</p>
      <div className="mx-8 h-full bg-slate-900 my-2">
       <Carousel 
        slideSize={225}
        slideGap={'xs'}
        loop
        dragFree
        draggable
        withKeyboardEvents
        withIndicators
       >
       {movies.map((e)=>{
        return(
          <Carousel.Slide>
            <div className="pt-2">
              <Image 
               src={`${baseURL}${e.poster_path}`}
               priority
               width={200}
               height={200}
               alt="Movie Image"
               className="object-contain"
              />
             <div className=" h-6 w-24">
              <p className="text-xl truncate text-white/50 h-full w-full">
                {e.title?.length>0 ?e.title:"N/A"}
              </p>
             </div>
              <p>{e.release_date}</p>
            </div>
          </Carousel.Slide>
        )
       })}
       </Carousel>
      </div>
    </div>
  )
}

export default Carou
