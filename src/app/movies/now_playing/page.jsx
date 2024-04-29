import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext'
import React from 'react'
import Display from './Display'

async function NowPlayingMovies() {
    const Movies = await getAllMovies('now_playing', 1)

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
