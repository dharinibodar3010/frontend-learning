import { useState } from "react";
import axios from "axios";

function AddPlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const playlist = {
      title: playlistName,
      body: description
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", playlist)
      .then((response) => {
        setMessage("Playlist added successfully!");

        setPlaylistName("");
        setDescription("");
      })
      .catch(() => {
        setMessage("Failed to add playlist");
      });
  }

  return (
    <div>
      <h2>Add Playlist</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter playlist name"
          value={playlistName}
          onChange={(event) => setPlaylistName(event.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>

        <br />
        <br />

        <button type="submit">
          Add Playlist
        </button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default AddPlaylist;