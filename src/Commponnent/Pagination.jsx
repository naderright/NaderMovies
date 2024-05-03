 "use client"
import { putCurruntPage } from '@/contextAPI/pageNumer';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Pagination() {
  const Router = useRouter();
  const page = useSearchParams().get('page');
  const startAgin = useSearchParams().get('start');
  
  const [numberPage,setNumberPage] = useState(1);
  const [curruntPage,setCurruntPage] = useState(1);
 
  const numPages=[numberPage,numberPage+1,numberPage+2,numberPage+3,numberPage+4];

const chansgePrevCurrentPage=()=>{
  if (numberPage>=2) {
    setNumberPage(numberPage-1)
  } else {
    setNumberPage(1);
    setCurruntPage(1)
  }
 
  setCurruntPage(curruntPage-1)
}
const chansgeNextCurrentPage=()=>{
  setNumberPage(numberPage+1) ;
  setCurruntPage(curruntPage+1)
}



useEffect(()=>{
  if(!page ||startAgin){

    Router.push(`?page=${1}`);
  }

  Router.push(`?page=${curruntPage}`);
  localStorage.setItem('page',curruntPage);
  putCurruntPage(curruntPage)

},[curruntPage,page])
  return (
    
    <div  className='container flex justify-center items-center mt-8'>

<nav aria-label="Page navigation ">
  <ul className="flex items-center -space-x-px h-10 text-base ">
    <li className='cursor-pointer prev' onClick={()=>chansgePrevCurrentPage()}>
      <span  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 
      bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
        <span className="sr-only">Previous</span>
        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
        </svg>
      </span>
    </li>
    
    {numPages.map((page,key)=><li key={key} onClick={()=>setCurruntPage(page)} className={`cursor-pointer ${curruntPage==page ?'bg-blue-100':'bg-blue-50'}`}>
      <span aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 
       hover:bg-blue-100 hover:text-blue-700 ">{page}</span>
    </li>)}
    
    <li className='cursor-pointer'  onClick={()=>chansgeNextCurrentPage()}>
      <span  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500
       bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
        <span className="sr-only">Next</span>
        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        </svg>
      </span>
    </li>
  </ul>
</nav>

    </div>
  )
}

export default Pagination
