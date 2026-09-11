import { useRef, useState } from "react";

function AddToPlaylist() {
  const [songName, setSongName] = useState("");
  const [songs, setSongs] = useState([]);

  const inputRef = useRef(null);

  function handleAdd() {
    if (songName === "") {
      return;
    }

    setSongs([...songs, songName]);

    setSongName("");

    inputRef.current.focus();
  }

  return (
    <div>
      <h2>Add To Playlist</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter song name"
        value={songName}
        onChange={(event) => setSongName(event.target.value)}
      />

      <button onClick={handleAdd}>
        Add
      </button>

      <h3>My Playlist</h3>

      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddToPlaylist;