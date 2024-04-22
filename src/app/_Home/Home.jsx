
import React from 'react'
import Banner from './Banner'
import { getTrending } from '@/contextAPI/ContextAPI/TrendingContext'
import TrendingSlid from './TrendingSlid';



const FatherSite = async () => {
  const movies = await getTrending('movie');
  const Tv = await getTrending('tv');
  const People = await getTrending('person');
  return (
    <div >
      {/* {console.log(movies)} */}
      <Banner movies={movies} />
      <div className="container">
        <TrendingSlid name={'Trending Movies'} data={movies} />
        <TrendingSlid name={'Trending TV'} data={Tv} />
        <TrendingSlid name={'Trending Pepole'} data={People} />
      </div>



    </div>
  )
}

export default FatherSite
