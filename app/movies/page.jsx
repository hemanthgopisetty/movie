import React from 'react'
import { fetchall } from '@/lib/Actions/fetchall';
import InfiniteScrool from '../Components/InfiniteScrool';
import Grid from '../Components/Grid';
const page = async () => {
  const data = await fetchall(1);
  return (
    <div className='flex items-center justify-center w-full h-full'>
     <div className='flex items-center justify-center flex-col w-full h-full gap-2'>
      <Grid data={data}/>
      <InfiniteScrool  />
      </div>
    </div>
  )
}

export default page


/**
 * Infinte scrool for all the movies 
 * fetching the data on the sever as recommended by next team
 */