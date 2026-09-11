import { useState } from "react";

function PlaylistAdder() {
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [songs, setSongs] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    if (songName === "" || artist === "") {
      return;
    }

    const newSong = {
      songName: songName,
      artist: artist
    };

    setSongs([...songs, newSong]);

    setSongName("");
    setArtist("");
  }

  return (
    <div>
      <h2>Add Song</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter song name"
          value={songName}
          onChange={(event) => setSongName(event.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Enter artist name"
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Add Song
        </button>
      </form>

      <h3>My Playlist</h3>

      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            {song.songName} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistAdder;