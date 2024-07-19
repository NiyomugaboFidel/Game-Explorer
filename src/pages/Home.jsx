import React, { useEffect, useState } from 'react'
import GenreList from '../components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../components/Banner'
import TrendingGames from '../components/TrendingGames'
import GamesByGenresId from '../components/GamesByGenresId'

const Home = ({toggle}) => {
    const [allGamesList, setAllGamesList] = useState([])
    const [gameListByGenre, setGameListByGenre] = useState([])
    const [selectedGenresName, setSelectedGenresName] = useState('Action')
    useEffect(()=>{
        getAllGamesList();
        getGameListByGenreId(4)
    },[])

 const getAllGamesList = ()=>{
    GlobalApi.getAllGames.then((resp)=>{
        // console.log(resp.data.results);
        setAllGamesList(resp.data.results);
    });
 }

 const getGameListByGenreId = (id)=>{
    // console.log('GenreId', id);
    GlobalApi.getGameListByGenreId(id).then((resp)=>{
        // console.log(resp.data.results);
        setGameListByGenre(resp.data.results);
    })
 }
  return (
   <div className='flex flex-col gap-20 sm:grid md:grid-cols-4 px-4'>
        <div className={` col-span-1 h-full ${toggle ? 'block' : 'hidden'} md:block`}> 
            <div className=' shadow-xl shadow-gray-900/20 dark:shadow-indigo-200/15 
             dark:bg-gray-800 z-30
             bg-white
               rounded-lg mt-4 absolute'>
            <GenreList genreId={(genreId)=> getGameListByGenreId(genreId)} selectedGenresName={(name)=> setSelectedGenresName(name)} />            
            </div>
        </div>
        <div className='col-span-3 h-full'>
            {
                allGamesList?.length > 0&&gameListByGenre.length >0 ?
                  <div>
                        <Banner gameBanner={allGamesList[4]} />
                        <TrendingGames gameList={allGamesList} />
                        <GamesByGenresId gameList={gameListByGenre} selectedGenresName={selectedGenresName} />
                  </div>
                : null
            }
        </div>
   </div>
  )
}

export default Home