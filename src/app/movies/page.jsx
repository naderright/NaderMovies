import React, { Suspense } from 'react'
import NowPlayingMovies from './now_playing/page'

const Movies = async () => {

  // const changeDisplayType = (type)=>{
  //          setDisplayType(type)
  // }
  // console.log(Movies);
  return (
    <Suspense>
      <div className='Movies '>

        {/* display movies */}

        <NowPlayingMovies />


      </div>
    </Suspense>
  )
}

export default Movies
