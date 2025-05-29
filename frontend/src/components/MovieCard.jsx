import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContexts'

function MovieCard({ movie })  // Supposing in the beginning that we get an object i.e., movie
{
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) 
    {
        if(isFavorite(movie.id)) removeFromFavorites(movie.id)

        else addToFavorites(movie)
    }


    return ( // The class inside div is called className as class is a reserved keyword for JS
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">

                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        ❤︎
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard