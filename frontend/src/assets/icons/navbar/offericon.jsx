import React from "react";

const OffersIcon = ({ className = "h-5 w-5 hover:text-orange-500 " }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M12 2l2.3 4.7L19 7.3l-3.5 3.4.8 4.7L12 13.7 7.7 15.4l.8-4.7L5 7.3l4.7-.6L12 2z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

export default OffersIcon;
