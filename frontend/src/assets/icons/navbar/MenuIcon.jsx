import React from "react";

const MenuIcon = ({ className = "h-5 w-5 hover:text-orange-500 " }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M4 7h16M4 12h16M4 17h16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default MenuIcon;
