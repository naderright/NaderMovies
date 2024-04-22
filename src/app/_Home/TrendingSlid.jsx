import React from 'react'
import Slider from '../../Commponnent/Slider/SliderComponent'

function TrendingSlid({name,data}) {
  return (
    <div>
        {/* {console.log('tr'+data)} */}
        {/* {console.log(name)} */}
        <section className='Trending text-primary pt-3'>
            <h3 className=' font-medium text-[1rem] text-primary  mb-2'><span className='drop-shadow-sm tracking-normal   border-b-[.1rem]  border-primary'>{name}</span></h3>
             <Slider data={data}/>
        </section>
    </div>
  )
}

export default TrendingSlid
