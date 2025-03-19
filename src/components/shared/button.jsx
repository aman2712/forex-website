import React from "react";

export default function Button({ text, icon, type, className }) {
  return (
    // Button element with dynamic styling based on type
    <button
      className={`
        px-5 py-2 
        cursor-pointer 
        border border-blue-500 
        rounded-full 
        flex items-center gap-2 
        ${type === "primary"
          ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 hover:shadow-lg"
          : "bg-transparent text-blue-500 hover:bg-blue-600 hover:text-white hover:border-blue-600"} 
        transition duration-300 ease-in-out 
        ${className || ""}
      `}
    >
      {/* Button text */}
      {text}

      {/* Optional icon if provided */}
      {icon && icon}
    </button>
  );
}