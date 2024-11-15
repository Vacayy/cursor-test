"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import TileColumn from "@/components/TileColumn";
import { useCallback, useEffect, useState } from "react";
import { SkeletonTiles } from "@/components/skeletons/SkeletonTiles";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const handleTileClick = useCallback(() => {
    setClickCount(prev => prev + 1);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const routeToHome = () => {
    router.push("/");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button variant="default" onClick={routeToHome}>
        Home ({clickCount})
      </Button>      
      <div className="w-full h-full flex justify-center">
        {isLoading ? (          
          <SkeletonTiles />
        ) : (        
          Array.from({ length: 40 }, (_, i) => (
            <TileColumn key={i} onTileClick={handleTileClick} />
          ))
        )}
      </div>
    </div>
  );
}
