import { baseURL } from "@/lib/constants/ImageConstant";
import { options } from "@/lib/constants/Options";
import Banner from "../lib/Components/BannerComponent/Banner";
import MovieTvWrapper from "../lib/Components/MovieTVComponent/MovieTvWrapper";


async function getTrending()
{
  const url1 = 'https://api.themoviedb.org/3/trending/all/day' ;
  const res = await fetch(url1,options);
  const trending    = await res.json();
  const backdrop = baseURL+trending.results[Math.floor(Math.random()*15)].backdrop_path;

  return{
    bgimg : backdrop ,
  } ;
}
export default async function Home() {
  const {bgimg} = await getTrending();
  return (
    <>
    <Banner bgimg={bgimg}/>
      <MovieTvWrapper />
    </>
  )
}

/**
 * 
 */