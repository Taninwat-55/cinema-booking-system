import React from "react";

const SortPrice = ({ sortPrice, onSortChange }) => {
  return (
    <div>
      <select value={sortPrice} onChange={onSortChange}>
        <option value="desc">Low to High</option>
        <option value="asc">High to Low</option>
      </select>
    </div>
  );
};

export default SortPrice;