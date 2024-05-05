'use client'
import React, { useContext } from 'react'
import Display from './Display'
import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext';
import { pageNumer } from '@/contextAPI/pageNumer';
import { PageContext } from '@/contextAPI/pageNumberContext';

const NowPlayingMovies =  () => {
    // const pageN = pageNumer();
    // console.log(pageN);
    const {pageN} = useContext(PageContext)
    // const Movies = await getAllMovies('now_playing', !pageN ? 1 : pageN)


    // console.log(NumberPage);
    return (
        <div>
            <div className="movies mt-3">
                {/* display movies */}
                 {pageN}
                {/* <Display Movies={Movies} /> */}


            </div>
        </div>
    )
}

export default NowPlayingMovies
