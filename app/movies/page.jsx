import React from 'react'
import { fetchall } from '@/lib/Actions/fetchall';
import InfiniteScrool from '../Components/InfiniteScrool';
import Grid from '../Components/Grid';
import { url } from '@/lib/constants/URLS';
import { nanoid } from 'nanoid';
const page = async () => {
  const urlm = url['Now Playing'].movie.route();
  const data = await fetchall(urlm,1);
  return (
    <div className='flex items-center justify-center w-full h-full'>
     <div className='flex items-center justify-center flex-col w-full h-full gap-2'>
      <Grid data={data} key={nanoid(4)}/>
      <InfiniteScrool key={nanoid(5)}  url={urlm}/>
      </div>
    </div>
  )
}

export default page


/**
 * Infinte scrool for all the movies 
 * fetching the data on the sever as recommended by next team
 */