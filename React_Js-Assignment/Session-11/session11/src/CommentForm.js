import { useState } from "react";
import axios from "axios";

function CommentForm() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [response, setResponse] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const newComment = {
      username: username,
      comment: comment
    };

    axios
      .post(
        "https://jsonplaceholder.typicode.com/comments",
        newComment
      )
      .then((result) => {
        setResponse(result.data);

        setUsername("");
        setComment("");
      });
  }

  return (
    <div>
      <h2>Add Comment</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Enter comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>

        <br />
        <br />

        <button type="submit">
          Submit Comment
        </button>
      </form>

      {response && (
        <div>
          <h3>Response</h3>
          <p>Username: {response.username}</p>
          <p>Comment: {response.comment}</p>
          <p>ID: {response.id}</p>
        </div>
      )}
    </div>
  );
}

export default CommentForm;