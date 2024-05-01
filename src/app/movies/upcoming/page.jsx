import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext'
import React from 'react'
import Display from './Display'
import { useSearchParams } from 'next/navigation';

async function UpcomingMovies() {
  const page = useSearchParams().get('page'); 

  const Movies = await getAllMovies('upcoming', !page?1:page)

  return (
    <div>
      <div className="movies mt-3">
        {/* display movies */}
        <Display movies={Movies} />

      </div>
    </div>
  )
}

export default UpcomingMovies
