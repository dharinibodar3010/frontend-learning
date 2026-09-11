import TrendingSongs from "./TrendingSongs";
import IPLScoreFetcher from "./IPLScoreFetcher";
import MovieSuggestions from "./MovieSuggestions";
import DataFetcher from "./DataFetcher";

function App() {
  return (
    <div>
      <h1>React useEffect Examples</h1>

      <TrendingSongs />

      <hr />

      <IPLScoreFetcher />

      <hr />

      <MovieSuggestions />

      <hr />

      <DataFetcher />
    </div>
  );
}

export default App;