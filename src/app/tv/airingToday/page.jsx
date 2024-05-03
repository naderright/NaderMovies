
import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'
import React, { Suspense } from 'react'
import Display from './Display'
import { pageNumer } from '@/contextAPI/pageNumer'

const AiringToday = async () => {
  const pageN = pageNumer();
  const Movies = await getAllTV('airing_today', !pageN ? 1 : pageN)

  return (
    <Suspense>

      <div>
        <div className="movies mt-3">
          {/* display movies */}
          <Display Movies={Movies} />


        </div>
      </div>
    </Suspense>
  )
}

export default AiringToday
