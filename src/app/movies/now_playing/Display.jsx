import MovieCard from '@/Commponnent/MovieCard'
import Link from 'next/link'
import React from 'react'

 function Display ({Movies}) {

    // console.log(movies);
  return (
    <div>
      <div className="displayMovies grid grid-cols-2 md:grid-cols-4 gap-4">
        {Movies.map((movie,key)=><Link key={key} href={`/details/movie/${movie.id}`}><MovieCard movie={movie}/></Link>)}
      </div>
    </div>
  )
}

export default Display
