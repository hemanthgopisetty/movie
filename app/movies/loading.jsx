import { CircularProgress } from "@mui/material"

const loading = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <CircularProgress/>
    </div>
  )
}

export default loading
