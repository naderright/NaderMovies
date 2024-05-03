
 import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext'
import React from 'react'
import Display from './Display'
import {  pageNumer } from '@/contextAPI/pageNumer';

 const UpcomingMovies =async()=> {
  const pageN= pageNumer();
  const Movies = await getAllMovies('upcoming', !pageN?1:pageN)

  return (
    <div>
      <div className="movies mt-3">
        {/* display movies */}
        <Display Movies={Movies} />

      </div>
    </div>
  )
}

export default UpcomingMovies
