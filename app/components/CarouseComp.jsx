'use client'
import { Carousel } from "@mantine/carousel"
import { baseURL } from "../constants/ImageConstant"
import Image from "next/image"
import Link from "next/link"
import { FcNext,FcPrevious } from "react-icons/fc";

const CarouseComp = ({data,flag}) => {
  return (
    <Carousel
          slideSize={200}
          slideGap={'xs'}
          align={'start'}
          loop={true}
          dragFree
          draggable
          withKeyboardEvents
          withIndicators
          nextControlIcon={
          <FcNext size={25}  className="rounded-full bg-white/95 mr-2 "/>}
          previousControlIcon={
          <FcPrevious size={25}  className="rounded-full bg-white/95 ml-2 "/>}
          styles={{
           control : {
             border : 'none',
            },
          }}
           >
          {

         data.map((e)=>
          {
            return(
             <Carousel.Slide  key={e.id}>
              <div 
                className="pt-2 flex flex-col gap-2 m-2"
              >

                <Link href={`${e.id}`}>
                <div className="w-[225px] h-[300px] relative">
                   <Image 
                    src={`${baseURL}${e.poster_path}`}
                    priority
                    fill
                    quality={100}
                    alt="Movie Image"
                    sizes="(min-width: 1024px) 100vw,(min-width: 768px) 100vw,(min-width: 1440px) 100vw"
                    className="object-fill rounded-3xl hover:opacity-75  hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-400"
                    />
                </div>
                </Link>
                <div className=" h-7 w-[200px]">
                  <p className="text-xl truncate text-white/90 h-full w-full ">
                    {
                     flag.movie===true
                      ?
                     e.title?.length>0 ?e.title:"N/A"
                      :
                     e.name?.length>0 ?e.name:"N/A"
                    }
                  </p>
                </div>
                  <p>{
                  flag.movie===true
                  ?
                  e.release_date
                  :
                  e.first_air_date
                  }</p>
              </div>
              </Carousel.Slide>  
             )
          }   
         )
      }
       </Carousel>
  )
}

export default CarouseComp
