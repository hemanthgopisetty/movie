'use client'

import { useEffect,useState } from "react";
import { useInView } from "react-intersection-observer";
import { CircularProgress } from "@mui/material";
import { fetchall } from "@/lib/Actions/fetchall";
import { nanoid } from "nanoid";
import Grid from "./Grid";
const InfiniteScrool = () => {

  const [data,setData]=useState([]);
  const [page,setPage]=useState(1);
  const {ref,inView}  =useInView();
  
  const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve,ms))

  const loadData = async ()=>{
    await delay(3500)
    const newData  = await fetchall(page+1);
    setData((prevData)=>[...prevData,...newData]);
    setPage((prevPage)=>prevPage+1);
  }

  useEffect(()=>{
    if(inView)
    {
      loadData();
    }
  },[inView])

  return (
    <>
      <Grid  data={data} key={nanoid(6)}/>
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <CircularProgress size={35}/>
      </div>
    </>
  )
}

export default InfiniteScrool

