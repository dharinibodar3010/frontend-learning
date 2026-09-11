import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Likes: {count}</h2>

      <button onClick={handleClick}>
        Like
      </button>
    </div>
  );
}

export default LikeButton;