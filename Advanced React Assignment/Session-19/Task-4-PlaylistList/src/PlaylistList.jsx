import { useDispatch, useSelector } from "react-redux";
import { deleteSong } from "./playlistSlice";

function PlaylistList() {
  const songs = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(deleteSong(id));
  };

  return (
    <div>
      <h1>Playlist</h1>

      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
          <p>Artist: {song.artist}</p>

          <button onClick={() => handleRemove(song.id)}>
            Remove
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default PlaylistList;