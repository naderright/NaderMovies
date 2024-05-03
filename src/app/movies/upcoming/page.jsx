
import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext'
import React, { Suspense } from 'react'
import Display from './Display'
import { pageNumer } from '@/contextAPI/pageNumer';

const UpcomingMovies = async () => {
  const pageN = pageNumer();
  const Movies = await getAllMovies('upcoming', !pageN ? 1 : pageN)

  return (
    <Suspense>
      <div>
        <div className="movies mt-3">
          {/* display movies */}

          <Display Movies={Movies} />


        </div>
      </div>
    </Suspense>
  )
}

export default UpcomingMovies
