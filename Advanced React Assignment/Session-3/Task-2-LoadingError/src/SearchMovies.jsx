import useSearchMovies from "./useSearchMovies";

function SearchMovies() {
    const {
        data,
        loading,
        error
    } = useSearchMovies("Batman");

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

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