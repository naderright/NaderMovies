import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext'
import React from 'react'
import Display from './Display'
import { useSearchParams } from 'next/navigation';

async function TopRatedMovies() {
  const page = useSearchParams().get('page'); 

  const Movies = await getAllMovies('top_rated', !page?1:page)

  return (
    <div>
      <div className="movies mt-3">
        {/* display movies */}
        <Display movies={Movies} />

      </div>
    </div>
  )
}

export default TopRatedMovies
