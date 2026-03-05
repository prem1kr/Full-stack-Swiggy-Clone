import React from "react";

const UserIcon = ({ className = "h-5 w-5 hover:text-orange-500 " }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UserIcon;
