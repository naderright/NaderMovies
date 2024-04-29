import MovieCard from '@/Commponnent/MovieCard'
import Link from 'next/link'
import React from 'react'

function Display({movies}) {
    // console.log(movies);
  return (
    <div>
      <div className="displayMovies grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie)=><Link  href={`/details/movie/${movie.id}`}><MovieCard movie={movie}/></Link>)}
      </div>
    </div>
  )
}

export default Display
