import { getGenreNames, startLinkImag } from '@/contextAPI/constances'
import Image from 'next/image'
import React from 'react'
import { FiPlayCircle } from "react-icons/fi";
import profileImage from '../../public/profile.jpg'

function MovieCard({ movie}) {

  const typeMovie = getGenreNames(movie)
  // console.log(key);
  return (
    <div className='pt-1 '  >
      <div className="MovieCard bg-white   	" >
        <div className="group transition-all relative ">
          <Image className=' rounded  hover:cursor-pointer' width={200} height={150} priority src={movie.poster_path ? startLinkImag + movie.poster_path : movie.profile_path ? startLinkImag + movie.profile_path : profileImage} alt={movie.name || movie.title} />
          {/* layout Card */}
          <div className="layerCard text-primary hover:cursor-pointer flex items-center duration-700 justify-center overflow-hidden absolute
           bg-[rgba(0,0,0,0.47)] transition-all top-[100%] group-hover:top-0 bottom-0 right-0 left-0">
            <FiPlayCircle className='text-[3rem]' />
          </div>
        </div>
        <div className=" px-3 titleMovie py-1 text-stone-950 font-[700] flex itmes-center justify-between gap-2">
          <h3 className='truncate'>{movie.title || movie.name}</h3>
          <div className="rate pb-1 text-primary">
            {movie.vote_average ? <span className=' text-[.8rem] text-center text-primary border-primary border '>{(movie.vote_average / 2).toFixed(1)}</span>
              : ''}
          </div>
        </div>
        {/* type movies */}
        <div className="typeMovie flex flex-wrap gap-1 px-3">
          {typeMovie.map((type,key) => <h3 key={key} className='text-primary font-semibold border-primary text-[.8rem] border-b-[.03rem] '>{type}</h3>)}
        </div>

      </div>

    </div>
  )
}

export default MovieCard
