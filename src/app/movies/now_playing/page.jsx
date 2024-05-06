 'use client'
import React, { useContext, useEffect, useState } from 'react'
import Display from './Display'
import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext';
// import { pageNumer } from '@/contextAPI/pageNumer';
import { PageContext } from '@/contextAPI/pageNumberContext';

const NowPlayingMovies =  () => {

  
     const {pageN} = useContext(PageContext)

     const getMovies = async()=>{
        const  movies = await getAllMovies('now_playing', !pageN ? 1 : pageN);
        
        return movies
     }
     const [Movies,setMovies] = useState([])
      
       
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

export default NowPlayingMovies
