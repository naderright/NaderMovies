import React from 'react'
import Display from './Display'
import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'
import { useSearchParams } from 'next/navigation';

async function TopRated() {
  const page = useSearchParams().get('page'); 

    const Movies = await getAllTV('top_rated', !page?1:page)

  return (
    <div>
      <div className="movies mt-3">
        {/* display movies */}
        <Display movies={Movies} />

      </div>
    </div>
  )
}

export default TopRated
