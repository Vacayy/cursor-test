"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import TileColumn from "@/components/TileColumn";

export default function Home() {
  const router = useRouter();

  const routeToHome = () => {
    router.push("/");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button variant="default" onClick={routeToHome}>
        Home
      </Button>
      <div className="w-full h-full flex justify-center">
        {Array.from({ length: 40 }, (_, i) => (
          <TileColumn key={i} />
        ))}
      </div>
    </div>
  );
}