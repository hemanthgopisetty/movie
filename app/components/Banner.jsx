import Image from "next/image";

const Banner = ({bgimg}) => {
  return (
    <div className="w-full h-[400px] lg:h-[650px] flex items-center relative bg-[#04152d] ">
        
      {/* Removed from the normal flow */}
      <div className="w-full h-full absolute top-0 left-0 opacity-30 overflow-hidden">
          <Image 
            fill
            src={`${bgimg}`}
            priority 
            alt="Trending Movie/Shows"
            quality={100}
          />
      </div>
      
      {/* Removed from the normal flow */}
      <div className="w-full h-[250px] absolute bottom-0 left-0  bg-gradient-to-br from-[rgba(4,21,45,0)] from-60%% to-slate-800 to-[77%]"></div>

      <div className="w-full max-w-6xl px-[20px] mx-auto">
        <div className="flex flex-col items-center text-center relative mx-auto max-w-[800px] text-white">
          <span>Welcome</span>
          <span>Explore Movies,TV Shows,People</span>
          <div className="flex  flex-col">
            <input type="text" placeholder="Search for a movie or Show" className="flex items-center w-full"/>
            <button className="">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
