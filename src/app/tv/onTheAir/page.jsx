import React from 'react'
import Display from './Diasplay'
import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'
import { useSearchParams } from 'next/navigation';

async function OnTheAir() {
  const page = useSearchParams().get('page'); 

    const Movies = await getAllTV('on_the_air', !page?1:page)

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
