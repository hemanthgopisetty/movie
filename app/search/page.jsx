import { options } from "../constants/Options";
import { baseURL } from "../constants/ImageConstant";
import Image from "next/image";
const getSearch = async (q)=>{
 const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${q}`,options);
 const data = await res.json();
 console.log(data.results[0]?.backdrop_path);
 return data.results;
}
const page = async ({searchParams}) => {
  const decoded = decodeURI(searchParams.q);
  const data =await getSearch(decoded);
  return (
    <div className='text-white min-h-screen flex items-center justify-center'>
      <div className="grid grid-cols-4 grid-flow-row-dense gap-8 my-28">
      {data?.length===0?<p>Sorry</p>:data.map((e)=>{
        return( 
         <div key={e.id}>
            <div className="w-[200px] h-[300px] relative">
              <Image 
               src={`${baseURL}${e.poster_path}`}
               priority
               fill
               sizes="(min-width: 1024px) 100vw"
               alt="Movie Image"
               className="object-fill rounded-3xl hover:opacity-75  hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-400"
              />
            </div>
            <div className="h-6 w-[200px] mt-2">
                <p className="text-xl truncate text-white/50 h-full w-full ">
                  {e.title?.length>0 ?e.title:"N/A"}
                </p>
            </div>
            <p className="text-white/80">{e.release_date}</p>
         </div>
        )
       })}
      </div>
    </div>
  )
}

export default page;
