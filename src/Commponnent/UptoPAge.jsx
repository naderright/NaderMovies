'use client'
import React, { useEffect, useState } from 'react'
import { PiArrowFatLinesUpThin } from "react-icons/pi";


const UptoPAge = () => {
    const [sticky, setSticky] = useState(false);


    const MovieTopPage = ()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
          window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
        return () => window.removeEventListener('scroll', () => {
          window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    
      }, [sticky])
  return (
    <div>
      <div onClick={()=>MovieTopPage()} className={`UpToPage z-40 ${sticky?'flex':'d-non'}  justify-center items-center  
      hover:bg-secandry hover:scale-125 hover:cursor-pointer fixed bottom-3 
      right-3 w-7 h-9 rounded bg-primary text-white`}>
      <PiArrowFatLinesUpThin  className='text-[1.2rem]'/>

      </div>
    </div>
  )
}

export default UptoPAge
