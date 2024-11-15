import { memo, useEffect, useState } from "react";

interface AtomTileProps {
  onClick?: () => void;
}

function AtomTile({ onClick }: AtomTileProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick?.();
  };

  useEffect(() => {
    console.log("AtomTile rendered");
  });

  return (
    <div
      className={`w-4 h-4 aspect-square border-[0.5px] border-gray-300 cursor-pointer transition-colors ${
        isActive ? "bg-blue-500" : "bg-white hover:bg-gray-300"
      }`}
      onClick={handleClick}
    />
  );
}

export default memo(AtomTile);
