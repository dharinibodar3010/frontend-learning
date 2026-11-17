import { useEffect, useState } from "react";

function useTrendingMovies() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_API_KEY"
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch movies");
                }

                return response.json();
            })
            .then((result) => {
                setData(result.results);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return {
        data,
        loading,
        error
    };
}

export default useTrendingMovies;
