import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'
import React from 'react'
import Display from './Display'
import { useSearchParams } from 'next/navigation';

async function AiringToday() {
  const page = useSearchParams().get('page'); 

    const Movies = await getAllTV('airing_today', !page?1:page)

  return (
    <div>
      <div className="movies mt-3">
        {/* display movies */}
        <Display movies={Movies} />

      </div>
    </div>
  )
}

export default AiringToday
