function UserProfile(props) {
  return (
    <div style={{ border: "1px solid gray", padding: "20px", width: "300px" }}>
      <img
        src={props.profilePic}
        alt="Profile"
        width="100"
        height="100"
      />

      <h2>@{props.username}</h2>

      <p>{props.followers} Followers</p>
    </div>
  );
}

UserProfile.defaultProps = {
  followers: 0,
  profilePic: "https://i.pravatar.cc/150"
};

export default UserProfile;