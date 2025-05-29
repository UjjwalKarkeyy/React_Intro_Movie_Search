import MovieCard from "../components/MovieCard.jsx"
import { useState } from "react"

// Now, components make up parts of the UI right and yes you can make them whole pages, but we don't want that. That's not why we use components.
// So, we create pages folder to store all the pages that we are going to show and we'll later use page router to jump or say redirect between pages.

// State: State is something where once it's updated, the component will change and re-render itself to show the new state
/*
We mainly use state here for search bar so when the user types something like say I typed "I" then the results should start showing Intersteller,
Insidious, etc.
*/


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        { id: 1, title: "Intersteller", release_date: 2023 },
        { id: 2, title: "Once Upon a Time in London", release_date: 2015 },
        { id: 3, title: "Insidious", release_date: 2003 },
        { id: 4, title: "Shawshank Redemption", release_date: 2001 },
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button className="search-btn">Search</button>

            </form>
            <div className="movies-grid">

                {/* doing '&&' is pretty much saying, if the left hand side is true then do the right thing. Also, this code is used to dynamically show results while typing movie in search bar.*/}
                {/* {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard movie={movie} key={movie.id} />)}   */}

                {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default Home