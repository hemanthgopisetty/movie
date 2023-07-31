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
  const url1 = 'https://api.themoviedb.org/3/trending/all/day'
  const url2 = 'https://api.themoviedb.org/3/movie/now_playing'
  const url3 = 'https://api.themoviedb.org/3/movie/popular'
  const url4 = 'https://api.themoviedb.org/3/movie/top_rated'
  const promises = [fetch(url1, options),fetch(url2, options),fetch(url3, options),fetch(url4, options)];
  const res=await Promise.all(promises);
  const trending    = await res[0].json();
  const now_playing = await res[1].json();
  const popular     = await res[2].json();
  const top_rated   = await res[3].json();
  const backdrop = baseURL+trending.results[Math.floor(Math.random()*20)].backdrop_path;

  return{
    bgimg : backdrop ,
    now_playing  : now_playing.results,
    popular    : popular.results,
    top_rated : top_rated.results
  } ;
}
export default async function Home() {
  const {bgimg,now_playing,popular,top_rated} = await getTrending();
  return (
    <>
    <Banner bgimg={bgimg}/>
     <div className="text-white mx-32 p-4 ">
       <Suspense >
        <Carou title={'Now Playing'} movies={now_playing} key={1}/>
        <Carou title={'Whats Popular'} movies={popular} key={2}/>
        <Carou title={'Top Rated'} movies={top_rated} key={3}/>
       </Suspense>
     </div>
    </>
  )
}
/**
 * 
 */