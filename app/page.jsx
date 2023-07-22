import { options } from "./constants/Options"
import { baseURL } from "./constants/ImageConstant";

import Banner from "./components/Banner";


import dynamic from "next/dynamic";
import { Suspense } from "react";
import Indicator from "./components/Indicator";

const Carou = dynamic(()=>import('./components/Carou'),{ssr:false,
  loading : ()=><Indicator />
})

async function getTrending()
{
  const res = await fetch('https://api.themoviedb.org/3/trending/all/day', options) ;
  const data = await res.json();
  const backdrop = baseURL+data.results[Math.floor(Math.random()*20)].backdrop_path;
  return{
    bgimg : backdrop ,
    movies  : data.results
  } ;
}
export default async function Home() {
  const {bgimg,movies} = await getTrending();
  // console.log(movies)
  return (
    <>
    <Banner bgimg={bgimg}/>
     <div className="text-white">
       <Suspense >
        <Carou title={'Trending'} movies={movies}/>
        <Carou title={'Whats Popular'} movies={movies}/>
        <Carou title={'Top Rated'} movies={movies}/>
       </Suspense>
     </div>
    </>
  )
}
/**
 * 
 */