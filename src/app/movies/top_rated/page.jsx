import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext'
import React, { Suspense } from 'react'
import Display from './Display'
import { pageNumer } from '@/contextAPI/pageNumer';

const TopRatedMovies = async () => {
  const pageN = pageNumer();
  const Movies = await getAllMovies('top_rated', !pageN ? 1 : pageN)

  return (
    <div>
      <div className="movies mt-3">
        {/* display movies */}
        <Suspense>
          <Display Movies={Movies} />
        </Suspense>

      </div>
    </div>
  )
}

export default TopRatedMovies
