import React, { Suspense } from 'react'
import AiringToday from './airingToday/page'

const TV = () => {
  return (
    <Suspense>
      <div>
        <div className='Movies '>

          {/* display TV */}

          <AiringToday />


        </div>
      </div>
    </Suspense>
  )
}

export default TV
