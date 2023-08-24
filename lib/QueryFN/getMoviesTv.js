import { options } from "../constants/Options";
import { url } from "../constants/URLS";
export async function getMovie()
{
  const url1 = url["What's Popular"].movie.route();
  const url2 = url['Now Playing'].movie.route();
  const url3 = url['Up Coming'].movie.route();
  const url4 = url['Top Rated'].movie.route();

  const requests = [fetch(url1,options),fetch(url2,options),fetch(url3,options),fetch(url4,options)];
  const response =await Promise.all(requests);

  const popularm     =await response[0].json();
  const now_playingm =await response[1].json();
  const up_comingm   =await response[2].json();
  const top_ratedm   =await response[3].json();

   return {
    popularm    :    popularm.results,
    now_playingm:   now_playingm.results,
    up_comingm  :   up_comingm.results,
    top_ratedm  :   top_ratedm.results
  }
}
export async function getTV()
{
  const url1 = url["What's Popular"].tv.route();
  const url2 = url['Now Playing'].tv.route();
  const url3 = url['Up Coming'].tv.route();
  const url4 = url['Top Rated'].tv.route();

  const requests = [fetch(url1,options),fetch(url2,options),fetch(url3,options),fetch(url4,options)];
  const response =await Promise.all(requests);

  const populart     =await response[0].json();
  const now_playingt =await response[1].json();
  const up_comingt   =await  response[2].json();
  const top_ratedt   =await response[3].json();

   return {
    populart    :   populart.results,
    now_playingt:   now_playingt.results,
    up_comingt  :   up_comingt.results,
    top_ratedt  :   top_ratedt.results
  }
}