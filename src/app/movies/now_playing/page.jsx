
import React, { Suspense } from 'react'
import Display from './Display'
import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext';
import { pageNumer } from '@/contextAPI/pageNumer';

const NowPlayingMovies = async () => {
    const pageN = pageNumer();
    // console.log(pageN);
    const Movies = await getAllMovies('now_playing', !pageN ? 1 : pageN)


    // console.log(NumberPage);
    return (
        <div>

            <div className="movies mt-3">
                {/* display movies */}
                <Suspense>
                    <Display Movies={Movies} />
                </Suspense>

            </div>
        </div>
    )
}

export default NowPlayingMovies
