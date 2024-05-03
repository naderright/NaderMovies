import React, { Suspense } from 'react'
import NavigationTypeMovie from './NavigationTypeMovie'
import Pagination from '@/Commponnent/Pagination'

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
            <Suspense>
                <Pagination />
            </Suspense>

        </div>
    )
}

export default layout
