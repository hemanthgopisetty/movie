'use client'

import { useEffect,useState } from "react";
import { useInView } from "react-intersection-observer";
import { CircularProgress } from "@mui/material";
import { fetchall } from "../../Actions/fetchall";
import Grid from "../GridComponent/Grid";
const InfiniteScrool = ({da}) => {

    const [data,setData]=useState(da);
    const [page,setPage]=useState(1);
    const {ref,inView} =useInView();
    console.log(data);
    const delay = (number)=>{
        return new Promise((resolve)=>setTimeout(resolve,number)) ;
    }
    const getData = async ()=>{
         await delay(1000);
        const nextPage = page+1;
        const res  = (await fetchall(page+1));
        setData((prev)=>[...prev,res]);
        setPage(nextPage);
    }

    useEffect(()=>{
       if(inView)
       {
          getData();
       }
    },[inView]);


  return (
    <div>
      <Grid data={data}/>
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <CircularProgress   size={20}/>
      </div>
    </div>
  )
}

export default InfiniteScrool

