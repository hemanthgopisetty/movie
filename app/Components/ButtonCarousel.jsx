const ButtonCarousel = ({handleMovieFlag,handleTVFlag,flag}) => {

  return (
    <div className="rounded-lg">
    <button 
     className={
      `px-8 py-1 rounded-l-lg 
     ${flag.movie===true?"bg-slate-500/10": "bg-red-500/80"}`
    }
     onClick={handleMovieFlag}
     >
     Movies
    </button>
    <button 
     className={
      `px-8 py-1 rounded-r-lg 
     ${flag.tv===true?"bg-slate-500/10": "bg-red-500/80"}`
     } 
     onClick={handleTVFlag}
     >
     TVShows
    </button>
   </div>
  )
}

export default ButtonCarousel
