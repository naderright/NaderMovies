"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { RiMovie2Line } from "react-icons/ri";




const navLinks = [
  { name: 'Home', display: '/', active: false },
  { name: 'Movies', display: '/movies', active: false },
  { name: 'TV', display: '/tv', active: false },
  { name: 'ContactUs', display: '/contactUs', active: false },
]

const Header = () => {
  const [toggle, setToggle] = useState('open');
  const [sticky, setSticky] = useState(false);
  const getPathName = usePathname();

  // console.log(getPathName.length);
  const chengeToggleMenu = () => {

    toggle == 'open' ? setToggle('close') : setToggle('open')
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 20 ? setSticky(true) : setSticky(false);
    })
    return () => window.removeEventListener('scroll', () => {
      window.scrollY > 20 ? setSticky(true) : setSticky(false);
    })

  }, [sticky])
  return (
    <header className={`${toggle == 'open' ? 'overflow-hidden' : ''} ${sticky || getPathName.length>1 ? 'bg-secandry' : 'bg-transparent'}  transition-all 
    z-50 shadow-md fixed bor w-[100%]  flex justify-around items-center  text-white h-[3rem]`}>
      <div className={`logo text-primary font-black text-[1.2rem]`}>
        <Link href={'/'}>
          <h2 className={`flex text-[15px] items-center `}>NADER <span className='text-[30px]'><RiMovie2Line /></span>MOVIES </h2>

        </Link>
      </div>
      {/* LINKS Movies And TV  */}
      <div className={`navLinks transition-all bg-secandry md:bg-transparent md:static absolute  top-[47px]  md:py-0 pt-[1rem] md:w-fit w-[100%]`}>
        <ul className='md:flex md:flex-row flex flex-col items-center'>
          {navLinks.map((navItem, key) => <Link onClick={chengeToggleMenu} className={navItem.name} href={navItem.display}> 
          <li className={` transition-all w-[24rem] md:w-[100%] border-b-[.1px] border-primary md:border-none 
          p-[.7rem] font-semibold hover:text-hover`} key={key}>
            {navItem.name}
          </li></Link>)}
        </ul>
      </div>
      {/* sign in button */}
      <div className="transition-all login text-end  md:text-center  bg-primary px-3 py-1  rounded hover:bg-hover hover:cursor-pointer font-bold">
        <Link className='login font-normal text-[.8rem] tracking-[1px]' href='/login'>Sign In</Link>
      </div>

      {/* toggle */}
      <div className="toggle md:hidden">
        <span onClick={chengeToggleMenu} className='md:hidden hover:cursor-pointer text-white text-[1.4rem]'>
          {toggle == 'open' ? <BsList /> : <IoMdClose />}
        </span>
      </div>
    </header>
  )
}

export default Header
