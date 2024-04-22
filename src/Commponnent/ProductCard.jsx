import React from 'react'
// import img from '../../public/banner2.jpg'
import Image from 'next/image'
// const pro = {
//     name: 'mobile',
//     price: 100,
//     pic: img,
//     desc: 'good mobile and camera is bettuful ',
//     rate: 4.2
// }

function ProductCard({ pro }) {
    //console.log(pro.image);
    return (
        <div  className='productCurd border-[1rem] w-[100%] h-[13rem] space-y-3 cursor-pointer justify-center items-center'>
            <div className="picture flex justify-center ">
                <Image className=' rounded' src={pro.image} alt='pic' width={100} height={100} priority />
            </div>
            <div className="title">
                <h4>{pro.title}</h4>
            </div>
            <div >
                <p className=' text-neutral-400 text-[.9rem] truncate'>{pro.description}</p>
            </div>


        </div>
    )
}

export default ProductCard
