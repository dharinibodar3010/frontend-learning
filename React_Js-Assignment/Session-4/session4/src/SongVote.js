import { useState } from "react";

function SongVote() {
  const [votes, setVotes] = useState(0);

  function upVote() {
    setVotes(votes + 1);
  }

  function downVote() {
    if (votes > 0) {
      setVotes(votes - 1);
    }
  }

  return (
    <div>
      <h2>Calm Down</h2>

      <button onClick={upVote}>
        ↑
      </button>

      <span> Votes: {votes} </span>

      <button onClick={downVote}>
        ↓
      </button>
    </div>
  );
}

export default SongVote;