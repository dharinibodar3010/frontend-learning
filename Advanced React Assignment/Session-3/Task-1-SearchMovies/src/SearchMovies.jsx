import useSearchMovies from "./useSearchMovies";

function SearchMovies() {
    const data = useSearchMovies("Batman");

    return (
        <div>
            <h1>Search Movies</h1>

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