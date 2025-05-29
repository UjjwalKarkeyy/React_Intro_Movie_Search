import MovieCard from "../components/MovieCard.jsx"
import { useState, useEffect } from "react"
import '../css/Home.css'
import { searchMovies, getPopularMovies } from "../services/api.js";

// useEffect: This allows you to add side effects to your functions/components and define when they should run

// Now, components make up parts of the UI right and yes you can make them whole pages, but we don't want that. That's not why we use components.
// So, we create pages folder to store all the pages that we are going to show and we'll later use page router to jump or say redirect between pages.

// State: State is something where once it's updated, the component will change and re-render itself to show the new state
/*
We mainly use state here for search bar so when the user types something like say I typed "I" then the results should start showing Intersteller,
Insidious, etc.
*/

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    // This is basically saying, useEffect(() =>, []), if we have no change i.e., [], then execute left side
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch (err) {
                console.log(err);

                setErr("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)

        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setErr(null)
        }
        catch(err){
            console.log("Error while searching: \n" , err)
            setErr("Failed to search movie...")
            
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button className="search-btn">Search</button>

            </form>

            {err && <div className="error-msg">{err}</div>}
            {loading ? <div className="loading">Loading...</div> :
                <div className="movies-grid">

                    {/* doing '&&' is pretty much saying, if the left hand side is true then do the right thing. Also, this code is used to dynamically show results while typing movie in search bar.*/}
                    {/* {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard movie={movie} key={movie.id} />)}   */}

                    {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
                </div>
            }
        </div>
    )
}

export default Home