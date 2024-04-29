import React from 'react'
import NavigationTypeMovie from './NavigationTypeMovie'

const typeMovies = [
    { name: 'Now Playing', router: 'now_playing' },
    { name: 'Popular', router: 'popular' },
    { name: 'Top Rated', router: 'top_rated' },
    { name: 'Upcoming', router: 'upcoming' },
]
function layout({ children }) {
    return (
        <div className='py-[1rem]  container'>
             {/* navigation */}
            <NavigationTypeMovie typeMovies={typeMovies} />
            {children}
        </div>
    )
}

export default layout
