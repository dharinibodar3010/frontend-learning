function Playlist(props) {
  return (
    <div>
      <h2>My Playlist</h2>

      <ul>
        {props.songs.map((song, index) => (
          <li key={index}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;