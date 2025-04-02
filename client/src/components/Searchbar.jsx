import React from "react";
import "../styles/Searchbar.css"; 

const Searchbar = ({searchInput, handleSearch}) => {
  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Searchbar;
