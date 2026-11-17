import { useEffect, useState } from "react";

function useSearchMovies(query) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(
            "https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=" + query
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch movies");
                }

                return response.json();
            })
            .then((result) => {
                if (result.Response === "False") {
                    throw new Error(result.Error);
                }

                setData(result);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [query]);

    useEffect(() => {
        if (data) {
            console.log("Movie data changed:", data);
        }
    }, [data]);

    return {
        data,
        loading,
        error 
    };
}

export default useSearchMovies;