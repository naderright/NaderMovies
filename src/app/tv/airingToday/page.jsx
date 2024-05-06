'use client'
import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'
import React, { useContext, useEffect, useState }  from 'react'
import Display from './Display'
import { PageContext } from '@/contextAPI/pageNumberContext'

const AiringToday =  () => {

  const {pageN} = useContext(PageContext)
  const [Movies,setMovies] = useState([])
  const getMovies = async()=>{
    const  movies = await getAllTV('airing_today', !pageN ? 1 : pageN);
    
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

export default AiringToday
