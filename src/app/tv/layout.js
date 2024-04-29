import React from 'react'
import NavigationTypeMovie from './NavigationTypeMovie'

const typeTv = [
    { name: 'Airing Today', router: 'airingToday' },
    { name: 'On The Air', router: 'onTheAir' },
    { name: 'Popular', router: 'popular' },
    { name: 'Top Rated', router: 'topRated' },
]
function layout({ children }) {
    return (
        <div className='py-[1rem]  container'>
             {/* navigation */}
            <NavigationTypeMovie typeTv={typeTv} />
            {children}
        </div>
    )
}

export default layout
