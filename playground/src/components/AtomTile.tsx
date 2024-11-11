"use client";
import { useState } from "react";

interface AtomTileProps {
  onClick?: () => void;
}

export default function AtomTile({ onClick }: AtomTileProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (isActive) {
        setIsActive(false);
    } else {
        setIsActive(true);
    }
    onClick?.();
  };

  return (
    <div
      className={`w-4 h-4 aspect-square border-[0.5px] border-gray-300 cursor-pointer transition-colors ${
        isActive ? "bg-blue-500" : "bg-white hover:bg-gray-100"
      }`}
      onClick={handleClick}
    />
  );
}
