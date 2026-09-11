import { useEffect, useState } from "react";

function TrendingSongs() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(false);

  async function fetchSongs() {
    try {
      setError(false);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setSongs(data.slice(0, 3));
    } catch (error) {
      setSongs([]);
      setError(true);
    }
  }

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <h2>Trending Songs</h2>

      {error ? (
        <p>Error loading data</p>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>{song.title}</li>
          ))}
        </ul>
      )}

      <button onClick={fetchSongs}>
        Reload
      </button>
    </div>
  );
}

export default TrendingSongs;