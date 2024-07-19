import React, { useEffect } from 'react'

const GamesByGenresId = ({gameList, selectedGenresName}) => {

    useEffect(()=>{
    // console.log('gameList',gameList);
    },[]);

  return (
<div className='mb-10'>
    <h2 className='font-bold text-[30px] dark:text-white mt-5'>{selectedGenresName} Games</h2>
<div className='mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4
    gap-6'>
        {
            gameList.map((item, index)=>(
             <div key={item.id} className='bg-[#76a8f75e] p-3 rounded-lg h-full pb-10
             hover:scale-110 transition-all ease-in-out duration-300'>
                <img src={item.background_image} alt={item.name} 
                className='w-full h-[80%] rounded-xl 
                object-cover'
                 />
                <h2 className='text-[16px] font-semibold dark:text-white'>{item.name}
                    <span className='p-1 rounded-full ml-2 text-[10px]
                     bg-green-100  text-green-700 font-semibold'> 
                     {item.metacritic}
                    </span>
                </h2>
                <h2 className='text-gray-500 dark:text-gray-200'>
                    ⭐{item.rating}  💬{item.reviews_count} 🔥{item.suggestions_count}
                </h2>
        
             </div>
            ))
        }    
    
    </div>
</div>
  )
}

export default GamesByGenresId