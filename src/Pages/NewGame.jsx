import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import GenreList from "../Components/GenreList";
import GameApi from "../services/GameApi";
import GamesByGenresId from "../Components/GamesByGenresId";
// import { searchGame } from "../services/GameApi";

function NewGame() {
    const footerText = "See Other Movies";
    const [allGameList,setAllGameList]=useState();
    const [gameListByGenres,setGameListByGenres]=useState([]);
    const [selctedGenresName,setSelctedGenresName]=useState('Action');
    
    useEffect(()=>{
        getAllGamesList();
        getGameListByGenresId(4);
        // getGameListByGenresId(4).then((resp) => {
        //     setGameListByGenres(resp.data.results)
        // })
    },[])

    const getAllGamesList=()=>{
        GameApi.getAllGames.then((resp)=>{
            setAllGameList(resp.data.results)
            
        })
    }

    const getGameListByGenresId=(id)=>{
        GameApi.getGameListByGenreId(id).then((resp)=>{
            setGameListByGenres(resp.data.results)
        })
    }

    // const searchId = async(g) => {
    //     if (g.length > 3){
    //         const query = await searchGame(g)
    //         setGameListByGenres(query.resp.data.results)
    //     }
    // }

return (
<>
    <header className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex items-center sm:justify-between sm:gap-4">
                <div className="relative hidden sm:block">
                    <label className="sr-only" htmlFor="search"> Search </label>

                    <input className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                        id="search" type="search" placeholder="Search website..." onChange={({target})=>
                    searchId(target.value)}
                    />

                    <button type="button"
                        className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700">
                        <span className="sr-only">Search</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
                    <div className="flex gap-4">
                        <button type="button"
                            className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden">
                            <span className="sr-only">Search</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        <a href="/notif"
                            className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700">
                            <span className="sr-only">Notifications</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </a>
                    </div>

                    <button type="button" className="group flex shrink-0 items-center rounded-lg transition">
                        <span className="sr-only">Menu</span>
                        <img alt="Man"
                            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-10 w-10 rounded-full object-cover" />

                        <p className="ms-2 hidden text-left text-xs sm:block">
                            <strong className="block font-medium">Universe Admin</strong>

                            <span className="text-gray-500"> admin@universe.id </span>
                        </p>

                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="mt-8 w-max">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome To <p
                        className=" animate-typing overflow-hidden whitespace-nowrap border-r-4">Universe Game!</p>
                </h1>

                <p className="mt-1.5 text-sm text-gray-500">
                    Top 1 Game list Website! 🚀
                </p>

            </div>
                        <br />
            <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-gray-600">
                <li>
                <a href="#" className="block transition hover:text-gray-700">
                    <span className="sr-only"> Home </span>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                    </svg>
                </a>
                </li>

                <li className="rtl:rotate-180">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                    />
                </svg>
                </li>

                <li>
                <a href="/" className="block transition hover:text-gray-700"> Movie </a>
                </li>

                <li className="rtl:rotate-180">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                    />
                </svg>
                </li>

                <li>
                <a href="/gamelist" className="block transition hover:text-gray-700"> Game </a>
                </li>
            </ol>
            </nav>
        </div>
    </header>
    <br />
    <div className="grid grid-cols-4 px-5 mb-5">
        <div className="hidden md:block me-2">
            <GenreList 
            genereId={(genereId)=>getGameListByGenresId(genereId)}
            selectedGenresName={(name)=>setSelctedGenresName(name)}
            />
        </div>
        <div className="col-span-4 md:col-span-3">
            {allGameList?.length>0&&gameListByGenres.length>0?
            <div>
            <GamesByGenresId gameList={gameListByGenres} 
            selctedGenresName={selctedGenresName} />
            </div>
            :null}
        </div>
    </div>
    <Footer footerText={footerText} />
</>
);
}

export default NewGame;
