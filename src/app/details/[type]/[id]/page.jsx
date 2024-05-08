import { getDetails } from '@/contextAPI/ContextAPI/getDetails';
import {  startLinkImag } from '@/contextAPI/constances';
import Image from 'next/image';
import React from 'react'
import DataContent from './DataContent';

const page = async ({ params }) => {
    const data = await getDetails(params.type, params.id);


    // console.log(data);
    return (
        <div className='details pt-[.1rem] md:pt-[6rem] container '>
            <div className="h-[100%] md:pt-0 pt-[6rem] dataContent flex flex-col md:flex-row justify-center gap-[2rem] md:gap-[5rem] items-center ">
                <Image className='w-[20rem]  rounded-md shadow-sm' src={data.poster_path?startLinkImag + data.poster_path : startLinkImag+ data.profile_path} width={100} height={100} priority alt='picter' />
                <DataContent data={data}/>
            </div>

        </div>
    )
}

export default page
