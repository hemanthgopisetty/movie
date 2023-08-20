import { CircularProgress } from "@mui/material"

const loading = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <CircularProgress/>
    </div>
  )
}

export default loading
