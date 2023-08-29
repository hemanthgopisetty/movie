import { options } from "@/lib/constants/Options";
import ImageComp from "../Components/ImageComp";

const getSearch = async (q)=>{
 const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${q}`,options);
 const data = await res.json();
 return data.results;
}
const page = async ({searchParams}) => {
  const decoded = decodeURI(searchParams.q);
  const data =await getSearch(decoded);
  return (
    <div className="flex flex-col gap-2 text-white mt-24 ">
      <p className="mx-24 text-2xl font-bold mb-3">
        Search Results for <q>{searchParams.q}</q>
      </p>
      <div className='flex items-center justify-center'>
      <div className="grid grid-cols-4 grid-flow-row-dense gap-9">
      {data?.length===0?<p>Sorry</p>:data.map((e)=>{
        return( 
         <div key={e.id}>
            <ImageComp  e={e} />
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
    </div>
  )
}

export default page;
