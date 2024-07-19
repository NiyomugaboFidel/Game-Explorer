import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const GenreList = ({genreId, selectedGenresName}) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex,setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
    //   console.log(resp.data.results);
      setGenreList(resp.data.results);
    });
  };
  return (
    <div className="px-2  ">
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {genreList.map((item,index) => (
        <div
          key={item.id}
          onClick={()=> {setActiveIndex(index) ; genreId(item.id) ;
            selectedGenresName(item.name)
          }}
          className={` md:flex gap-2  item-center mb-2 cursor-pointer
                hover:bg-gray-300 hover:dark:bg-gray-600
                p-2 rounded-lg group ${activeIndex == index ?'bg-gray-300 dark:bg-gray-600 ': null}`}
        >
          <img
            src={item.image_background}
            alt={item.name}
            className={`w-[40px] h-[40px]
                     object-cover rounded-md 
                     group-hover:scale-105 
                     transition-all ease-out duration-300
                      ${activeIndex == index ?'scale-105': null}`}
          />
          <h3 className={`group-hover:font-bold transition-all ease-out duration-300
             dark:text-white text-[20px] font-semibold ${activeIndex == index ?'font-bold sm:font-semibold': null}`}>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
