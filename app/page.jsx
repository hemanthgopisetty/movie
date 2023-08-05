import { options } from "./constants/Options"
import { baseURL } from "./constants/ImageConstant";
import Banner from "./components/Banner";
import Providers from "./Providers/Provider";
import MovieTvWrapper from "./MovieTvWrapper";

async function getTrending()
{
  const url1 = 'https://api.themoviedb.org/3/trending/all/day'
  const res = await fetch(url1,options);
  const trending    = await res.json();
  const backdrop = baseURL+trending.results[Math.floor(Math.random()*20)].backdrop_path;

  return{
    bgimg : backdrop ,
  } ;
}
export default async function Home() {
  const {bgimg} = await getTrending();
  return (
    <>
    <Banner bgimg={bgimg}/>

    <Providers>
      <MovieTvWrapper />
    </Providers>
    
    </>
  )
}
/**
 * 
 */