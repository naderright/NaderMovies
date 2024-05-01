import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext'
import React from 'react'
import Display from './Display'
import { useSearchParams } from 'next/navigation';

async function NowPlayingMovies() {
    const page = useSearchParams().get('page'); 

    const Movies = await getAllMovies('now_playing', !page?1:page)
    // console.log(NumberPage);
    return (
        <div>

            <div className="movies mt-3">
                {/* display movies */}
                <Display movies={Movies}/>
                
            </div>
        </div>
    )
}

export default NowPlayingMovies
