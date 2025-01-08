import React from "react";
import { ButtonProps } from "../../interfaces";
import { type ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
  className = "",
}) => {
  // Define size classes
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Combine classes
  const buttonClasses = `${sizeClasses[size]} ${shape} bg-blue-500 text-white hover:bg-blue-600 ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
