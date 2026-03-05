import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

export const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="flex justify-center mt-3">
      <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-lg animate-error">

        <FaExclamationCircle className="text-red-500 text-lg" />

        <p className="text-red-600 font-medium text-sm">
          {message}
        </p>

      </div>

      <style>
        {`
          @keyframes errorShake {
            0% { transform: translateX(0); opacity:0 }
            20% { transform: translateX(-5px); opacity:1 }
            40% { transform: translateX(5px); }
            60% { transform: translateX(-5px); }
            80% { transform: translateX(5px); }
            100% { transform: translateX(0); }
          }

          .animate-error {
            animation: errorShake 0.4s ease;
          }
        `}
      </style>
    </div>
  );
};