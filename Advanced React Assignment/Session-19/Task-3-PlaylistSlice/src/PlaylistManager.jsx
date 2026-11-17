import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, deleteSong } from "./playlistSlice";

function PlaylistManager() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const songs = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  const handleAddSong = () => {
    if (title && artist) {
      dispatch(
        addSong({
          id: Date.now(),
          title: title,
          artist: artist
        })
      );

      setTitle("");
      setArtist("");
    }
  };

  const handleDeleteSong = (id) => {
    dispatch(deleteSong(id));
  };

  return (
    <div>
      <h1>Playlist Manager</h1>

      <input
        type="text"
        placeholder="Song Name"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Artist Name"
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
      />

      <br />
      <br />

      <button onClick={handleAddSong}>
        Add Song
      </button>

      <h2>Playlist</h2>

      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
          <p>Artist: {song.artist}</p>

          <button onClick={() => handleDeleteSong(song.id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default PlaylistManager;