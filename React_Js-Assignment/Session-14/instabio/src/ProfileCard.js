function ProfileCard(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "300px",
        textAlign: "center"
      }}
    >
      <img
        src={props.profilePic}
        alt="Profile"
        width="120"
        height="120"
      />

      <h2>{props.name}</h2>

      <p>{props.bio}</p>
    </div>
  );
}

export default ProfileCard;