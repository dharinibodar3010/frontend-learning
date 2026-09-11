function FollowerList(props) {
  return (
    <div>
      <h2>Followers</h2>

      {props.followers.length === 0 ? (
        <p>No followers yet</p>
      ) : (
        <ul>
          {props.followers.map((follower, index) => (
            <li key={index}>{follower}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FollowerList;