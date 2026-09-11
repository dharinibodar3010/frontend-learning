import { useRef, useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef(null);

  function handleLogin(event) {
    event.preventDefault();

    alert("Login Successful");

    setUsername("");
    setPassword("");

    usernameRef.current.focus();
  }

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleLogin}>
        <input
          ref={usernameRef}
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;