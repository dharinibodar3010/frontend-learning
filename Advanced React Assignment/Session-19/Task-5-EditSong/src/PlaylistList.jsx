import { useDispatch, useSelector } from "react-redux";
import { editSong } from "./playlistSlice";

function PlaylistList() {
  const songs = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  const handleEdit = (song) => {
    dispatch(
      editSong({
        id: song.id,
        title: song.title + " Updated",
        artist: song.artist
      })
    );
  };

  return (
    <div>
      <h1>Playlist</h1>

      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
          <p>Artist: {song.artist}</p>

          <button onClick={() => handleEdit(song)}>
            Edit
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default PlaylistList;