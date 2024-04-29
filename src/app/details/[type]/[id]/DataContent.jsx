import { getNumberOfStars } from '@/contextAPI/constances';
import Link from 'next/link';
import React from 'react'
import { FaStar } from 'react-icons/fa6';

function DataContent({ data }) {
    const mapStar = getNumberOfStars(data);



    console.log(data);
    return (
        <div className='contentDetails text-secandry'>
            <h3 className='font-bold text-[1.3rem]'>{data.title || data.name}</h3>
            <p className='description font-extralight w-[22rem] text-[.9rem] py-2 '>{data.overview || data.biography}</p>
            {/* rate */}
           {data.vote_avarage? <div className="rate my-3 flex items-center gap-2 pt-[.8rem]">
                {mapStar.map(el => <> <FaStar className='text-primary' />
                </>)}
                <span className='rate border border-primary px-[2px]
                 font-bold border-solid text-[.7rem] '>{(data.vote_average / 2).toFixed(1)}
                 </span>
            </div>:''}

            {/* type movie */}
            <div className="typeMovie flex flex-wrap gap-1">
                {data.genres?.map((genre) => <h3 className=' border-primary mt-1 text-[.8rem] md:text-[.6rem] tracking-[1px] p-2 border-t-[.2rem]
                 rounded-lg shadow-md bg-[rgba(17,17,17,0.77)] text-white font-semibold '>{genre.name}</h3>)}
            </div>

            {/* buttons */}
            <div className="buttonWatchMovie flex  gap-1 py-[2rem]">
                <div className="WatchNow">
                    <Link className='transition-colors btn text-[1rem] bg-primary 
                    font-semibold hover:bg-hover text-white ' href={`/`}>Watch Now</Link>
                </div>
                <div className="viewInfo">
                    <Link className='transition-colors btn border 
                    font-extralight hover:text-white' href={`/`}>More info</Link>
                </div>
            </div>

        </div>
    )
}

export default DataContent
