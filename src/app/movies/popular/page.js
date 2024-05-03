import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext'
import React, { Suspense } from 'react'
import Display from './Display';
import { pageNumer } from '@/contextAPI/pageNumer';

const PopularMovies = async () => {
  const pageN = pageNumer();
  const movies = await getAllMovies('popular', !pageN ? 1 : pageN);

  return (
    <Suspense>
      <div>
        <div className="movies mt-3">

          <Display movies={movies} />


        </div>
      </div>
    </Suspense>
  )
}

export default PopularMovies
