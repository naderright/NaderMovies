import React from 'react'
import Display from './Display'
import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'

async function Popular() {
    const Movies = await getAllTV('popular', 1)

  return (
    <div>
       <div className="movies mt-3">
        {/* display movies */}
        <Display movies={Movies} />

      </div>
    </div>
  )
}

export default Popular
