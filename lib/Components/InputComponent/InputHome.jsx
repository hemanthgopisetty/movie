'use client'
import { useRouter } from 'next/navigation'
import {useState } from "react";

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
/**
 * This is a client component 
 */
export default InputHome;
