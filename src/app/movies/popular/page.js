'use client'
import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext'
import React, { useContext, useEffect, useState } from 'react'
import Display from './Display';
import { PageContext } from '@/contextAPI/pageNumberContext';

const PopularMovies =  () => {
  const {pageN} = useContext(PageContext)
  const [movies,setMovies] = useState([])
  const getMovies = async()=>{
    const  movies = await getAllMovies('popular', !pageN ? 1 : pageN).then(value=>setMovies(value));
    
    return movies
 }
  
 useEffect(()=>{
     getMovies();       
 },[pageN])

  return (
      <div>
        <div className="movies mt-3">

          <Display movies={movies} />


        </div>
      </div>
  )
}

export default PopularMovies
