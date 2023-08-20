
import Image from "next/image"
import {useState } from "react"
import { baseURL } from "../constants/ImageConstant"
const ImageComp = ({e}) => {
    const [load,setLoad] = useState(true);
  return (
    <div className="w-[225px] h-[300px] relative"> 
                   <Image 
                    src={`${baseURL}${e.poster_path}`}
                    priority
                    fill
                    quality={100}
                    alt="Movie Image"
                    sizes="(min-width: 1024px) 100vw,(min-width: 768px) 100vw,(min-width: 1440px) 100vw"
                    className={`object-fill rounded-xl hover:opacity-75  hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-400
                     ${
                       load 
                       ? "scale-110 blur-2xl rounded-3xl m-4"
                       : "scale-100 blur-0"
                     }
                    `}
                    onLoadingComplete={()=>setLoad(false)}
                    />
    </div>
  )
}

export default ImageComp
