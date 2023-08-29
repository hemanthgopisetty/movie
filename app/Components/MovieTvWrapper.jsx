import { nanoid } from 'nanoid';
import { getMovie,getTV } from '@/lib/QueryFN/getMoviesTv';
import Carou from './Carou';
const MovieTvWrapper = async () => {
 const {popularm,now_playingm,up_comingm,top_ratedm} = await getMovie();
 const {populart,now_playingt,up_comingt,top_ratedt} = await getTV();
  return (
    <div className="text-white ml-20 mr-24">

          <Carou 
          title={"What's Popular"}
          datam={popularm}
          datat={populart}
          key={nanoid()}
          />
          <Carou 
          title={'Up Coming'} 
          datam={up_comingm}
          datat={up_comingt}
          key={nanoid()}
          />
          <Carou 
          title={'Now Playing'} 
          datam={now_playingm}
          datat={now_playingt}
          key={nanoid()}
          />
          <Carou 
          title={'Top Rated'}
          datam={top_ratedm} 
          datat={top_ratedt}
          key={nanoid()}
          />

    </div>
  )
}

export default MovieTvWrapper
