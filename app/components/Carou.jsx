'use client'

import { Carousel } from "@mantine/carousel"
import { baseURL } from "../constants/ImageConstant"
import Image from "next/image"
import Link from "next/link"
import { FcNext,FcPrevious } from "react-icons/fc";
import { useState } from "react";

const Carou = ({title,movies,key}) => {
  const [option,setOption] = useState(false);
  const optionHandler = ()=>{
    setOption(prev=>!prev);
  }
  return (
    <div className=" h-[355px] w-full mt-8 mb-20" ey={key}>
     <div className="flex justify-between w-full">
     <p className="text-2xl mx-2 px-2 text-white/80">{title}</p>
     <div className="rounded-lg">
      <button 
       className="
       bg-red-600/75 
       px-8 py-1 rounded-l-lg" >
       Movies
      </button>
      <button 
       className="
       bg-red-600/75 
       ml-[2px]
       px-6 py-1 rounded-r-lg" >
       TVShows
      </button>
     </div>
     </div>
      <div className=" h-full bg-slate-900 my-2">
       <Carousel 
        slideSize={225}
        slideGap={'xs'}
        align={'start'}
        loop 
        dragFree
        draggable
        withKeyboardEvents
        withIndicators
        nextControlIcon={
        <FcNext size={25}  className="rounded-full bg-zinc-100 hover:bg-transparent"/>
      }
        previousControlIcon={
        <FcPrevious size={25}  className="rounded-full bg-zinc-100 hover:bg-transparent"/>
      }
        nextControlLabel="Next"
        styles={{
          control : {
            border : 'none',
            backgroundColor : 'silver',
          },
        }}
       >
       {movies.map((e)=>{
        return(
            <Carousel.Slide>
              <div 
                className="pt-2 flex flex-col gap-2 m-2"
                key={e.id}
              >

              <Link href={'search'}>
              <Image 
               src={`${baseURL}${e.poster_path}`}
               priority
               width={200}
               height={200}
               alt="Movie Image"
               className="object-contain rounded-3xl hover:opacity-75  hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-400"
              />
              </Link>
              <div className=" h-6 w-[200px]">
                <p className="text-xl truncate text-white/50 h-full w-full ">
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
