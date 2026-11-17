import { useState } from "react";
import useSearchMovies from "./useSearchMovies";

function SearchMovies() {
    const [query, setQuery] = useState("Batman");

    const {
        data,
        loading,
        error
    } = useSearchMovies(query);

    const handleSearch = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <h1>Search Movies</h1>

            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search movie"
            />

            {loading && <h2>Loading...</h2>}

            {error && <h2>Error: {error}</h2>}

            {data &&
                data.Search &&
                data.Search.map((movie) => (
                    <div key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                ))}
        </div>
    );
}

export default SearchMovies;