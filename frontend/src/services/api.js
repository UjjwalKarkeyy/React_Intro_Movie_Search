const API_KEY = "457ae7072303b6929674f2f637ccc9ea"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () =>
{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) =>
{
    // URI: Uniform Resource Identifier. We do encode so things like: query = ujjwal & karki, gets proper formatting and don't break the URL.
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)  
    const data = await response.json()
    return data.results
}
