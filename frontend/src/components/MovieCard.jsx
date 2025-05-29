import '../css/MovieCard.css'

function MovieCard({ movie })  // Supposing in the beginning that we get an object i.e., movie
{

    function onFavoriteClick() {
        alert("clicked")
    }

    return ( // The class inside div is called className as class is a reserved keyword for JS
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">

                    <button className="favorite-btn" onClick={onFavoriteClick}>
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