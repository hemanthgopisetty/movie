import Image from "next/image";
import InputHome from "./InputHome";
const Banner = ({bgimg}) => {
  return (
    <div className="w-full h-[450px] lg:h-[692px] flex items-center relative bg-slate-900">
        
      
      <div className="w-full h-full absolute top-0 left-0 bottom-0 overflow-hidden opacity-30">
          <Image 
            fill
            src={`${bgimg}`}
            priority 
            alt="Trending Movie/Shows"
            quality={100}
            sizes="(min-width: 1024px) 100vw"
            className="object-cover"
          />
          <div className="w-full h-[250px] absolute  bottom-0 left-0 
           bg-gradient-to-b to-slate-900 from-[10%]  
           from-transparent to-[90%] "> 
      </div>
      </div>
      
      

    <div className="w-full max-w-6xl px-[20px] mx-auto text-white font-medium backdrop-blur-none felx items-center justify-center">
          <div className="flex flex-col items-center text-center relative mx-auto max-w-[800px] ">
              <span className="text-8xl">Welcome</span>
              <span className="text-3xl text-white/70">Explore Movies,TV Shows</span>
          </div>
          <InputHome  />
      </div>
    </div>
  )
}

export default Banner
