'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import './SlideComponnet.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import MovieCard from '@/Commponnent/MovieCard';
import Link from 'next/link';


function Slider({ data }) {

    const [screnView, setScrenView] = useState(null);
    // console.log(data);
    useEffect(() => {
        setScrenView(screen.width)
    }, [])



    return (
        <div>
            {/* {console.log( 'dat'+ data)} */}
            <Swiper
                slidesPerView={screnView < 500 ? 2 : screnView < 768 ? 3 : 4}
                spaceBetween={10}
                freeMode={true}
                navigation
                modules={[FreeMode, Navigation]}
                className="mySwiper"
            >
                {data.map((movie, key) => <SwiperSlide ><Link href={`/details/${movie.id}`}><MovieCard movie={movie} key={key} /></Link></SwiperSlide>)}

            </Swiper>
        </div>
    )
}

export default Slider
