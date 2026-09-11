import UserGreeting from "./UserGreeting";
import UserGreetingClass from "./UserGreetingClass";
import MiniProfile from "./MiniProfile";

function App() {
  return (
    <div>
      <h1>Welcome to React JSX!</h1>

      <UserGreeting username="Dharini" />

      <UserGreetingClass username="Dharini" />

      <MiniProfile />
    </div>
  );
}

export default App;