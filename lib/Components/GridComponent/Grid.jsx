import React from 'react'
import ImageComp from '../ImageComponent/ImageComp';
const Grid = ({data}) => {
  return (
    <div className="grid grid-cols-4 grid-flow-row-dense gap-9">
        {
          data?.length===0?<p>Sorry</p>:data.map((e)=>{
              return( 
                  <div key={e.id}>
                    <ImageComp  e={e} />
                    <div className="h-6 w-[200px] mt-2">
                    <p className="text-xl truncate text-white/50 h-full w-full ">
                      {e.title?.length>0 ?e.title:"N/A"}
                    </p>
                    </div>
                    <p className="text-white/80">{e.release_date}</p>
                  </div>
                 )
            }   
          )    
        }
       </div>
  )
}

export default Grid
