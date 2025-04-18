import React from "react";
import "../styles/Searchbar.css"; 

const Searchbar = ({searchInput, handleSearch}) => {
  return (
    <div className="searchbar-container">
      <input 
        className="searchbar-input"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearch}
      />
      <div className="search-icon">
      <svg width="20px" height="20px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#909497">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <title>search_right [#1505]</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-259.000000, -280.000000)" fill="#909497">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M207.45515,134.343 L208.93985,135.757 L204.48575,140 L203,138.586 L207.45515,134.343 Z M215.6,134 C212.1266,134 209.3,131.308 209.3,128 C209.3,124.691 212.1266,122 215.6,122 C219.07445,122 221.9,124.691 221.9,128 C221.9,131.308 219.07445,134 215.6,134 L215.6,134 Z M215.6,120 C210.9611,120 207.2,123.582 207.2,128 C207.2,132.418 210.9611,136 215.6,136 C220.23995,136 224,132.418 224,128 C224,123.582 220.23995,120 215.6,120 L215.6,120 Z" id="search_right-[#1505]"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
      </div>
    </div>
  );
};

export default Searchbar;
