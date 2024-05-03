import React, { Suspense } from 'react'
import AiringToday from './airingToday/page'

const TV = () => {
  return (
    <div>
      <div className='Movies '>

        {/* display TV */}
        <Suspense>
          <AiringToday />
        </Suspense>


      </div>
    </div>
  )
}

export default TV
