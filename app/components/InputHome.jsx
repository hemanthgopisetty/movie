'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
const InputHome = () => {
  const [search,setSearch]=useState('');
  const router = useRouter();
  const handleInput = (e)=>{
    setSearch(e.target.value)
  }
  const handleEnter = (e)=>{
     if(e.key=="Enter")
     {
      const encodedsearch = encodeURI(search);
      router.push(`/search?q=${encodedsearch}`);
     }
  }
  const handleButtonClick = (e)=>{
      e.preventDefault();
     const encodedsearch = encodeURI(search);
      router.push(`/search?q=${encodedsearch}`);
    }
    
    // useEffect(()=>{
    //   const keyEnter = event =>{
    //      if(event.key == 'Enter')
    //      {
    //         event.preventDefault();
    //         handleButtonClick();
    //      }
    //   };

    //   document.addEventListener("keydown",keyEnter);
    //   return()=>{
    //     document.removeEventListener("keydown",keyEnter);
    //   }
    // },[])//runs once after the render 
  return (
    <div className="w-full flex items-center justify-center">
    <input 
          type="text" 
          value={search}
          placeholder='Movies /TV Shows/Person'
          onChange={handleInput}
          onKeyDown={handleEnter}
          className='rounded-l-full h-14 w-[40rem] px-6 py-2 text-black outline-none'
    />
    <button 
      className="bg-red-500 px-6 py-2 rounded-r-full h-14"
      onClick={handleButtonClick}
    >
      Search
    </button>
    </div>
  )
}

export default InputHome
