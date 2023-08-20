'use client'
import { Skeleton } from "@mui/material";
import { nanoid } from "nanoid";
function SkeltonArray()
{
   const element =<div className="mx-4" >
   <Skeleton 
      variant="text"
      sx={{ 
      fontSize : '1rem'
      }}
   />
   </div>
      let content = []
      for (let index = 0; index < 12; index++) {
         content.push(<div key={nanoid(2)}>{element}</div>);
      }
   return content ;
}
const Indicator = () => {
  const content = SkeltonArray();
  return (
    <div  className="flex my-4 w-full">
        <div className="mx-4 ">
        <Skeleton 
         width={400}
         height={300}
         variant="rectangular"
         sx={{ 
            borderRadius : '35px'
        }}  
         />
        </div>
        <div className="w-5/6">
         {content.map(e=>e)}
        </div>
    </div>
  )
}

export default Indicator;
