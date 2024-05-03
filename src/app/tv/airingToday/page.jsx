
import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'
import React from 'react'
import Display from './Display'
import {  pageNumer } from '@/contextAPI/pageNumer'
// import { useSearchParams } from 'next/navigation';

 const AiringToday= async()=> {
  // const page = useSearchParams().get('page'); 
  const pageN= pageNumer();
  const Movies = await getAllTV('airing_today', !pageN?1:pageN)

  return (
    <div>
      <div className="movies mt-3">
        {/* display movies */}
        <Display Movies={Movies} />

      </div>
    </div>
  )
}

export default AiringToday
