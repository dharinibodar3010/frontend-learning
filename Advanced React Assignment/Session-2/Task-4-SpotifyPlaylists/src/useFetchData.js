import { useEffect, useState } from "react";

function useFetchData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                return response.json();
            })
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [url]);

    return {
        data,
        loading,
        error
    };
}

export default useFetchData;