import React, { useEffect } from 'react'

const Banner = ({gameBanner}) => {

    useEffect(()=>{
        // console.log(gameBanner);
    })
  return (
    <div className='mt-3 relative'>
        <div className=' absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 w-full'> 
            <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
            <button className='bg-blue-700 text-white px-2 p-1'>Get Now</button>
        </div>
        <img src={gameBanner.background_image} alt={gameBanner.name} 
        className=' md:h-[320px] w-full object-cover
        rounded-xl object-center h-[60vh]'
        />
    </div>
  )
}

export default Banner