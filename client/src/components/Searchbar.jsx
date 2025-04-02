import React from "react";

const Searchbar = ({searchInput, handleSearch}) => {
  return (
    <div>
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
