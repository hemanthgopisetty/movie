import React from 'react'
import ImageComp from './ImageComp';
import Link from 'next/link';
const Grid = ({data}) => {
  return (
    <div className="grid grid-cols-4 grid-flow-row-dense gap-9">
        {
          data?.length===0?<span></span>:data.map((e)=>{
              return( 
                  <Link href={`${e.id}`}>
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
