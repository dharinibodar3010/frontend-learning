import { useEffect, useRef } from "react";

function SearchBar() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Search Bar</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search song"
      />

      <button>Search</button>
    </div>
  );
}

export default SearchBar;