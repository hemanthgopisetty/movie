import { moviebase,tvbase } from "./Options"

export const url={
    
    "Now Playing"    : {
         movie : {

            keyword : "now_playing",
            route(){
                return `${moviebase}/${this.keyword}`
            },
        },
          tv    : {

            keyword : "airing_today",
            route(){
                return `${tvbase}/${this.keyword}`
            },
        },
    },
    "What's Popular" : {
        movie : {
            keyword : "popular",
            route(){
                return `${moviebase}/${this.keyword}`
            },
        },
        tv    : {
            keyword : "popular",
            route(){
                return `${tvbase}/${this.keyword}`
            },
        },
    },
    "Top Rated"      : {
        movie : {
            keyword : "top_rated",
            route(){
                return `${moviebase}/${this.keyword}`
            },
        },
        tv    : {
            keyword : "top_rated",
            route(){
                return `${tvbase}/${this.keyword}`
            },
        },
    },
    "Up Coming"       : {
        movie : {
            keyword : "upcoming",
            route(){
                return `${moviebase}/${this.keyword}/?language=en-US&page=2`
            },
        },
        tv    : {
            keyword : "on_the_air",
            route(){
                return `${tvbase}/${this.keyword}/?language=en-US
                &page=2`
            },
        },
    },

}
/**
 * url.nowplaying.movie
 */