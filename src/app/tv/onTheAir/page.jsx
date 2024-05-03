import React, { Suspense } from 'react'
import Display from './Diasplay'
import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'
import { pageNumer } from '@/contextAPI/pageNumer';

const OnTheAir = async () => {
  const pageN = pageNumer();
  const Movies = await getAllTV('on_the_air', !pageN ? 1 : pageN)

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

export default OnTheAir
