import { useRef, useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const messageRef = useRef(null);

  function handleFocus() {
    messageRef.current.focus();
  }

  return (
    <div>
      <h2>Feedback Form</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <br />
      <br />

      <textarea
        ref={messageRef}
        placeholder="Enter your message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      ></textarea>

      <br />
      <br />

      <button onClick={handleFocus}>
        Focus Message
      </button>
    </div>
  );
}

export default FeedbackForm;