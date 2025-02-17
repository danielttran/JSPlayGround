import '../css/Home.css'

import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { getPopularMovies, searchMovies } from '../services/api'

function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true) // loading first when load
    

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.error(err)
                setError("Failed to load moives...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])


    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }
        catch (err) {
            console.error(err)
            setError("Failed to search movie...")
        }
        finally {
            setLoading(false)
        }

    }

    return <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="search for movies..."
                className="search-input"
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {error && <div className='error-message' >{error}</div>}
            {loading ?
                (<div className='loading'>Loading...</div>) :
                (
                    movies.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))
                )
            }
        </div>
        <div>movie above me</div>
    </div>
}

export default Home