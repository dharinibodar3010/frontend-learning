import UserContext from "./UserContext";
import Feed from "./Feed";

function App() {
  const user = {
    name: "Dharini"
  };

  return (
    <UserContext.Provider value={user}>
      <Feed />
    </UserContext.Provider>
  );
}

export default App;