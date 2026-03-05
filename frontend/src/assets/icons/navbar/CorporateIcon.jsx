import React from "react";

const CorporateIcon = ({ className = "h-5 w-5  hover:text-orange-500" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M7 7h10m-9 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-11 0v11a2 2 0 002 2h8a2 2 0 002-2V7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CorporateIcon;
