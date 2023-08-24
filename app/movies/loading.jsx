import { CircularProgress } from "@mui/material"

const loading = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <CircularProgress size={20}/>
    </div>
  )
}

export default loading
