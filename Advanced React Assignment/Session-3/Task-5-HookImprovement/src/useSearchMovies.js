import { useEffect, useState } from "react";

function useSearchMovies(query) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) {
            setData(null);
            setError(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        fetch(
            "https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=" + query
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network error");
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

    return {
        data,
        loading,
        error
    };
}

export default useSearchMovies;