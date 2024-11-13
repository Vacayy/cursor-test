import { useState, useEffect } from 'react';

interface TypewriterOptions {
  texts: string[];           // 순차적으로 표시할 텍스트 배열
  typingSpeed?: number;      // 타이핑 속도 (ms)
  delayBetweenTexts?: number; // 텍스트 사이 딜레이 (ms)
}

interface TypewriterResult {
  displayTexts: string[];    // 현재 표시되는 텍스트 배열
  isTyping: boolean;         // 타이핑 진행 중 여부
  currentTextIndex: number;  // 현재 타이핑 중인 텍스트 인덱스
}

export const useTypewriter = ({
  texts,
  typingSpeed = 50,
  delayBetweenTexts = 500
}: TypewriterOptions): TypewriterResult => {
  const [displayTexts, setDisplayTexts] = useState<string[]>(Array(texts.length).fill(''));
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentTextIndex >= texts.length) {
      setIsTyping(false);
      return;
    }

    const currentFullText = texts[currentTextIndex];

    if (currentCharIndex >= currentFullText.length) {
      // 현재 텍스트 타이핑이 완료되면 다음 텍스트로 이동
      const timer = setTimeout(() => {
        setCurrentTextIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, delayBetweenTexts);

      return () => clearTimeout(timer);
    }

    // 한 글자씩 타이핑
    const timer = setTimeout(() => {
      setDisplayTexts(prev => {
        const newTexts = [...prev];
        newTexts[currentTextIndex] = currentFullText.slice(0, currentCharIndex + 1);
        return newTexts;
      });
      setCurrentCharIndex(prev => prev + 1);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentTextIndex, currentCharIndex, texts, typingSpeed, delayBetweenTexts]);

  return {
    displayTexts,
    isTyping,
    currentTextIndex
  };
}; 