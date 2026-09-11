import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <h2>Search Product</h2>

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={handleChange}
      />

      <p>Search Value: {search}</p>
    </div>
  );
}

export default SearchBar;