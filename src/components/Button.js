import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Button({ type, buttonStyles, text }) {
  const ButtonStyles = {
    primary:
      "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",
    success:
      "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",
    danger:
      "bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",
    warning:
      "bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",
    default:
      "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",
  };

  const buttonStyle = type ? `${ButtonStyles[type]}` : buttonStyles;

  return (
    <div>
      <button type="button" className={`${buttonStyle} flex`}>
        {type === "danger" && <RiDeleteBinLine className="mr-1 my-auto" />}
        <span>{text}</span>
        {type !== "danger" && <FaArrowRight className="ml-1 my-auto" />}
      </button>
    </div>
  );
}
