'use client'
import { Carousel } from "@mantine/carousel"
import Link from "next/link"
import ImageComp from "./ImageComp"
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
          withControls={false}
           >
          {

         data.map((e)=>
          {
            return(
             <Carousel.Slide  key={e.id}  >
              <div 
                className="pt-2 flex flex-col gap-2 m-2"
              >


                 <Link href={`${e.id}`}>
                   <ImageComp e={e}/>
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
                  <p>
                  {
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
