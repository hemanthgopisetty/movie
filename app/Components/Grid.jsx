import React from 'react'
import ImageComp from './ImageComp';
import Link from 'next/link';
import { nanoid } from 'nanoid';
const Grid = ({data}) => {
  return (
    <div className="grid sm:grid-cols-2 sm:gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-5 lg:gap-8 grid-flow-row-dense" key={nanoid()}>
        {
          data?.length===0?<span></span>:data.map((e)=>{
              return( 
                  <Link href={`${e.id}`} key={nanoid(4)}>
                    <div key={e.id}>
                    <ImageComp  e={e} />
                      <div className="h-6 w-[200px] mt-2">
                        <p className="text-xl truncate text-white/50 h-full w-full ">
                        {
                         e.title?.length
                         ?
                         e.title
                         :
                         e.name?.length 
                         ? 
                         e.name 
                         : 
                         "N/A"
                        }
                        </p>
                      </div>
                      <p className="text-white/80">
                        {e.release_date?e.release_date:e.first_air_date}
                      </p>
                    </div>
                  </Link>
                 )
            }   
          )    
        }
       </div>
  )
}

export default Grid
