'use client'
import { Skeleton } from "@mui/material";
const Indicator = () => {
  return (
    <div  className="flex my-4">
        <div className="mx-4 ">
        <Skeleton 
         width={130}
         height={130}
         variant="rectangular"
         sx={{
            bgcolor:'silver.400', 
            borderRadius : '35px'
        }}  
         />
        </div>
        <div className="w-5/6">
        <div className="mx-4 ">
        <Skeleton 
         variant="text"
         sx={{
            fontSize : '1rem'
         }}
        />
        </div>
        <div className="mx-4">
        <Skeleton 
         variant="text"
         sx={{
            fontSize : '1rem'
         }}
        />
        <Skeleton 
         variant="text"
         sx={{
            fontSize : '1rem'
         }}
        />
        <Skeleton 
         variant="text"
         sx={{
            fontSize : '1rem'
         }}
        />

        </div>
        </div>
    </div>
  )
}

export default Indicator;
