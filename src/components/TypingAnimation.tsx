import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export function TypingAnimation({ 
  words, 
  typingSpeed = 150, 
  deletingSpeed = 100, 
  delayBetweenWords = 2000 
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        // Word is complete, start deleting after delay
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
        return;
      }
      
      if (isDeleting && currentText === '') {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      
      if (isDeleting) {
        // Delete character
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        // Add character
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="relative">
      {currentText}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
}