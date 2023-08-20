'use client'
import { useState } from "react";
import dynamic from "next/dynamic";
import Indicator from "./Indicator";
import ButtonCarousel from "./ButtonCarousel";

const CarouseComp = dynamic(()=>import('./CarouseComp'),
  {
   ssr:false,
   loading : ()=><Indicator/>
  }
)

const Carou = ({title,datam,datat,key}) => {
  const [flag,setFlag] = useState({
    "movie" : true,
    "tv"    : false
  });

  function handleMovieFlag()
  {
    setFlag({
      "movie" : true ,
      "tv"    : false
    })
  }
  function handleTVFlag()
  {
    setFlag({
      "movie" : false ,
      "tv" : true 
    })
  }
  return (

    <div className=" h-[350px] w-full mb-28 mx-6" key={key}>

     <div className="flex justify-between w-full">
        <p className="text-2xl mx-2 px-2 text-white/80">{title}</p>
        <div className="rounded-lg">
          <ButtonCarousel 
           handleMovieFlag={handleMovieFlag} handleTVFlag={handleTVFlag}
           flag={flag}
          />
        </div>
     </div>

      <div className=" h-full bg-slate-900 my-2">
         {flag.movie===true?<CarouseComp  data={datam} flag={flag}/>:<CarouseComp data={datat} flag={flag}/>}
      </div>
    </div>
  )
}

export default Carou;
