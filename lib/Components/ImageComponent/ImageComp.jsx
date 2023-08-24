'use client'
import Image from "next/image"
import {useState } from "react"
import { baseURL } from "@/lib/constants/ImageConstant"
const ImageComp = ({e}) => {
    const [load,setLoad] = useState(true);
  return (
    <div className="w-[250px] h-[350px] relative"> 
                  {
                   e.poster_path===undefined
                   ?
                   <Image 
                    src="/no-poster.png"
                    priority
                    fill
                    quality={100}
                    alt="Movie Image"
                    sizes="(max-width: 1024px) 100vw,(max-width: 768px) 100vw,(max-width: 1440px) 100vw"
                    className={`object-fill rounded-xl hover:opacity-75  hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-400
                     ${
                       load 
                       ? "scale-95 blur-3xl m-2 grayscale"
                       : "scale-100 blur-0"
                     }
                    `}
                    onLoadingComplete={()=>setLoad(false)}
                    />
                    :
                    <Image 
                    src={`${baseURL}${e.poster_path}`}
                    priority
                    fill
                    quality={100}
                    alt="Movie Image"
                    sizes="(max-width: 1024px) 100vw,(max-width: 768px) 100vw,(max-width: 1440px) 100vw"
                    className={`object-fill rounded-xl hover:opacity-75  hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-400
                     ${
                       load 
                       ? "scale-95 blur-2xl m-2 grayscale"
                       : "scale-100 blur-0"
                     }
                    `}
                    onLoadingComplete={()=>setLoad(false)}
                    />
                  }
    </div>
  )
}

export default ImageComp
