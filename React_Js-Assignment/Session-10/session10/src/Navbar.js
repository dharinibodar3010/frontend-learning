import { useContext } from "react";
import UserContext from "./UserContext";

function Navbar() {
  const user = useContext(UserContext);

  return (
    <nav>
      <h2>My App</h2>
      <p>Welcome, {user.username}</p>
    </nav>
  );
}

export default Navbar;