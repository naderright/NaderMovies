import { genres, getGenreNames, getNumberOfStars, startLinkImag } from '@/contextAPI/constances';
import Link from 'next/link';
import React from 'react'
import { FaStar } from "react-icons/fa6";


function Banner({ movies }) {
  const bannerMovie = movies[Math.floor(Math.random() * movies.length - 1)];

  // console.log(movies);
  const backGroundBanner = {
    backgroundImage: `url(${startLinkImag + bannerMovie.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'


  }

  const typeMovie = getGenreNames(bannerMovie)


  const mapStar = getNumberOfStars(bannerMovie)
  return (
    <>
      <section className='hero w-[100%] h-[40vh] md:h-[100vh] text-white  relative ' style={backGroundBanner}>

        <div className="layer w-[100%] h-[100%] bg-layer relative ">
          {/* banner content */}
          <div className="bannerContent     absolute bottom-[3rem] right-[2rem] left-[2rem] md:right-[7rem] md:left-[7rem]  ">
            {/* title Movie */}
            <div className="title">
              <h2 className='text-white text-[1.5rem]'>{bannerMovie.title}</h2>
              {/* movie type */}
              <div className="typeMovie flex gap-1">
                {typeMovie.map((type) => <h3 className='text-neutral-400 border-primary text-[.7rem] border-b-[.03rem] '>{type}</h3>)}
              </div>
            </div>
            {/* rate movie */}
            <div className="rateAndButtons flex items-end justify-between">
              <div className="rate flex items-center gap-2 pt-[.8rem]">
                {mapStar.map(el => <> <FaStar className='text-primary' />
                </>)}
                <span className='rate border border-primary px-[2px] font-bold border-solid text-[.7rem]  text-white '>{(bannerMovie.vote_average / 2).toFixed(1)}</span>
              </div>

              <div className="buttonWatchMovie flex  gap-1">
                <div className="WatchNow">
                  <Link className='transition-colors btn bg-primary font-medium hover:bg-hover' href={`/details/${bannerMovie.media_type}/${bannerMovie.id}`}>Watch Now</Link>
                </div>
                <div className="viewInfo">
                  <Link className='transition-colors btn border font-thin' href={`/details/${bannerMovie.media_type}/${bannerMovie.id}`}>More info</Link>
                </div>
              </div>
              {/* {console.log(numberStars)}
              {console.log(mapStar)}
              {console.log((bannerMovie.vote_average / 2).toFixed(1))}
              {console.log(typeMovie)} */}

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Banner
