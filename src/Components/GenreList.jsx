import React, { useEffect, useState } from 'react'
import GameApi from "../services/GameApi";

function GenreList({genereId,selectedGenresName}) {

    const [genreList,setGenreList]=useState([])
    const [activeIndex,setActiveIndex]=useState(0)
    useEffect(()=>{
        getGenreList();
    },[])
    const getGenreList=()=>{
        GameApi.getGenreList.then((resp)=>{
            console.log(resp.data.results);
            setGenreList(resp.data.results);
        })
    }

return (
    <div className="px-6">
    <h2 className="text-[30px] font-bold pb-2">Genres</h2>
        {genreList.map((item,index)=>(
            <div 
            onClick={()=>{setActiveIndex(index);genereId(item.id);
            selectedGenresName(item.name)}}
            className={`flex gap-2 items-center mb-2 cursor-pointer
            hover:bg-gray-300 p-2 group rounded-lg
            ${activeIndex==index?"bg-gray-300":null}`}>
                <img src={item.image_background} 
                className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex==index?"scale-105":null}`} />
                <h3 className={`text-[18px] group-hover:font-bold ${activeIndex==index?"font-bold":null}`}>{item.name}</h3>
            </div>
        )) } 
</div>
    // <div className='px-6'>
    //     <h2 className='text-[30px] font-bold text-dark'>Genre</h2>
    //     {genreList.map((item,index)=>(
    //         <div 
    //         onClick={()=>{setActiveIndex(index);genereId(item.id);
    //             selectedGenresName(item.name)}}
    //         className={`flex gap-2 items-center mb-2 cursor-pointer
    //         hover:bg-gray-300 p-2 group
    //         rounded-lg hover:dark:bg-gray-600
    //         ${activeIndex==index?"bg-gray-300 dark:bg-gray-600":null}`}>
    //             <img src={item.image_background} 
    //             className={`w-[40px] h-[40px] 
    //             object-cover rounded-lg group-hover:scale-105 transition-all
    //             ease-out duration-300 ${activeIndex==index?"scale-105":null}`}/>
    //             <h3 className={`dark:text-white text-[18px]
    //             group-hover:font-bold transition-all
    //             ease-out duration-300 ${activeIndex==index?"font-bold":null}`}>{item.name}</h3>
    //         </div>
    //     ))}
    // </div>
)
}

export default GenreList