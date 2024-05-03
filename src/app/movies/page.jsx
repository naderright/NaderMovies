import React, { Suspense } from 'react'
import NowPlayingMovies from './now_playing/page'

const Movies = async () => {

  // const changeDisplayType = (type)=>{
  //          setDisplayType(type)
  // }
  // console.log(Movies);
  return (
    <div className='Movies '>

      {/* display movies */}
      <Suspense>
        <NowPlayingMovies />
      </Suspense>

    </div>
  )
}

export default Movies
