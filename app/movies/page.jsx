import React from 'react'
import { fetchall } from '../../lib/Actions/fetchall'
import InfiniteScrool from '../components/InfinteScroll/InfiniteScrool';
import Grid from '../components/Grid/Grid';
const page = async () => {
  const data = await fetchall(1);
  return (
    <div className='flex items-center justify-center w-full h-full'>
     <div className='flex items-center justify-center flex-col'>
       {/* <Grid  data={data}/> */}
       <InfiniteScrool  da={data}/>
     </div>
    </div>
  )
}

export default page


/**
 * Infinte scrool for all the movies 
 * fetching the data on the sever as recommended by next team
 */