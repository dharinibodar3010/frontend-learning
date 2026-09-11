import { useEffect } from "react";

function TrendingSongs() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <h2>Trending Songs</h2>
      <p>Check the browser console.</p>
    </div>
  );
}

export default TrendingSongs;