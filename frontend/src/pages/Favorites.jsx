import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContexts'
import MovieCard from '../components/MovieCard'

function Favorites() {

    const { favorites } = useMovieContext()

    return <div className='favorite-movies'>
        <h1>Your Favorites</h1>
    <div className="movies-grid">
        {favorites.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
    </div>
    </div>
}

export default Favorites