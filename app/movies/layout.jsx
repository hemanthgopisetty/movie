import React from 'react'

const layout = ({children}) => {
  return (
    <div className='w-full flex flex-col text-white min-h-screen justify-between'>
      {children}
      <div className='w-full h-[100px] bg-blue-950'></div>
    </div>
  )
}

export default layout
