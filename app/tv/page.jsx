import { fetchall } from "@/lib/Actions/fetchall";
import InfiniteScrool from "../Components/InfiniteScrool";
import Grid from "../Components/Grid";
import { url } from "@/lib/constants/URLS";
const page = async() => {
  const urlt = url["Now Playing"].tv.route();
  const data = await fetchall(urlt,1);
  return (
    <div className='flex items-center justify-center w-full h-full'>
     <div className='flex items-center justify-center flex-col w-full h-full gap-2'>
      <Grid data={data}/>
      <InfiniteScrool  url={urlt}/>
      </div>
    </div>
  )
}

export default page
/**
 * Need to add infinite scroll
 * 
 */