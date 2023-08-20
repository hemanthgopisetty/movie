'use client'
import { useInfiniteQuery, } from "@tanstack/react-query";
import { useRef,useEffect, Suspense} from "react";
import { options } from "../constants/Options";
import ImageComp from "./ImageComp";

const fetchUnlimitedData = async (pageParam,urll)=>{
    const res = await fetch(`${urll}/?language=en-US&page=${pageParam}`,options);
    const data  = await res.json();
    return data.results;
}

const MyComponent  = ({url,type,datamt})=>{
    //fetching
    const {data,fetchNextPage,isFetchingNextPage} = useInfiniteQuery(
        ["Movie"],
        async({pageParam=1}) => await fetchUnlimitedData(pageParam,url),
        {
            initialData : datamt,
            getNextPageParam  : (_,pages)=>pages.length+1
        }
    );
    

    //ref
    const myref = useRef(null);

    //observer
    useEffect(()=>{

        const observer = new IntersectionObserver(
            (entries)=>{
                entries.forEach(e=>fetchNextPage());
            }
        )

        if(myref.current)
        {
            observer.observe(myref.current);
        }
    },[myref])

    
    
    //static
    return(
        <div className="mx-auto my-auto">
        {
         data?.pages?.map((page,i)=>{

            return(
                <div key={i} className="grid grid-cols-4 grid-flow-row gap-16 my-20">
                    {
                        page.map(
                            (e)=>{
                             return( 
                              <div key={e.id}>

                                <div className="w-[200px] h-[300px] relative">
                                  <ImageComp  e={e}/>
                                </div>

                                <div className="h-6 w-[200px] mt-2">
                                    <p className="text-xl truncate text-white/50 h-full w-full ">
                                    {
                                      type==="movie"
                                      ?
                                       e.title?.length>0 ?e.title:"N/A"
                                      :
                                       e.name?.length>0 ?e.name:"N/A"
                                    }
                                    </p>
                                </div>

                                <p className="text-white/80">
                                {
                                    type==="movie"
                                    ?
                                    e.release_date
                                    :
                                    e.first_air_date
                                }
                                </p>

                             </div>
                            )
                           })
                    }
                </div>
            )
         })
         }
            <span ref={myref}></span>
        </div>  
    );
}



const InfiniteScrool = ({url,type,data}) => {
  return (
            <MyComponent url={url} type={type} data={data.results}/>
  )
}


export default InfiniteScrool
