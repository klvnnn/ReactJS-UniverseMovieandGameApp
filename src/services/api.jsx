import axios from "axios";
const api_key = import.meta.env.VITE_API_KEY;
const base_url = import.meta.env.VITE_BASE_URL;

export const getMovieList = async() => {
    const movie = await axios.get(
        `${base_url}/movie/popular?page=1&api_key=${api_key}`
    )
    return movie.data.results
}

export const searchMovie = async(q) => {
    const search = await axios.get(`${base_url}/search/movie?query=${q}&page=1&api_key=${api_key}`)
    return search.data
}