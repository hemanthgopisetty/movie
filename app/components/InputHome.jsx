'use client'
import { useRouter } from 'next/navigation'
import { useState } from "react";
const InputHome = () => {
  const [search,setSearch]=useState('');
  const handleInput = (e)=>{
    setSearch(e.target.value)
  }
  const router = useRouter();
  const handleButtonClick = (e)=>{
      e.preventDefault();
      console.log(search)
     const encodedsearch = encodeURI(search);
     console.log(encodedsearch);
      router.push(`/search?q=${encodedsearch}`);
    }
  return (
    <div className="w-full flex items-center justify-center">
    <input 
          type="text" 
          value={search}
          placeholder='Movies /TV Shows'
          onChange={handleInput}
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
