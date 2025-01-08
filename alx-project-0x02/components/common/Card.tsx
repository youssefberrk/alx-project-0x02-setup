import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
