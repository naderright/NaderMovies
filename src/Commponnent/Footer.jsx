import React from 'react'
import { RiMovie2Line } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';



const Footer = () => {
    return (
        <div className='bg-white'>
            <div className="Footer  container h-[14h] md:h-[12vh] mt-4  flex flex-col-reverse py-3 gap-2 md:flex-row  items-center justify-between ">
                <h4 className='text-[.8rem] font-thin '>CopyRight <span className='border border-primary rounded-full px-[.1rem] text-[.5rem] text-primary
                 font-bold'>C</span> 2024 <span className='text-primary font-normal pr-1'>NaderMovie</span>All Right Reverced</h4>
                <div className={`logo text-primary font-black text-[1.2rem]`}>
                    <Link href={'/'}> 
                    <h2 className={`flex text-[15px] items-center `}>NADER <span className='text-[30px]'><RiMovie2Line /></span>MOVIES </h2>
                    </Link>
                </div>
                <div className="social flex justify-center items-center gap-2">
                    <FiFacebook className='text-[1.4rem] md:text-[1.1rem] hover:text-primary hover:cursor-pointer transition-all' />
                    <FaInstagram className='text-[1.4rem] md:text-[1.1rem] hover:text-primary hover:cursor-pointer transition-all'/>
                    <FaXTwitter className='text-[1.4rem] md:text-[1.1rem] hover:text-primary hover:cursor-pointer transition-all'/>

                </div>
            </div>
        </div>
    )
}

export default Footer
