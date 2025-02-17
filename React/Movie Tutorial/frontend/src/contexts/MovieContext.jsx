// state manager to remember favorites

import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites")
        if (storedFavorites) setFavorites(JSON.parse(storedFavorites))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites]) // anytime favorites changes, we update

    const addToFavorites = (newMovie) => {
        setFavorites(current => [...current, newMovie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(current => current.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id == movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}