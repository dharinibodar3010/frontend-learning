import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function DeepChild() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h3>Deep Child Component</h3>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default DeepChild;