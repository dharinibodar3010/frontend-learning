import PlaylistCard from "./PlaylistCard";

function App() {
  return (
    <div>
      <h1>My Playlist</h1>

      <PlaylistCard
        songName="Perfect"
        artist="Ed Sheeran"
      />

      <PlaylistCard
        songName="Calm Down"
        artist="Rema"
      />

      <PlaylistCard
        songName="Shape of You"
        artist="Ed Sheeran"
      />
    </div>
  );
}

export default App;