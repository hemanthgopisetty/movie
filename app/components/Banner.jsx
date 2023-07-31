import Image from "next/image";
import InputHome from "./InputHome";
const Banner = ({bgimg}) => {
  return (
    <div className="w-full h-[400px] lg:h-[670px] flex items-center relative bg-[#04152d] ">
        
      
      <div className="w-full h-full absolute top-0 left-0 bottom-0 overflow-hidden opacity-40 ">
          <Image 
            fill
            src={`${bgimg}`}
            priority 
            alt="Trending Movie/Shows"
            quality={100}
            sizes="(min-width: 1024px) 100vw"
            className="object-fill opacity-90"
          />
      </div>
      
      <div className="w-full h-[300px] absolute  bottom-0 left-0  bg-gradient-to-b from-slate-100/5 from-[5.65%]  to-slate-800/40 to-[77.9%]"> 
      </div>

    <div className="w-full max-w-6xl px-[20px] mx-auto text-red-50 font-medium backdrop-blur-none felx items-center justify-center">
          <div className="flex flex-col items-center text-center relative mx-auto max-w-[800px] ">
              <span className="text-8xl">Welcome</span>
              <span className="text-2xl text-white/50">Explore Movies,TV Shows,People</span>
          </div>
          <InputHome  />
      </div>
    </div>
  )
}

export default Banner
