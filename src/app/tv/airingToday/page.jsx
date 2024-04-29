import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'
import React from 'react'
import Display from './Display'

async function AiringToday() {
    const Movies = await getAllTV('airing_today', 1)

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
