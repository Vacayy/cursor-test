"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function Home() {
  const router = useRouter();
  const texts = ["Hey, how are you?", "Let's start with the simple one."];
  const { displayTexts, isTyping } = useTypewriter({ texts });

  const routeToMain = () => {
    router.push("/main");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold h-8">
          {displayTexts[0]}
          {isTyping && displayTexts[0] !== texts[0] && <span className="animate-blink">|</span>}
        </h1>
        <h2 className="text-sm text-gray-500 h-6">
          {displayTexts[1]}
          {isTyping && displayTexts[1] !== texts[1] && <span className="animate-blink">|</span>}
        </h2>
      </div> 
      <Button variant="default" onClick={routeToMain}>
        Start
      </Button>
    </div>
  );
}
