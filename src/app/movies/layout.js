import React, { Suspense } from 'react'
import NavigationTypeMovie from './NavigationTypeMovie'
import Pagination from '@/Commponnent/Pagination'
import { PageContextProvider } from '@/contextAPI/pageNumberContext'

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
            <PageContextProvider>
                {children}
            </PageContextProvider>

            <Suspense fallback={children}>
                <Pagination />
            </Suspense>
        </div>
    )
}

export default layout
