import { getMovie,getTV } from './QueryFN/getMoviesTv';
import Carou from './components/Carou';

const MovieTvWrapper = async () => {
 const {popularm,now_playingm,up_comingm,top_ratedm} = await getMovie();
 const {populart,now_playingt,up_comingt,top_ratedt} = await getTV();
  return (
    <div className="text-white ml-20 mr-24">

          <Carou 
          title={"What's Popular"}
          datam={popularm}
          datat={populart}
          key={1}
          />
          <Carou 
          title={'Up Coming'} 
          datam={up_comingm}
          datat={up_comingt}
          key={2}
          />
          <Carou 
          title={'Now Playing'} 
          datam={now_playingm}
          datat={now_playingt}
          key={3}
          />
          <Carou 
          title={'Top Rated'}
          datam={top_ratedm} 
          datat={top_ratedt}
          key={4}
          />

    </div>
  )
}

export default MovieTvWrapper
