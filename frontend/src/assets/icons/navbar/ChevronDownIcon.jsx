import React from "react";

const ChevronDownIcon = ({ className = "h-4 w-4 hover:text-orange-500" }) => (
  <svg viewBox="0 0 20 20" className={className}>
    <path
      d="M5 7l5 6 5-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronDownIcon;
