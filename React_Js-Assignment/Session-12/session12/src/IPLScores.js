import { useEffect, useState } from "react";

function IPLScores() {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(false);

  async function fetchScores() {
    try {
      setError(false);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (response.status !== 200) {
        throw new Error("Failed to fetch scores");
      }

      const data = await response.json();

      setScores(data);
    } catch (error) {
      setScores([]);
      setError(true);
    }
  }

  useEffect(() => {
    fetchScores();
  }, []);

  return (
    <div>
      <h2>IPL Scores</h2>

      {error ? (
        <p>Error loading scores</p>
      ) : (
        <ul>
          {scores.map((score) => (
            <li key={score.id}>
              {score.name} - Score: {score.id * 20}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IPLScores;