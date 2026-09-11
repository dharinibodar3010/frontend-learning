import { useState } from "react";

import UserContext from "./UserContext";
import Navbar from "./Navbar";

import ThemeContext from "./ThemeContext";
import ThemeButton from "./ThemeButton";

import Parent from "./Parent";

import { NotificationProvider } from "./NotificationContext";
import NotificationDemo from "./NotificationDemo";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const user = {
    username: "Dharini",
    loggedIn: true
  };

  const mainStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    minHeight: "100vh",
    padding: "20px"
  };

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div style={mainStyle}>
          <h1>React Context API</h1>

          <Navbar />

          <hr />

          <ThemeButton />

          <hr />

          <Parent />

          <hr />

          <NotificationProvider>
            <NotificationDemo />
          </NotificationProvider>
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;