import React from "react";

const HelpIcon = ({ className = "h-5 w-5 hover:text-orange-500" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M8.5 10a3.5 3.5 0 017 0v2a3.5 3.5 0 01-7 0v-2z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M10 16h4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export default HelpIcon;
