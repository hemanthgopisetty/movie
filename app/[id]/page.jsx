async function getById(id)
{
    const res = await fetch()
}

const page = ({params}) => {
    const data  = getById(params.id)
    /**
     * About the movie
     * About the cast
     * Recommendations
     * Similar Movies
     */
  return (
      <div className='flex items-center justify-center'>
        {params.id}
      </div>
  )
}

export default page
