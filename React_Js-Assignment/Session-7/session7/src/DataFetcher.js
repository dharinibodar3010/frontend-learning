import { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div>
      <h2>Data Fetcher</h2>

      <button>
        Fetch Data
      </button>

      {data && <p>{data.title}</p>}
    </div>
  );
}

export default DataFetcher;