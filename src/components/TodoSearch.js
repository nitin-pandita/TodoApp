import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoSearch = ({ setSearchValue }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(searchInput);

    setSearchInput("");
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="search-input"
        placeholder="Search for Todo !!"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        {" "}
        {/* Call handleSearch when the button is clicked */}
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default TodoSearch;
