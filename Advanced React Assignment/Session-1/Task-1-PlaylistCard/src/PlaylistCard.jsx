function PlaylistCard(props) {
  return (
    <div>
      <h2>{props.songName}</h2>
      <p>Artist: {props.artist}</p>
    </div>
  );
}

export default PlaylistCard;