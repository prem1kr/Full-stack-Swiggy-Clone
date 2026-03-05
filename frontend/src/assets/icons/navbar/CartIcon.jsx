import React from "react";

const CartIcon = ({ className = "h-6 w-6 hover:text-orange-500" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M6 7h12l-1 10H7L6 7zM9 7V6a3 3 0 016 0v1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CartIcon;
