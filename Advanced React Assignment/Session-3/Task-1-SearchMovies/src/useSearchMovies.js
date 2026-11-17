import { useEffect, useState } from "react";

function useSearchMovies(query) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(
            "https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=" + query
        )
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            });
    }, [query]);

    return data;
}

export default useSearchMovies;
