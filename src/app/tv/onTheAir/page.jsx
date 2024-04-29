import React from 'react'
import Display from './Diasplay'
import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'

async function OnTheAir() {
    const Movies = await getAllTV('on_the_air', 1)

  return (
    <div>
     <div className="movies mt-3">
        {/* display movies */}
        <Display movies={Movies} />

      </div>
    </div>
  )
}

export default OnTheAir
