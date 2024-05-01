'use client'
import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext'
import React from 'react'
import Display from './Display';
import { useSearchParams } from 'next/navigation';

async function PopularMovies() {
  const page = useSearchParams().get('page'); 
  const movies = await getAllMovies('popular', !page?1:page);

  return (
    <div>
      <div className="movies mt-3">
      
        <Display movies={movies} />

      </div>
    </div>
  )
}

export default PopularMovies
