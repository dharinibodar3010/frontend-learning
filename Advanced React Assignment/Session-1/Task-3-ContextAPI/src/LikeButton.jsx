import { useContext } from "react";
import UserContext from "./UserContext";

function LikeButton() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>User: {user.name}</p>
      <button>Like</button>
    </div>
  );
}

export default LikeButton;