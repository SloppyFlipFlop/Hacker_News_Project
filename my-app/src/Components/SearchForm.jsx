import React from "react";

import { useAppContext } from "../utils/context";


const SearchForm = () => {
  const { query, setQuery, error } = useAppContext();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>Search Hacker News</h2>
      <input
        type="text"
        className="form-input"
        value={state.query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
