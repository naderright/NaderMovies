
import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'
import React, { Suspense } from 'react'
import Display from './Display'
import { pageNumer } from '@/contextAPI/pageNumer'

const AiringToday = async () => {
  const pageN = pageNumer();
  const Movies = await getAllTV('airing_today', !pageN ? 1 : pageN)

  return (
    <div>
      <div className="movies mt-3">
        {/* display movies */}
        <Suspense>
          <Display Movies={Movies} />
        </Suspense>

      </div>
    </div>
  )
}

export default AiringToday
