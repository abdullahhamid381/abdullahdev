import React, { useState, useEffect } from 'react';
import './HomeScss/Tyoing.scss'; // Import your SCSS file for styling

const TypingAnimation = () => {
  const texts = ["WEB DESIGNER", "WEB DEV", "FULL STACK DEV"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const text = texts[currentTextIndex];

    const typeNextChar = () => {
      setCurrentText((prev) => prev + text[currentText.length]);
    };

    const removeLastChar = () => {
      setCurrentText((prev) => prev.slice(0, -1));
    };

    const handleTyping = () => {
      if (typing && currentText.length < text.length) {
        typeNextChar();
      } else if (!typing && currentText.length > 0) {
        removeLastChar();
      } else {
        // Change text after completing typing or removing
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setTyping(!typing);
      }
    };

    const timeout = setTimeout(() => {
      handleTyping();
    }, typing ? 100 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, typing, texts]);

  return (
    <div className="typing-animation">
      <p>HI, I'M ZYAN! CREATIVE {currentText}</p>
    </div>
  );
};

export default TypingAnimation;
