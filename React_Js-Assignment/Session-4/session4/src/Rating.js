import { useState } from "react";

function Rating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Rate Your Food</h2>

      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray"
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;