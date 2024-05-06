'use client'
import React, { useContext, useEffect, useState }  from 'react'
import Display from './Display'
import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'
import { PageContext } from '@/contextAPI/pageNumberContext';

const Popular =  () => {
 
  const {pageN} = useContext(PageContext)
  const [Movies,setMovies] = useState([])
  const getMovies = async()=>{
    const  movies = await getAllTV('popular', !pageN ? 1 : pageN);
    
    return movies
 }
  
 useEffect(()=>{
     getMovies().then(value=>setMovies(value));       
 },[pageN])

  return (
      <div>
        <div className="movies mt-3">
          {/* display movies */}

          <Display Movies={Movies} />


        </div>
      </div>
  )
}

export default Popular
