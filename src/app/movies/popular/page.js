import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext'
import React from 'react'
import Display from './Display';
import {  pageNumer } from '@/contextAPI/pageNumer';
// import { useSearchParams } from 'next/navigation';

 const PopularMovies=async()=> {
  // const page = useSearchParams().get('page');
  const pageN= pageNumer();
  const movies = await getAllMovies('popular', !pageN?1:pageN);

  return (
    <div>
      <div className="movies mt-3">
      
        <Display movies={movies} />

      </div>
    </div>
  )
}

export default PopularMovies
