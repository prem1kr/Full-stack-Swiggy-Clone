import React from "react";

const SearchIcon = ({ className = "h-5 w-5 hover:text-orange-400 " }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle
      cx="11"
      cy="11"
      r="7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M20 20l-3.5-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default SearchIcon;
