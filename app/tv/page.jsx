import InfiniteScrool from "../components/InfiniteScrool";
import { url } from "../constants/URLS";
const page = () => {
  const urll = url["Now Playing"].tv.route();
  return (
    <div>
      <InfiniteScrool url={urll} type={"tv"}/>
    </div>
  )
}

export default page
/**
 * Need to add infinite scroll
 * 
 */