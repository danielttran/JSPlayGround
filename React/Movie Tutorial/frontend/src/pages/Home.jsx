import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, title: "movie 1", release_date: "2020" },
        { id: 2, title: "movie 2", release_date: "2021" },
        { id: 3, title: "movie 3", release_date: "2022" },

    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
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
            {movies.map(movie => 
            movie.title.toLowerCase().includes(searchQuery) && <MovieCard movie={movie} key={movie.id} 
            />)}
        </div>
    </div>
}

export default Home