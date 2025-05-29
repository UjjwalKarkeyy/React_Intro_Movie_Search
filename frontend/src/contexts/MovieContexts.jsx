// local storage: Allows us to store values directly inside our browser

// Context: Will allow state to be globally available to anything that's within the provided context.

/*
    Like we did with our App where we wrapped it around BrowseRouter which provides all the routes to App, similary, we are trying to provide
    state to all the components. If we just declare this for say Home then the Favorites page won't be able to use it, which is why we use contexts.
    When wrapped around this Movie Provider, all its childrens which are basically the elements that are wrapped around, get access to these states.
*/

import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])  // Adds the new movie to the prev array
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)  // Returns a boolean value
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    }

    // We wrap our movie context provider to all the childrens so all of them can use all these states and functions
    // value is basically all the values that the children have access to
    return <MovieContext.Provider value={value}>  
        {children}
    </MovieContext.Provider>
}