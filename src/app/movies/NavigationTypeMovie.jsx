'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const NavigationTypeMovie = ({typeMovies}) => {
    const [displayType, setDisplayType] = useState('Now Playing');

    return (
        <div>
            <div className="ChoseTypeMovies flex gap-3 mt-11">
                {typeMovies.map((type,key) => <Link key={key} href={`/movies/${type.router}`}><h3 
                onClick={() =>{setDisplayType(type.name)}} 
                className={`text-primary hover:cursor-pointer hover:text-secandry transition-all 
                ${type.name == displayType ? 'border-b-[2px] border-b-primary' : ''} text-[.7rem]
                 md:text-[1rem] font-semibold`} >{type.name}</h3></Link>)
                }
            </div>
        </div>
    )
}

export default NavigationTypeMovie
