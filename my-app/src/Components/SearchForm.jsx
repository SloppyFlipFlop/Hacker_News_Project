import React from "react";

import { useAppContext } from "../utils/context";
// import { reducer } from "../utils/reducer";

const SearchForm = () => {
  const { query, handleSearch  } = useAppContext();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>Search Hacker News</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {console.log(query)}
      {/* {error.show && <div className="error">{error.msg}</div>} */}
    </form>
  );
};


export default SearchForm;
