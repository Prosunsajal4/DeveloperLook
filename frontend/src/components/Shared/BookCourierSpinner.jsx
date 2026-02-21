import React from "react";

const BookCourierSpinner = ({ size = 64, color = "#6366f1" }) => (
  <div className="flex flex-col items-center justify-center gap-2">
    <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin-slow drop-shadow-lg"
        style={{
          animation: "spin 2s linear infinite",
          filter: `drop-shadow(0 0 10px ${color}40)`,
        }}
      >
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke={color}
          strokeWidth="6"
          strokeDasharray="44 44"
          strokeDashoffset="0"
          opacity="0.3"
          className="animate-pulse"
        />
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke={color}
          strokeWidth="4"
          strokeDasharray="22 66"
          strokeDashoffset="0"
          opacity="0.8"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
          fontWeight="bold"
          fill={color}
          fontFamily="monospace"
          className="animate-pulse"
        >
          NewsHub
        </text>
      </svg>
      <div
        className="absolute inset-0 rounded-full animate-ping"
        style={{
          background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
          animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        }}
      />
    </div>
    <span
      className="text-indigo-600 font-bold text-lg tracking-wide animate-pulse"
      style={{ textShadow: `0 0 10px ${color}60` }}
    >
      NewsHub
    </span>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes ping {
        75%, 100% {
          transform: scale(2);
          opacity: 0;
        }
      }
      .animate-spin-slow {
        animation: spin 2s linear infinite;
      }
    `}</style>
  </div>
);

export default BookCourierSpinner;