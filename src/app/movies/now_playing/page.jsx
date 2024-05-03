// 'use client'

import React from 'react'
import Display from './Display'
// import { useSearchParams } from 'next/navigation';
import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext';
import {   pageNumer } from '@/contextAPI/pageNumer';

 const  NowPlayingMovies=async()=> {
    // const page = useSearchParams().get('page'); 
    const pageN= pageNumer();
    console.log(pageN);
    const Movies = await getAllMovies('now_playing', !pageN?1:pageN)

    
    // console.log(NumberPage);
    return (
        <div>

            <div className="movies mt-3">
                {/* display movies */}
                <Display Movies={Movies}/>
                
            </div>
        </div>
    )
}

export default NowPlayingMovies
