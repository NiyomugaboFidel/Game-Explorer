import React, { useEffect } from 'react'

const TrendingGames = ({gameList}) => {

    useEffect(() => {
        // console.log(gameList);    
    },[])
    
  return (
    <div className='mt-5'>
        <h2 className='font-bold text-[30px] dark:text-white'>Trending Games</h2>
        <div className=' block  sm:grid gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        {
            gameList.map((item, index)=> index < 4 && (
                <div className='bg-[#76a8f75e] rounded-lg mb-5 group
                hover:scale-110 transition-all duration-300 ease-in-out' key={item.id}>
                     <img src={item.background_image} alt={item.name} 
                     className='h-[270px]  rounded-t-lg object-cover'/>
                    <h2 className='dark:text-white p-2 text-[20px] font-bold'>{item.name}</h2>

                </div>
            ))
        }
    </div>
    </div>
  )
}

export default TrendingGames