import MovieList from "./MovieList";
import AddPlaylist from "./AddPlaylist";
import RestaurantSearch from "./RestaurantSearch";
import CommentForm from "./CommentForm";

function App() {
  return (
    <div>
      <h1>React Axios Examples</h1>

      <MovieList />

      <hr />

      <AddPlaylist />

      <hr />

      <RestaurantSearch />

      <hr />

      <CommentForm />
    </div>
  );
}

export default App;