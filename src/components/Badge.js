import React from "react";

export default function Badge({ type, text, fontSizeClass, color }) {
  const BadgeClasses = {
    primary: "text-blue-700 border border-blue-700 bg-blue-100",
    success: "text-green-700 border border-green-700 bg-green-100",
    danger: "text-red-700 border border-red-700 bg-red-100",
    warning: "text-yellow-700 border border-yellow-700 bg-yellow-100",
    default: "text-gray-700 border border-gray-700 bg-gray-100",
  };

  const badgeClass = BadgeClasses[type] || BadgeClasses.default;

  return (
    <span
      className={` ${badgeClass} ${fontSizeClass} font-medium px-2.5 py-0.5 rounded-full`}
    >
      {text}
    </span>
  );
}
