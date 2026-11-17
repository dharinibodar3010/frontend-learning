import useFetchData from "./useFetchData";

function SpotifyPlaylists() {
    const {
        data,
        loading,
        error
    } = useFetchData("https://fakestoreapi.com/products");

    if (loading) {
        return <h2>Loading playlists...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div>
            <h1>Spotify Playlists</h1>

            {data.map((playlist) => (
                <div key={playlist.id}>
                    <h3>{playlist.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default SpotifyPlaylists;