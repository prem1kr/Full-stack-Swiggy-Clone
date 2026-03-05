import React from "react";

export const LoadingBtn = ({ loading, text, primaryColor, hoverColor }) => {
  return (
    <button
      disabled={loading}
      className="relative overflow-hidden w-full flex items-center justify-center text-white font-semibold py-3 rounded-md transition duration-300"
      style={{ backgroundColor: primaryColor }}
      onMouseEnter={(e) =>
        !loading && (e.target.style.backgroundColor = hoverColor)
      }
      onMouseLeave={(e) =>
        !loading && (e.target.style.backgroundColor = primaryColor)
      }
    >
      {loading ? (
        <div className="flex items-center gap-2">
          {/* Animated Dots */}
          <span className="flex gap-1">
            <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.15s]"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.3s]"></span>
          </span>

          <span className="tracking-wide">Processing</span>
        </div>
      ) : (
        text
      )}

      {/* Shine Effect */}
      {loading && (
        <span className="absolute inset-0 overflow-hidden">
          <span className="absolute top-0 left-[-75%] h-full w-1/2 bg-white/20 skew-x-12 animate-[shine_1.5s_linear_infinite]" />
        </span>
      )}

      <style>
        {`
        @keyframes shine {
          0% { left: -75%; }
          100% { left: 125%; }
        }
      `}
      </style>
    </button>
  );
};