import Footer from "../Components/Footer";
import {getMovieList, searchMovie} from "../api.jsx";
import { useEffect, useState } from "react";

function Home() {
    const footerText = "See Other Movies";
    const imgUrl = import.meta.env.VITE_BASE_IMGURL;
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getMovieList().then((result) => {
            setPopularMovies(result)
        })
    }, []);

function PopularMoviesList (){
        return popularMovies.map((movie, i) => {
            return (
            <div className="pt-5 w-36 sm:w-48 md:w-64" key={i}>
                <div className="group relative block bg-black">
                    <img alt="Developer" src={`${imgUrl}/${movie.poster_path}`}
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-yellow-400">{movie.vote_average}</p>
                        <p className="text-xl font-bold text-white sm:text-2xl h-20">{movie.title}</p>
                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-sm text-white">{movie.release_date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    )
}

    const search = async(q) => {
        if (q.length > 3){
            const query = await searchMovie(q)
            setPopularMovies(query.results)
        }
    }

return (
<>
    <header className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex items-center sm:justify-between sm:gap-4">
                <div className="relative hidden sm:block">
                    <label className="sr-only" htmlFor="search"> Search </label>

                    <input className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                        id="search" type="search" placeholder="Search website..." onChange={({target})=>
                    search(target.value)}
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
                        className=" animate-typing overflow-hidden whitespace-nowrap border-r-4">Universe Movie!</p>
                </h1>

                <p className="mt-1.5 text-sm text-gray-500">
                    Top 1 Movie list Website! 🚀
                </p>

            </div>
        </div>
    </header>
    <div className="flex flex-wrap justify-center items-center gap-10">
        {/* Movie Card */}
        <PopularMoviesList />
        {/* End Movie Card */}
    </div>
    <br />
    <Footer footerText={footerText} />
</>
);
}

export default Home;
