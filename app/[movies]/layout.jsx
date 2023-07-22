import React from 'react'

const layout = ({children}) => {
  return (
    <div className='w-full flex items-center text-white min-h-screen justify-center'>
      {children}
    </div>
  )
}

export default layout
