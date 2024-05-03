// 'use client'
import React from 'react'
import Display from './Display'
import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'
import {  pageNumer } from '@/contextAPI/pageNumer';
// import { useSearchParams } from 'next/navigation';

 const TopRated = async()=> {
  // const page = useSearchParams().get('page'); 
  const pageN= pageNumer();
  const Movies = await getAllTV('top_rated', !pageN?1:pageN)

  return (
    <div>
      <div className="movies mt-3">
        {/* display movies */}
        <Display Movies={Movies} />

      </div>
    </div>
  )
}

export default TopRated
